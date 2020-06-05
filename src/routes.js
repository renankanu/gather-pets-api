import { Router } from 'express';

import { userListAll, userCreate } from './app/controller/UserController';
import auth from './app/controller/AuthController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World.' }));

routes.get('/users', userListAll);
routes.post('/users', userCreate);
routes.post('/auth', auth);

export default routes;
