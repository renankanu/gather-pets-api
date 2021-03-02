import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import logging from './config/logging';
import config from './config/config';
import routes from './routes';
import { User } from './entity/user.entity';

const NAMESPACE = 'Server';
const router = express();

createConnection()
    .then(async (connection) => {
        console.log('Inserting a new user into the database...');
        const user = new User();
        user.firstName = 'Timber';
        user.lastName = 'Saw';
        user.age = 25;
        await connection.manager.save(user);
        console.log('Saved a new user with id: ' + user.id);

        logging.info(NAMESPACE, 'Loading users from the database...');
        const users = await connection.manager.find(User);
        console.log('Loaded users: ', users);

        console.log('Here you can setup and run express/koa/any other framework.');
    })
    .catch((error) => console.log(error));

router.use((req, resp, next) => {
    logging.info(
        NAMESPACE,
        `METHOD - [${req.method}], URL - [${req.url}], 
    IP - [${req.socket.remoteAddress}]`
    );
    resp.on('finish', () => {
        logging.info(
            NAMESPACE,
            `METHOD - [${req.method}], URL - [${req.url}], 
        IP - [${req.socket.remoteAddress}], STATUS - [${resp.status}]`
        );
    });

    next();
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        resp.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return resp.status(200).json({});
    }

    next();
});

router.use(routes);

router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
