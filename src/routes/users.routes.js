import { Router } from 'express';
import { userListAll, userCreate } from '../app/controller/UserController';

const usersRouter = Router();

usersRouter.get('/', userListAll);
usersRouter.post('/', userCreate);

export default usersRouter;
