import { verykUtils } from '@linerra/util';
import { regions, verykCarriers, provinceRecord } from '@linerra/constant';

export const getCarriers = () => {
  return verykCarriers;
};

export const getRegions = async () => {
  //const regions = await getRegion({}, acceptLanguage);
  //return regions;
  return regions.map((region) => ({
    id: region.id,
    name: region.name,
    phoneCode: region.phoneCode,
    type: region.type,
    provinces: provinceRecord[region.id],
  }));
};

export const getProvinces = async (regionId, acceptLanguage) => {
  const provinces = await verykUtils.getProvince(
    { region_id: regionId },
    acceptLanguage,
  );
  return provinces;
};
