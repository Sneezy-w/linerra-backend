import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import * as verykGeneralController from '../controllers/veryk/verykGeneralController.js';
import path from './common/path.js';
const verykGeneralRouter = Router();

verykGeneralRouter.use(auth);

verykGeneralRouter.get(
  path.verykGeneral.getCarriers,
  verykGeneralController.getCarriers,
);
verykGeneralRouter.get(
  path.verykGeneral.getProvinces,
  verykGeneralController.getProvinces,
);
verykGeneralRouter.get(
  path.verykGeneral.getRegions,
  verykGeneralController.getRegions,
);

export default verykGeneralRouter;
