import { Router } from 'express';
import usersRouters from './users.routes';
import sesseionsRouter from './sessions.routes';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World.' }));

routes.use('/users', usersRouters);
routes.use('/sessions', sesseionsRouter);

export default routes;
