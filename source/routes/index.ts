import { Router } from 'express';
import probeRouter from './probe.route';

const routes = Router();

routes.get('/probe', probeRouter);

export default routes;
