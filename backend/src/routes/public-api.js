import express from "express";
import UserController from "../controllers/user-controller.js"
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { guestMiddleware } from "../middleware/guest-middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerSpec = YAML.load(resolve(__dirname, '../../docs/swagger.yaml'))

const publicRouter = new express.Router()

// Swagger
publicRouter.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

publicRouter.post('/api/v1/users/auth/login', guestMiddleware, UserController.login)
publicRouter.get('/api/v1/users/auth/login',guestMiddleware,  (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method="POST" action="/api/v1/users/login">
            <input name="username" placeholder="username" />
            <input name="password" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    `)
})



export {
    publicRouter
}