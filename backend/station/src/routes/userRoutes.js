import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import { auth } from '../middlewares/auth.js';

const userRouter = Router();

userRouter.post('/signUp', userController.signUp);
userRouter.post('/signIn', userController.signIn);
//userRouter.post('/refreshToken', auth, userController.refreshToken);
userRouter.get('/getUserInfo', auth, userController.getUserInfo);

export default userRouter;
