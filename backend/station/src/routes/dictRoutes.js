import { Router } from 'express';
import * as dictController from '../controllers/dictController.js';
import { auth } from '../middlewares/auth.js';
import path from './common/path.js';

const dictRouter = Router();

dictRouter.use(auth);

dictRouter.get(path.dicts.get, dictController.getDicts);

export default dictRouter;
