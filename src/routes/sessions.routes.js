import { Router } from 'express';
import auth from '../app/controller/AuthController';

const sessionsRouter = Router();

sessionsRouter.post('/', auth);

export default sessionsRouter;
