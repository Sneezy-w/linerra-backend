import BaseDictEnum from './baseDictEnum.js';

export const ShipmentAdditionalDCType = {
  SIGNATURE_REQUIRED: new BaseDictEnum(
    'SIGNATURE_REQUIRED',
    'shipmentAdditional.DC.signatureRequired',
    '1',
    'Signature Required',
  ),
  ADULT_SIGNATURE_REQUIRED: new BaseDictEnum(
    'ADULT_SIGNATURE_REQUIRED',
    'shipmentAdditional.DC.adultSignatureRequired',
    '2',
    'Adult Signature Required',
  ),
};

export const ShipmentAdditionalSOType = {
  SO: new BaseDictEnum('SO', 'shipmentAdditional.SO.so', 'SO', 'Signature'),
  PA18: new BaseDictEnum(
    'PA18',
    'shipmentAdditional.SO.pa18',
    'PA18',
    'Signature(Proof of Age Required - 18)',
  ),
  PA19: new BaseDictEnum(
    'PA19',
    'shipmentAdditional.SO.pa19',
    'PA19',
    'Signature(Proof of Age Required - 19)',
  ),
};

export const ShipmentAdditionalREFStateCanadaPost = {
  DOC: new BaseDictEnum('DOC', 'shipmentAdditional.REF.doc', 'DOC', 'Document'),
  SAM: new BaseDictEnum(
    'SAM',
    'shipmentAdditional.REF.sam',
    'SAM',
    'Commercial Sample',
  ),
  REP: new BaseDictEnum(
    'REP',
    'shipmentAdditional.REF.rep',
    'REP',
    'Repair Or Warranty',
  ),
  SOG: new BaseDictEnum(
    'SOG',
    'shipmentAdditional.REF.sog',
    'SOG',
    'Sale Of Goods',
  ),
  OTH: new BaseDictEnum('OTH', 'shipmentAdditional.REF.oth', 'OTH', 'Other'),
};

export const ShipmentAdditionalREFStateUPS = {
  GIFT: new BaseDictEnum('GIFT', 'shipmentAdditional.REF.gift', 'GIFT', 'Gift'),
  SALE: new BaseDictEnum(
    'SALE',
    'shipmentAdditional.REF.sale',
    'SALE',
    'Sale Of Goods',
  ),
  REPAIR: new BaseDictEnum(
    'REPAIR',
    'shipmentAdditional.REF.repair',
    'REPAIR',
    'Repair Or Warranty',
  ),
  SAMPLE: new BaseDictEnum(
    'SAMPLE',
    'shipmentAdditional.REF.sample',
    'SAMPLE',
    'Commercial Sample',
  ),
  INTERCOMPANYDATA: new BaseDictEnum(
    'INTERCOMPANYDATA',
    'shipmentAdditional.REF.intercompanydata',
    'INTERCOMPANYDATA',
    'Intercompany',
  ),
  RETURN: new BaseDictEnum(
    'RETURN',
    'shipmentAdditional.REF.return',
    'RETURN',
    'Return',
  ),
  OTHER: new BaseDictEnum(
    'OTHER',
    'shipmentAdditional.REF.other',
    'OTHER',
    'Other',
  ),
};

export const ShipmentAdditionalSignatureTypeFedex = {
  SERVICE_DEFAULT: new BaseDictEnum(
    'SERVICE_DEFAULT',
    'shipmentAdditional.signature.serviceDefault',
    'SERVICE_DEFAULT',
    'Service Default',
  ),
  NO_SIGNATURE_REQUIRED: new BaseDictEnum(
    'NO_SIGNATURE_REQUIRED',
    'shipmentAdditional.signature.noSignatureRequired',
    'NO_SIGNATURE_REQUIRED',
    'No Signature Required',
  ),
  INDIRECT: new BaseDictEnum(
    'INDIRECT',
    'shipmentAdditional.signature.indirect',
    'INDIRECT',
    'Indirect',
  ),
  DIRECT: new BaseDictEnum(
    'DIRECT',
    'shipmentAdditional.signature.direct',
    'DIRECT',
    'Direct',
  ),
  ADULT: new BaseDictEnum(
    'ADULT',
    'shipmentAdditional.signature.adult',
    'ADULT',
    'Adult',
  ),
};

export const ShipmentAdditionalSignatureTypePurolator = {
  ORIGIN_SIGNATURE_NOT_REQUIRED: new BaseDictEnum(
    'ORIGIN_SIGNATURE_NOT_REQUIRED',
    'shipmentAdditional.signature.originSignatureNotRequired',
    'OriginSignatureNotRequired',
    'No Signature Required',
  ),
  RESIDENTIAL_SIGNATURE_DOMESTIC: new BaseDictEnum(
    'RESIDENTIAL_SIGNATURE_DOMESTIC',
    'shipmentAdditional.signature.residentialSignatureDomestic',
    'ResidentialSignatureDomestic',
    'Residential Signature Domestic',
  ),
  ADULT_SIGNATURE_REQUIRED: new BaseDictEnum(
    'ADULT_SIGNATURE_REQUIRED',
    'shipmentAdditional.signature.adultSignatureRequired',
    'AdultSignatureRequired',
    'Adult Signature Required',
  ),
};

export const ShipmentAdditionalSignatureTypePurolatorInternational = {
  RESIDENTIAL_SIGNATURE_INTL: new BaseDictEnum(
    'RESIDENTIAL_SIGNATURE_INTL',
    'shipmentAdditional.signature.residentialSignatureIntl',
    'ResidentialSignatureIntl',
    'Residential Signature Intl',
  ),
};

export const ShipmentAdditionalRSCode = {
  PRINT_AND_MAIL_RETURN_LABEL: new BaseDictEnum(
    'PRINT_AND_MAIL_RETURN_LABEL',
    'shipmentAdditional.RS.printAndMailReturnLabel',
    '2',
    'Print and Mail Return Label',
  ),
  ONE_ATTEMPT_RETURN_LABEL: new BaseDictEnum(
    'ONE_ATTEMPT_RETURN_LABEL',
    'shipmentAdditional.RS.oneAttemptReturnLabel',
    '3',
    'One-Attempt Return Label',
  ),
  THREE_ATTEMPT_RETURN_LABEL: new BaseDictEnum(
    'THREE_ATTEMPT_RETURN_LABEL',
    'shipmentAdditional.RS.threeAttemptReturnLabel',
    '5',
    'Three Attempt Return Label',
  ),
  ELECTRONIC_RETURN_LABEL: new BaseDictEnum(
    'ELECTRONIC_RETURN_LABEL',
    'shipmentAdditional.RS.electronicReturnLabel',
    '8',
    'Electronic Return Label',
  ),
  PRINT_RETURN_LABEL: new BaseDictEnum(
    'PRINT_RETURN_LABEL',
    'shipmentAdditional.RS.printReturnLabel',
    '9',
    'Print Return Label',
  ),
};

export const ShipmentAdditionalDGTypeDHL = {
  DANGEROUS_GOODS: new BaseDictEnum(
    'DANGEROUS_GOODS',
    'shipmentAdditional.DG.dangerousGoods',
    'HE',
    'Dangerous Goods',
  ),
  NOT_RESTRICTED_DANGEROUS_GOODS: new BaseDictEnum(
    'NOT_RESTRICTED_DANGEROUS_GOODS',
    'shipmentAdditional.DG.notRestrictedDangerousGoods',
    'HU',
    'Not Restricted Dangerous Goods',
  ),
  LITHIUM_METAL_PI970_SECTION_II: new BaseDictEnum(
    'LITHIUM_METAL_PI970_SECTION_II',
    'shipmentAdditional.DG.lithiumMetalPI970SectionII',
    'HW',
    'Lithium Metal PI970 Section II',
  ),
  LITHIUM_METAL_PI969_SECTION_II: new BaseDictEnum(
    'LITHIUM_METAL_PI969_SECTION_II',
    'shipmentAdditional.DG.lithiumMetalPI969SectionII',
    'HM',
    'Lithium Metal PI969 Section II',
  ),
  LITHIUM_ION_PI966_SECTION_II: new BaseDictEnum(
    'LITHIUM_ION_PI966_SECTION_II',
    'shipmentAdditional.DG.lithiumIonPI966SectionII',
    'HD',
    'Lithium Ion PI966 Section II',
  ),
  LITHIUM_ION_PI967_SECTION_II: new BaseDictEnum(
    'LITHIUM_ION_PI967_SECTION_II',
    'shipmentAdditional.DG.lithiumIonPI967SectionII',
    'HV',
    'Lithium Ion PI967 Section II',
  ),
};

export const ShipmentAdditionalDGTypeFedex = {
  ACCESSIBLE: new BaseDictEnum(
    'ACCESSIBLE',
    'shipmentAdditional.DG.accessible',
    'ACCESSIBLE',
    'Accessible',
  ),
  INACCESSIBLE: new BaseDictEnum(
    'INACCESSIBLE',
    'shipmentAdditional.DG.inaccessible',
    'INACCESSIBLE',
    'Inaccessible',
  ),
  LITHIUM_METAL: new BaseDictEnum(
    'LITHIUM_METAL',
    'shipmentAdditional.DG.lithiumMetal',
    'LITHIUM_METAL',
    '(Battery)Lithium metal',
  ),
  LITHIUM_ION: new BaseDictEnum(
    'LITHIUM_ION',
    'shipmentAdditional.DG.lithiumIon',
    'LITHIUM_ION',
    '(Battery)Lithium ion',
  ),
};

export const ShipmentAdditionalDITType = {
  COMMERCIAL_INVOICE: new BaseDictEnum(
    'COMMERCIAL_INVOICE',
    'shipmentAdditional.DIT.commercialInvoice',
    'CMI',
    'Commercial Invoice',
  ),
  PROFORMA_INVOICE: new BaseDictEnum(
    'PROFORMA_INVOICE',
    'shipmentAdditional.DIT.proformaInvoice',
    'PFI',
    'Proforma Invoice',
  ),
};

export const ShipmentAdditionalTermsOfTradeState = {
  DDP: new BaseDictEnum(
    'DDP',
    'shipmentAdditional.TermsOfTrade.ddp',
    'DDP',
    'DDP',
  ),
  DDU: new BaseDictEnum(
    'DDU',
    'shipmentAdditional.TermsOfTrade.ddu',
    'DDU',
    'DDU',
  ),
};

export const ShipmentAdditionalIOSSType = {
  PERSONAL_NATIONAL: new BaseDictEnum(
    'PERSONAL_NATIONAL',
    'shipmentAdditional.IOSS.personalNational',
    'PERSONAL_NATIONAL',
    'PERSONAL NATIONAL',
  ),
  PERSONAL_STATE: new BaseDictEnum(
    'PERSONAL_STATE',
    'shipmentAdditional.IOSS.personalState',
    'PERSONAL_STATE',
    'PERSONAL STATE',
  ),
  FEDERAL: new BaseDictEnum(
    'FEDERAL',
    'shipmentAdditional.IOSS.federal',
    'FEDERAL',
    'FEDERAL',
  ),
  BUSINESS_NATIONAL: new BaseDictEnum(
    'BUSINESS_NATIONAL',
    'shipmentAdditional.IOSS.businessNational',
    'BUSINESS_NATIONAL',
    'BUSINESS NATIONAL',
  ),
  BUSINESS_STATE: new BaseDictEnum(
    'BUSINESS_STATE',
    'shipmentAdditional.IOSS.businessState',
    'BUSINESS_STATE',
    'BUSINESS STATE',
  ),
  BUSINESS_UNION: new BaseDictEnum(
    'BUSINESS_UNION',
    'shipmentAdditional.IOSS.businessUnion',
    'BUSINESS_UNION',
    'BUSINESS UNION',
  ),
};
