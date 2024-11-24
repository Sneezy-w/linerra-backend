import { verykGeneralService } from '@linerra/core';

export async function getCarriers(req, res) {
  const carriers = verykGeneralService.getCarriers();
  res.ok(carriers);
}

export async function getRegions(req, res) {
  const regions = await verykGeneralService.getRegions();
  res.ok(regions);
}

export async function getProvinces(req, res) {
  const regionId = req.query.regionId;
  const provinces = await verykGeneralService.getProvinces(
    regionId,
    req.context.acceptLanguage,
  );
  res.ok(provinces);
}
