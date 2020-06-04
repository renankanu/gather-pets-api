import { Router } from 'express';

import { userIndex, userStore } from './app/controller/UserController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World.' }));

routes.get('/users', userIndex);
routes.post('/users', userStore);

export default routes;
