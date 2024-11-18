import BaseDictEnum from './baseDictEnum.js';

export const LabelFormatCanadaPost = {
  A4_PDF_8_5X11: new BaseDictEnum(
    'A4_PDF_8_5X11',
    'labelFormat.Canada_Post.A4_PDF_8_5X11',
    '8.5x11',
    '8.5x11_A4_PDF(Recommend)',
  ),
  THERMAL_4X6: new BaseDictEnum(
    'THERMAL_4X6',
    'labelFormat.Canada_Post.THERMAL_4X6',
    '4x6',
    '4x6 Thermal',
  ),
};

export const LabelFormatFedex = {
  PAPER_4X8: new BaseDictEnum(
    'PAPER_4X8',
    'labelFormat.Fedex.PAPER_4X8',
    'PAPER_4X8',
    'PAPER_4X8',
  ),
  STOCK_4X6: new BaseDictEnum(
    'STOCK_4X6',
    'labelFormat.Fedex.STOCK_4X6',
    'STOCK_4X6',
    'STOCK_4X6',
  ),
  PAPER_7X4_75: new BaseDictEnum(
    'PAPER_7X4_75',
    'labelFormat.Fedex.PAPER_7X4_75',
    'PAPER_7X4.75',
    'PAPER_7X4.75',
  ),
  PAPER_8_5X11_BOTTOM_HALF_LABEL: new BaseDictEnum(
    'PAPER_8_5X11_BOTTOM_HALF_LABEL',
    'labelFormat.Fedex.PAPER_8_5X11_BOTTOM_HALF_LABEL',
    'PAPER_8.5X11_BOTTOM_HALF_LABEL',
    'PAPER_8.5X11_BOTTOM_HALF_LABEL',
  ),

  PAPER_8_5X11_TOP_HALF_LABEL: new BaseDictEnum(
    'PAPER_8_5X11_TOP_HALF_LABEL',
    'labelFormat.Fedex.PAPER_8_5X11_TOP_HALF_LABEL',
    'PAPER_8.5X11_TOP_HALF_LABEL',
    'PAPER_8.5X11_TOP_HALF_LABEL',
  ),

  PAPER_LETTER: new BaseDictEnum(
    'PAPER_LETTER',
    'labelFormat.Fedex.PAPER_LETTER',
    'PAPER_LETTER',
    'PAPER_LETTER(Recommend)',
  ),
};

export const LabelFormatDHL = {
  A4_PDF_8X4: new BaseDictEnum(
    'A4_PDF_8X4',
    'labelFormat.DHL.A4_PDF_8X4',
    '8X4_A4_PDF',
    '8X4_A4_PDF',
  ),

  THERMAL_8X4: new BaseDictEnum(
    'THERMAL_8X4',
    'labelFormat.DHL.THERMAL_8X4',
    '8X4_thermal',
    '8X4_thermal(Recommend)',
  ),

  A4_TC_PDF_8X4: new BaseDictEnum(
    'A4_TC_PDF_8X4',
    'labelFormat.DHL.A4_TC_PDF_8X4',
    '8X4_A4_TC_PDF',
    '8X4_A4_TC_PDF',
  ),

  CI_PDF_8X4: new BaseDictEnum(
    'CI_PDF_8X4',
    'labelFormat.DHL.CI_PDF_8X4',
    '8X4_CI_PDF',
    '8X4_CI_PDF',
  ),

  CI_THERMAL_8X4: new BaseDictEnum(
    'CI_THERMAL_8X4',
    'labelFormat.DHL.CI_THERMAL_8X4',
    '8X4_CI_thermal',
    '8X4_CI_thermal',
  ),

  CI_PDF_6X4: new BaseDictEnum(
    'CI_PDF_6X4',
    'labelFormat.DHL.CI_PDF_6X4',
    '6X4_A4_PDF',
    '6X4_A4_PDF',
  ),

  THERMAL_6X4: new BaseDictEnum(
    'THERMAL_6X4',
    'labelFormat.DHL.THERMAL_6X4',
    '6X4_thermal',
    '6X4_thermal',
  ),

  RU_A4_PDF_8X4: new BaseDictEnum(
    'RU_A4_PDF_8X4',
    'labelFormat.DHL.RU_A4_PDF_8X4',
    '8X4_RU_A4_PDF',
    '8X4_RU_A4_PDF',
  ),
};

export const LabelFormatUPS = {
  THERMAL_PDF_6X4: new BaseDictEnum(
    'THERMAL_PDF_6X4',
    'labelFormat.UPS.THERMAL_PDF_6X4',
    '6X4_THERMAL_PDF',
    '6X4_thermal_PDF',
  ),

  A4_PDF: new BaseDictEnum(
    'A4_PDF',
    'labelFormat.UPS.A4_PDF',
    'A4_PDF',
    'A4_PDF',
  ),
};

export const LabelFormatPurolator = {
  REGULAR: new BaseDictEnum(
    'REGULAR',
    'labelFormat.Purolator.REGULAR',
    'Regular',
    'Regular',
  ),

  THERMAL: new BaseDictEnum(
    'THERMAL',
    'labelFormat.Purolator.THERMAL',
    'Thermal',
    'Thermal',
  ),
};
