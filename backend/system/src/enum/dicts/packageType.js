import BaseDictEnum from './baseDictEnum.js';

export const PackageType = {
  ENV: new BaseDictEnum('ENV', 'packageType.env', 'env', 'Env'),
  PAK: new BaseDictEnum('PAK', 'packageType.pak', 'pak', 'Pak'),
  PARCEL: new BaseDictEnum('PARCEL', 'packageType.parcel', 'parcel', 'Parcel'),
  // static PALLET = new PackageType('PALLET', 'packageType.pallet', "pallet", 'Pallet');
};
