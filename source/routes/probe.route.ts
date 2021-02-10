import { Router } from 'express';
import { probe } from '../controllers/probe.controller';

const probeRouter = Router();

probeRouter.get('/probe', probe);

export default probeRouter;
