export const initiationReqVOToApiReq = (initiationReqVO) => {
  const { regionId, postalCode, phone, province, ...rest } = initiationReqVO;
  return {
    region_id: regionId,
    postalcode: postalCode,
    ...(phone && { mobile_phone: phone }),
    ...(province && { province: province.code || province.name }),
    ...rest,
  };
};

export const destinationReqVOToApiReq = (destinationReqVO) => {
  const { regionId, postalCode, phone, province, ...rest } = destinationReqVO;
  return {
    region_id: regionId,
    postalcode: postalCode,
    ...(phone && { mobile_phone: phone }),
    ...(province && { province: province.code || province.name }),
    ...rest,
  };
};

export const initiationReqVOToDO = (initiationReqVO) => {
  return { ...initiationReqVO };
};

export const destinationReqVOToDO = (destinationReqVO) => {
  return { ...destinationReqVO };
};

export const addressApiResToInitiationDO = (addressApiRes) => {
  const { region_id, postalcode, ...rest } = addressApiRes;
  return {
    regionId: region_id,
    postalCode: postalcode,
    ...rest,
  };
};

export const addressApiResToDestinationDO = (addressApiRes) => {
  const { region_id, postalcode, ...rest } = addressApiRes;
  return {
    regionId: region_id,
    postalCode: postalcode,
    ...rest,
  };
};
