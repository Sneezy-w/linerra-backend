import { verykCarriers } from '../../constant/verykConstant.js';
import { getProvince } from '../../utils/verykUtils.js';
import { regions } from '../../constant/regionConstant.js';
import { provinceRecord } from '../../constant/provinceConstant.js';

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
  const provinces = await getProvince({ region_id: regionId }, acceptLanguage);
  return provinces;
};
