import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

import routes from './routes';
import config from './config';
import { log, connect } from './util';
import { deserializeUser } from './middleware'

import jwt from 'jsonwebtoken';

const app: Express = express();


app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);
app.use(routes);

app.listen(config.port, () => {
    log.info(`Server stated on port ${config.port}`);
    connect()

})


