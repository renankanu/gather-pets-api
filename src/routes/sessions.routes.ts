import { Router } from 'express';
import session from '../app/controller/SessionController';

const sessionsRouter = Router();

sessionsRouter.post('/', session);

export default sessionsRouter;
