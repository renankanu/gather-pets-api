import { Router } from 'express';
import {
  userListAll,
  userCreate,
  userUpdate,
} from '../app/controller/UserController';
import authMiddleware from '../app/middlewares/authentication';

const usersRouter = Router();

usersRouter.post('/', userCreate);

usersRouter.use(authMiddleware);

usersRouter.get('/', userListAll);
usersRouter.put('/', userUpdate);

export default usersRouter;
