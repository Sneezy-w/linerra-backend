export const optionReqVOToApiReq = (optionReqVO) => {
  const { packingFee, labelFormat, ...rest } = optionReqVO;
  return {
    //...(referenceNumber && { reference_number: referenceNumber }),
    //...(vipAccount && { vip_account: vipAccount }),
    ...(packingFee && { packing_fee: packingFee }),
    ...(labelFormat && { label_format: labelFormat }),
    ...rest,
  };
};
