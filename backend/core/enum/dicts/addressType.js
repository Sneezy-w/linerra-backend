import BaseDictEnum from './baseDictEnum.js';

//class AddressType extends BaseDictEnum {}

export const AddressType = {
  RESIDENTIAL: new BaseDictEnum(
    'RESIDENTIAL',
    'residentType.residential',
    'residential',
    'Residential',
  ),
  COMMERCIAL: new BaseDictEnum(
    'COMMERCIAL',
    'residentType.commercial',
    'commercial',
    'Commercial',
  ),
};
