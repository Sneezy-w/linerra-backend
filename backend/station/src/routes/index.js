import { Router } from 'express';
import dictRoutes from './dictRoutes.js';
import userRoutes from './userRoutes.js';
import path from './common/path.js';
import verykGeneralRoutes from './verykGeneralRoutes.js';
import verykShipmentRoutes from './verykShipmentRoutes.js';

const apiRouter = Router();

apiRouter.use(path.dicts.base, dictRoutes);
apiRouter.use(path.users.base, userRoutes);
apiRouter.use(path.verykGeneral.base, verykGeneralRoutes);
apiRouter.use(path.verykShipment.base, verykShipmentRoutes);

export default apiRouter;
