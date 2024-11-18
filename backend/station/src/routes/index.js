import { Router } from 'express';
import dictRoutes from './dictRoutes.js';
import userRoutes from './userRoutes.js';
import path from './common/path.js';

const apiRouter = Router();

apiRouter.use(path.dicts.base, dictRoutes);
apiRouter.use(path.users.base, userRoutes);

export default apiRouter;
