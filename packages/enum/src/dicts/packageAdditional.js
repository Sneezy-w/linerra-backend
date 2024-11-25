import BaseDictEnum from './baseDictEnum.js';

export const PackageAdditionalDCType = {
  NO_SIGNATURE: new BaseDictEnum(
    'NO_SIGNATURE',
    'packageAdditional.DC.noSignature',
    '0',
    'No Signature',
  ),
  SIGNATURE_REQUIRED: new BaseDictEnum(
    'SIGNATURE_REQUIRED',
    'packageAdditional.DC.signatureRequired',
    '1',
    'Signature Required',
  ),
  ADULT_SIGNATURE_REQUIRED: new BaseDictEnum(
    'ADULT_SIGNATURE_REQUIRED',
    'packageAdditional.DC.adultSignatureRequired',
    '2',
    'Adult Signature Required',
  ),
};

export const PackageAdditionalCODFundType = {
  CHECK: new BaseDictEnum(
    'CHECK',
    'packageAdditional.COD.check',
    '0',
    "0:Check, Cash Cashier's Check Money Order",
  ),
  CASHIER_CHECK: new BaseDictEnum(
    'CASHIER_CHECK',
    'packageAdditional.COD.cashierCheck',
    '8',
    "8:Cashier's Check Money Order",
  ),
};

export const PackCodeState = {
  PIECE: new BaseDictEnum('PIECE', 'packCodeState.piece', 'PIECE', 'Piece'),
  BAG: new BaseDictEnum('BAG', 'packCodeState.bag', 'BAG', 'Bag'),
  BARREL: new BaseDictEnum(
    'BARREL',
    'packCodeState.barrel',
    'BARREL',
    'Barrel',
  ),
  BASKET: new BaseDictEnum(
    'BASKET',
    'packCodeState.basket',
    'BASKET',
    'Basket',
  ),
  BOX: new BaseDictEnum('BOX', 'packCodeState.box', 'BOX', 'Box'),
  BUCKET: new BaseDictEnum(
    'BUCKET',
    'packCodeState.bucket',
    'BUCKET',
    'Bucket',
  ),
  BUNDLE: new BaseDictEnum(
    'BUNDLE',
    'packCodeState.bundle',
    'BUNDLE',
    'Bundle',
  ),
  CARTON: new BaseDictEnum(
    'CARTON',
    'packCodeState.carton',
    'CARTON',
    'Container',
  ),
  CASE: new BaseDictEnum('CASE', 'packCodeState.case', 'CASE', 'Case'),
  CRATE: new BaseDictEnum('CRATE', 'packCodeState.crate', 'CRATE', 'Crate'),
  CYLINDER: new BaseDictEnum(
    'CYLINDER',
    'packCodeState.cylinder',
    'CYLINDER',
    'Cylinder',
  ),
  DRUM: new BaseDictEnum('DRUM', 'packCodeState.drum', 'DRUM', 'Drum'),
  ENVELOPE: new BaseDictEnum(
    'ENVELOPE',
    'packCodeState.envelope',
    'ENVELOPE',
    'Envelope',
  ),
  OTHER: new BaseDictEnum('OTHER', 'packCodeState.other', 'OTHER', 'Other'),
  PAIL: new BaseDictEnum('PAIL', 'packCodeState.pail', 'PAIL', 'Pail'),
  PALLET: new BaseDictEnum(
    'PALLET',
    'packCodeState.pallet',
    'PALLET',
    'Pallet',
  ),
  REEL: new BaseDictEnum('REEL', 'packCodeState.reel', 'REEL', 'Reel'),
  ROLL: new BaseDictEnum('ROLL', 'packCodeState.roll', 'ROLL', 'Roll'),
  SKID: new BaseDictEnum('SKID', 'packCodeState.skid', 'SKID', 'Skid'),
  TANK: new BaseDictEnum('TANK', 'packCodeState.tank', 'TANK', 'Tank'),
  TUBE: new BaseDictEnum('TUBE', 'packCodeState.tube', 'TUBE', 'Tube'),
};
