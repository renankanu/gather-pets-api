import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Probe';

export async function probe(request: Request, response: Response, next: NextFunction) {
    logging.info(NAMESPACE, 'Sample for health check route called.');

    return response.status(200).json({
        message: 'Probe'
    });
}
