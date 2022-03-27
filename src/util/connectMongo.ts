import mongoose from 'mongoose';
import log from './logger';
import config from '../config';

export default async function connectMongo() {
    const mongoURL = config.mongoURL;
    try {
        await mongoose.connect(mongoURL);
        log.info(`Database connected.`);
    } catch (err) {
        log.error(`Connection to mongodb failed!!!:${err}`)
        process.exit(1);
    }
    // const mongoURL = config.mongoURL;
    // return mongoose.connect(mongoURL)
    //     .then(() => {
    //         log.info(`Database connected.`);
    //     })
    //     .catch(err => {
    //         log.error(`Connection to mongodb failed!!!:${err}`)
    //         process.exit(1);
    //     })
};