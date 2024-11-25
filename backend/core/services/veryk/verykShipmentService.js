import { verykCarriers } from '@linerra/constant';
import { quoteConvert, shipmentConvert } from '@linerra/model';
import { verykUtils } from '@linerra/util';

import { generateOrderNumber, ServiceError, logger } from '@linerra/util';
import { shipmentRepository } from '@linerra/dynamodb';

import * as s3Service from '../../services/s3Service.js';
import * as lambdaService from '../../services/lambdaService.js';

const { quoteReqVOToApiReq, quoteApiResToResVO } = quoteConvert;
const {
  shipmentApiResToApiUpdateDO,
  shipmentReqVOToApiReq,
  shipmentReqVOToDO,
} = shipmentConvert;

/**
 * Get available carriers
 * @returns
 */
export const getAvailableCarriers = () => {
  const carriers = verykCarriers;
  return carriers
    .filter((carrier) => ['2', '3', '4', '5', '9'].includes(carrier.id))
    .map((carrier) => carrier.id);
};

/**
 * Get quotes
 * @param params
 * @param acceptLanguage
 * @returns
 */
export const quote = async (params, acceptLanguage) => {
  const quotes = await verykUtils.quote(
    quoteReqVOToApiReq(params),
    acceptLanguage,
  );
  return quotes.map(quoteApiResToResVO);
};

export const save = async (params, currentUser) => {
  const shipmentDO = shipmentReqVOToDO(params);
  shipmentDO.stationId = currentUser.stationId;

  if (!shipmentDO.number) {
    shipmentDO.number = generateOrderNumber('VK', currentUser.stationNo);
    await shipmentRepository.create(shipmentDO);
  } else {
    await shipmentRepository.update(shipmentDO);
  }
  return { number: shipmentDO.number };
};

export const get = async (number) => {
  const shipmentDO = await shipmentRepository.findOne(number);
  return shipmentDO;
};

export const deleteShipment = async (number) => {
  // only delete open shipment
  await shipmentRepository.delOpenShipment(number);
};

export const getPage = async (params, currentUser) => {
  const pageResult = await shipmentRepository.paginateByStation(
    params,
    currentUser.stationId,
  );
  return pageResult;
};

/**
 * Submit to veryk
 * @param params
 * @param acceptLanguage
 * @returns
 */
export const submit = async (params, currentUser, acceptLanguage) => {
  //console.log(params);
  if (params.number) {
    const shipmentDO = await get(params.number);
    //console.log(shipmentDO);
    if (shipmentDO?.status !== 'open') {
      throw new ServiceError(
        'Shipment status is not open',
        'Shipment.StatusNotOpen',
      );
    }
  }
  const { number } = await save(params, currentUser);
  //console.log(number);
  try {
    const apiReq = shipmentReqVOToApiReq(params);
    if (apiReq.option) {
      apiReq.option.reference_number = number;
    } else {
      apiReq.option = { reference_number: number };
    }
    const shipmentApiRes = await verykUtils.create(apiReq, acceptLanguage);
    //console.log(shipmentApiRes);
    //console.log(JSON.stringify(shipmentApiRes.package.packages, null, 2));

    //const labelFile = await this.saveAllLabelFile(shipmentApiRes.id, acceptLanguage);

    //const shipmentDetailApiRes = await shipmentDetail({ id: shipmentApiRes.id }, acceptLanguage);
    //console.log(JSON.stringify(shipmentDetailApiRes, null, 2));

    const shipmentApiUpdateDO = shipmentApiResToApiUpdateDO(shipmentApiRes);
    //shipmentApiUpdateDO.labelFile = labelFile;

    //console.log(shipmentApiUpdateDO);
    const Attributes =
      await shipmentRepository.updateAndReturn(shipmentApiUpdateDO);
    // const referenceNumber = generateOrderNumber("VK", currentUser.stationNo);
    // const apiReq = shipmentReqVOToApiReq(params);
    // if (apiReq.option) {
    //   apiReq.option.reference_number = referenceNumber;
    // } else {
    //   apiReq.option = { reference_number: referenceNumber };
    // }
    // const submitRes = await create(apiReq, acceptLanguage);
    // return submitRes;

    lambdaService.invokeAsynchronously(
      process.env.PROCESS_LABEL_AND_UPDATE_SHIPMENT_FUNCTION_NAME,
      { shipmentId: shipmentApiRes.id, acceptLanguage },
    );
    return {
      externalId: Attributes?.externalId,
      waybillNumber: Attributes?.waybillNumber,
      number: Attributes?.number,
    };
  } catch (error) {
    //console.error(error);
    // throw new ServiceError("Failed to submit shipment", "Shipment.SubmitFailed");
    logger.error('Failed to submit shipment', { error });
  }
  return {
    number: number || '',
  };
};

/**
 * get label
 * @param params
 * @param acceptLanguage
 * @returns
 */
export const getAllPrintableLabels = async (shipmentId) => {
  const labelApiRes = await verykUtils.getLabel({ id: shipmentId, option: 1 });
  return labelApiRes;
};

export const saveAllLabelFile = async (shipmentId) => {
  const labelApiRes = await getAllPrintableLabels(shipmentId);
  if (!labelApiRes) {
    throw new ServiceError('Label not found', 'Label.NotFound');
  }

  //console.log(labelApiRes.invoice?.name);
  //console.log(labelApiRes.delivery?.label);

  const {
    name: labelFileName,
    label: labelFileContent,
    type: labelFileType,
  } = labelApiRes;
  const labelBuffer = Buffer.from(labelFileContent, 'base64');
  const labelKey = `label/${labelFileName}`;
  await s3Service.uploadLabelFile(labelKey, labelBuffer, labelFileType);

  const labelFile = {
    label: labelKey,
  };

  //console.log("invoice", labelApiRes.invoice);

  if (labelApiRes.invoice) {
    const {
      name: invoiceFileName,
      label: invoiceFileContent,
      type: invoiceFileType,
    } = labelApiRes.invoice;
    const invoiceBuffer = Buffer.from(invoiceFileContent, 'base64');
    const invoiceKey = `invoice/${invoiceFileName}`;
    await s3Service.uploadLabelFile(invoiceKey, invoiceBuffer, invoiceFileType);
    labelFile.invoice = invoiceKey;
  }

  //console.log("deliver", labelApiRes.deliver);

  if (labelApiRes.deliver) {
    const {
      name: deliverFileName,
      label: deliverFileContent,
      type: deliverFileType,
    } = labelApiRes.deliver;
    const deliverBuffer = Buffer.from(deliverFileContent, 'base64');
    const deliverKey = `deliver/${deliverFileName}`;
    await s3Service.uploadLabelFile(deliverKey, deliverBuffer, deliverFileType);
    labelFile.deliver = deliverKey;
  }

  return labelFile;
};
