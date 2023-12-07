import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const configureEnvironment = (path) => {
    const envFilePath = resolve(__dirname, path)
    dotenv.config({ path: envFilePath })
};
