import {
  initiationReqVOToApiReq,
  destinationReqVOToApiReq,
  initiationReqVOToDO,
  destinationReqVOToDO,
} from './address.convert.js';
import {
  packageApiResToDO,
  packageDOToEditResVO,
  packageReqVOToApiReq,
  packageReqVOToDO,
} from './package.convert.js';
import { optionReqVOToApiReq } from './option.convert.js';

export const shipmentReqVOToApiReq = (shipmentReqVO) => {
  const {
    serviceId,
    initiation,
    destination,
    package: pkg,
    option,
    //carrierId, airportTo, number
    destinationLocalized,
    sadditional,
    product,
    ...rest
  } = shipmentReqVO;
  return {
    initiation: initiationReqVOToApiReq(initiation),
    destination: destinationReqVOToApiReq(destination),
    package: packageReqVOToApiReq(pkg),
    option: optionReqVOToApiReq(option),
    //carrier_id: carrierId,
    //airport_to: airportTo,
    payment_method: 'account',
    state: 'order',
    service_id: serviceId,
    ...(destinationLocalized
      ? {
          destination_localized: destinationReqVOToApiReq(destinationLocalized),
        }
      : {}),
    ...(sadditional ? { sadditional: sadditional } : {}),
    ...(product ? { product: product } : {}),
    ...rest,
  };
};

export const shipmentReqVOToDO = (shipmentReqVO) => {
  const {
    initiation,
    destination,
    package: pkg,
    option,
    number,
    serviceId,
    destinationLocalized,
    sadditional,
    product,
    price,
  } = shipmentReqVO;
  return {
    number: number || '',
    initiationRegionId: initiation.regionId,
    destinationRegionId: destination.regionId,
    initiation: initiationReqVOToDO(initiation),
    destination: destinationReqVOToDO(destination),
    package: packageReqVOToDO(pkg),
    option: option,
    serviceId,
    status: 'open',
    stationId: '',
    //sortTimestamp: "",
    //GSI1PK: "SHIPMENT_NO",
    ...(destinationLocalized
      ? { destinationLocalized: destinationReqVOToDO(destinationLocalized) }
      : {}),
    ...(sadditional ? { sadditional: sadditional } : {}),
    ...(product ? { product: product } : {}),
    ...(price ? { price: price } : {}),
  };
};

export const shipmentDOToEditResVO = (shipmentDO) => {
  return {
    number: shipmentDO.number,
    serviceId: shipmentDO.serviceId,
    initiation: shipmentDO.initiation,
    destination: shipmentDO.destination,
    package: packageDOToEditResVO(shipmentDO.package),
    status: shipmentDO.status,
    option: shipmentDO.option,
    ...(shipmentDO.destinationLocalized
      ? { destinationLocalized: shipmentDO.destinationLocalized }
      : {}),
    ...(shipmentDO.sadditional ? { sadditional: shipmentDO.sadditional } : {}),
    ...(shipmentDO.product ? { product: shipmentDO.product } : {}),
  };
};

export const shipmentApiResToApiUpdateDO = (shipmentApiRes) => {
  return {
    number: shipmentApiRes.reference_number,
    externalId: shipmentApiRes.id,
    waybillNumber: shipmentApiRes.waybill_number,
    serviceId: shipmentApiRes.service.id,
    status: shipmentApiRes.state.code,
    //initiationRegionId: shipmentApiRes.initiation_region_id,
    //destinationRegionId: shipmentApiRes.destination_region_id,
    //initiation: addressApiResToInitiationDO(shipmentApiRes.initiation.en_US),
    //destination: addressApiResToDestinationDO(shipmentApiRes.destination.en_US),
    package: packageApiResToDO(shipmentApiRes.package),

    price: shipmentApiRes.price,
    payments: Object.values(shipmentApiRes.payments).map((paymentApiRes) => ({
      dateTime: paymentApiRes.datetime,
      description: paymentApiRes.description,
      subtotal: paymentApiRes.subtotal,
    })),
    total: shipmentApiRes.total,
    submittedAt: shipmentApiRes.creationtime,
  };
};

export const shipmentDOToDetailResVO = (shipmentDO) => {
  return {
    number: shipmentDO.number,
    externalId: shipmentDO.externalId,
    waybillNumber: shipmentDO.waybillNumber,
    serviceId: shipmentDO.serviceId,
    status: shipmentDO.status,
    initiationRegionId: shipmentDO.initiationRegionId,
    destinationRegionId: shipmentDO.destinationRegionId,
    initiation: shipmentDO.initiation,
    destination: shipmentDO.destination,
    package: shipmentDO.package,
    option: shipmentDO.option,
    price: shipmentDO.price,
    payments: shipmentDO.payments,
    total: shipmentDO.total,
    submittedAt: shipmentDO.submittedAt,

    created: shipmentDO.created,

    ...(shipmentDO.destinationLocalized
      ? { destinationLocalized: shipmentDO.destinationLocalized }
      : {}),
    ...(shipmentDO.sadditional ? { sadditional: shipmentDO.sadditional } : {}),
    ...(shipmentDO.product ? { product: shipmentDO.product } : {}),
    ...(shipmentDO.labelFile ? { labelFile: shipmentDO.labelFile } : {}),
  };
};
