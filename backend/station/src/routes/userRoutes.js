import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import { auth } from '../middlewares/auth.js';
import path from './common/path.js';
const userRouter = Router();

userRouter.post(path.users.signUp, userController.signUp);
userRouter.post(path.users.signIn, userController.signIn);
userRouter.post(path.users.refreshToken, auth, userController.refreshToken);
userRouter.get(path.users.getUserInfo, auth, userController.getUserInfo);

export default userRouter;
