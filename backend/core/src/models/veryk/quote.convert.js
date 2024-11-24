import {
  initiationReqVOToApiReq,
  destinationReqVOToApiReq,
} from './address.convert.js';
import { packageReqVOToApiReq } from './package.convert.js';
import { optionReqVOToApiReq } from './option.convert.js';

export const quoteReqVOToApiReq = (quoteReqVO) => {
  const {
    initiation,
    destination,
    package: pkg,
    option,
    //carrierId, airportTo,
    carrierIds,
  } = quoteReqVO;
  return {
    initiation: initiationReqVOToApiReq(initiation),
    destination: destinationReqVOToApiReq(destination),
    package: packageReqVOToApiReq(pkg),
    option: optionReqVOToApiReq(option),
    //carrier_id: carrierId,
    //airport_to: airportTo,
    carrier_ids: carrierIds,
  };
};

export const serviceApiResToResVO = (serviceApiRes) => {
  const {
    is_manual,
    zone_id,
    carrier_zone_id,
    charge_details,
    is_standalone_account,
    tax_details,
    ...rest
  } = serviceApiRes;
  return {
    isManual: is_manual,
    zoneId: zone_id,
    carrierZoneId: carrier_zone_id,
    chargeDetails: charge_details,
    isStandaloneAccount: is_standalone_account,
    taxDetails: tax_details,
    ...rest,
  };
};

export const quoteApiResToResVO = (quoteApiRes) => {
  const { carrier_id, services, carrier_code, ...rest } = quoteApiRes;
  return {
    carrierId: carrier_id,
    services: services.map(serviceApiResToResVO),
    carrierCode: carrier_code,
    ...rest,
  };
};
