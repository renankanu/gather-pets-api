import { Router } from 'express';

import { userListAll, userCreate } from './app/controller/UserController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World.' }));

routes.get('/users', userListAll);
routes.post('/users', userCreate);

export default routes;
