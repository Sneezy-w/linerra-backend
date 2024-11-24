import { verykCarriers } from '../../constant/verykConstant.js';
import {
  quoteApiResToResVO,
  quoteReqVOToApiReq,
} from '../../models/veryk/quote.convert.js';
import { quote as quoteApi, create, getLabel } from '../../utils/verykUtils.js';
import {
  shipmentApiResToApiUpdateDO,
  shipmentReqVOToApiReq,
  shipmentReqVOToDO,
} from '../../models/veryk/shipment.convert.js';
import { generateOrderNumber, now } from '../../utils/utils.js';
import { MainTable } from '../../dynamodb/toolbox.js';
import { Shipment } from '../../dynamodb/entity/shipment.js';
import {
  DeleteItemCommand,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
} from 'dynamodb-toolbox';
import { UpdateAttributesCommand } from 'dynamodb-toolbox';
import ServiceError from '../../utils/serviceError.js';
//import { updateAttributesCommandReturnValuesOptionsSet } from "dynamodb-toolbox/dist/esm/entity/actions/updateAttributes/options";
import * as s3Service from '../../services/s3Service.js';
import logger from '../../utils/logger.js';
import * as lambdaService from '../../services/lambdaService.js';

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
  const quotes = await quoteApi(quoteReqVOToApiReq(params), acceptLanguage);
  return quotes.map(quoteApiResToResVO);
};

export const save = async (params, currentUser) => {
  const shipmentDO = shipmentReqVOToDO(params);
  shipmentDO.stationId = currentUser.stationId;
  //shipmentDO.sortTimestamp = now();
  //let response: UpdateItemResponse<typeof Shipment, { returnValues: 'ALL_NEW' }> | UpdateItemResponse<typeof Shipment, { returnValues: 'ALL_OLD' }>;
  //shipmentDO.GSI1PK = "SHIPMENT_NO";
  if (!shipmentDO.number) {
    shipmentDO.number = generateOrderNumber('VK', currentUser.stationNo);
    await Shipment.build(PutItemCommand)
      .item({ ...shipmentDO, sortTimestamp: now() })
      //.options({ returnValues: "ALL_OLD" })
      .send();
  } else {
    //console.log(shipmentDO);

    // const command = Shipment.build(UpdateItemCommand)
    //   .item({ ...shipmentDO })
    // console.log(command);
    //const { Item } = await Shipment.build(GetItemCommand).key({ number: shipmentDO.number }).send()

    //console.log(Item);
    //console.log({ ...Item, ...shipmentDO });
    await Shipment.build(UpdateAttributesCommand)
      .item({ ...shipmentDO })
      //.options({ returnValues: "ALL_NEW" })
      .send();
  }
  return { number: shipmentDO.number };
};

export const get = async (number) => {
  const { Item } = await Shipment.build(GetItemCommand).key({ number }).send();
  return Item;
};

export const deleteShipment = async (number) => {
  // only delete open shipment
  const condition = {
    attr: 'status',
    eq: 'open',
  };
  await Shipment.build(DeleteItemCommand)
    .key({ number })
    //@ts-ignore
    .options({ condition })
    .send();
};

export const getPage = async (params, currentUser) => {
  // const filter: Record<string, any> = {}
  // if (params.status) {
  //   filter.status = {
  //     attribute: "status",
  //     eq: params.status
  //   }
  // }
  let statusCondition, keywordCondition;
  let conditions = [];
  if (params.status) {
    statusCondition = {
      attr: 'status',
      eq: params.status,
    };
    conditions.push(statusCondition);
  }

  if (params.keyword) {
    keywordCondition = {
      or: [
        {
          attr: 'number',
          contains: params.keyword,
        },
        {
          attr: 'externalId',
          contains: params.keyword,
        },
      ],
    };
    conditions.push(keywordCondition);
  }

  let filters = {};

  if (conditions.length > 1) {
    filters.Shipment = {
      and: conditions,
    };
  } else if (conditions.length === 1) {
    filters.Shipment = conditions[0];
  }

  const pageResult = await MainTable.build(QueryCommand)
    .query({
      index: 'GSI1',
      partition: `STATION#${currentUser.stationId}`,
      range: {
        gte: `SHIPMENT#${params.dateRange[0]}`,
        lte: `SHIPMENT#${params.dateRange[1]}`,
      },
    })
    .entities(Shipment)
    .options({
      limit: conditions.length > 0 ? undefined : params.limit,
      reverse: true,
      //@ts-ignore
      filters: filters,
      exclusiveStartKey: params.lastEvaluatedKey,
    })
    .send();
  //console.log(pageResult);
  //console.log(pageResult.LastEvaluatedKey);
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
    const shipmentApiRes = await create(apiReq, acceptLanguage);
    //console.log(shipmentApiRes);
    //console.log(JSON.stringify(shipmentApiRes.package.packages, null, 2));

    //const labelFile = await this.saveAllLabelFile(shipmentApiRes.id, acceptLanguage);

    //const shipmentDetailApiRes = await shipmentDetail({ id: shipmentApiRes.id }, acceptLanguage);
    //console.log(JSON.stringify(shipmentDetailApiRes, null, 2));

    const shipmentApiUpdateDO = shipmentApiResToApiUpdateDO(shipmentApiRes);
    //shipmentApiUpdateDO.labelFile = labelFile;

    //console.log(shipmentApiUpdateDO);
    const { Attributes } = await Shipment.build(UpdateAttributesCommand)
      .item({ ...shipmentApiUpdateDO })
      .options({ returnValues: 'ALL_NEW' })
      .send();
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
  const labelApiRes = await getLabel({ id: shipmentId, option: 1 });
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
