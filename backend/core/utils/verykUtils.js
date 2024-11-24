import crypto from 'crypto';
import axios from 'axios';

// import logger from './logger';

import ServiceError from './serviceError.js';

const verykApiUrl = process.env.VERYK_API_URL;
const verykAppId = process.env.VERYK_APP_ID;
const verykAppSecret = process.env.VERYK_APP_SECRET;

const ERROR_CODE = 'Veryk.ApiError';

const buildUrl = function (action) {
  const params = {
    id: verykAppId,
    timestamp: Math.floor(Date.now() / 1000), // ISO8601 format
    action: action,
    format: 'json',
  };

  // Convert all parameter keys to lowercase
  const lowercaseParams = Object.keys(params).reduce((acc, key) => {
    acc[key.toLowerCase()] = params[key];
    return acc;
  }, {});

  // If there is a sign, remove it
  delete lowercaseParams['sign'];

  // Sort parameter names in alphabetical order
  const sortedKeys = Object.keys(lowercaseParams).sort();

  // URL encode each parameter value
  const queryString = sortedKeys
    .map((key) => `${key}=${encodeURIComponent(lowercaseParams[key])}`)
    .join('&');

  const secret = verykAppSecret;

  // Use HMAC SHA256 encryption
  const hmac = crypto.createHmac('sha256', secret || '');
  hmac.update(queryString);

  // base64 encode to get signature
  const sign = encodeURIComponent(hmac.digest('base64'));

  return `${verykApiUrl}?${queryString}&sign=${sign}`;
};

const getResponseData = function (response) {
  if (response.data.status !== 1) {
    throw new ServiceError(response.data.message, ERROR_CODE);
  }
  return response.data.response;
};

export const getRegion = async function (acceptLanguage) {
  const url = buildUrl('region');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, {}, { headers });
  return getResponseData(response);
};

export const getProvince = async function (params, acceptLanguage) {
  const url = buildUrl('province');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};

export const getCarrier = async function (params, acceptLanguage) {
  const url = buildUrl('carrier');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};

export const getService = async function (params, acceptLanguage) {
  const url = buildUrl('service');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};

export const getAccount = async function (acceptLanguage) {
  const url = buildUrl('account');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, {}, { headers });
  return getResponseData(response);
};

export const quote = async function (params, acceptLanguage) {
  const url = buildUrl('shipment/quote');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};

// export async function submit(params: ShipmentApiReq, acceptLanguage?: string) {
//   const url = buildUrl('shipment/submit');
//   const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

//   let response = await axios.post(url, params, { headers });
//   return getResponseData(response);
// }

export const create = async function (params, acceptLanguage) {
  const url = buildUrl('shipment/create');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};

export const shipmentList = async function (params, acceptLanguage) {
  const url = buildUrl('shipment/list');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};

export const shipmentDetail = async function (params, acceptLanguage) {
  const url = buildUrl('shipment/detail');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};

export const getLabel = async function (params, acceptLanguage) {
  const url = buildUrl('shipment/label');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};

export const tracking = async function (params, acceptLanguage) {
  const url = buildUrl('shipment/tracking');
  const headers = acceptLanguage ? { 'Accept-Language': acceptLanguage } : {};

  let response = await axios.post(url, params, { headers });
  return getResponseData(response);
};
