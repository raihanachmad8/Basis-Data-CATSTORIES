import dotenv from 'dotenv';
import {resolve} from 'path';
import { getDirname } from './directory.js';

export const configureEnvironment = (path) => {
    const envFilePath = resolve(getDirname(), path)
    dotenv.config({ path: envFilePath })
};
