import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import UserController from "../controllers/user-controller.js"
import pemasokController from "../controllers/pemasok-controller.js";
import { db } from "../../database/config/db.js";

const publicRouter = new express.Router()

publicRouter.post('/api/users/login', UserController.login)
publicRouter.get('/api/users/login', (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method="POST" action="/api/users/login">
            <input name="username" placeholder="username" />
            <input name="password" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    `)
})

publicRouter.get('/api/users/current', authMiddleware, UserController.get)
publicRouter.get('/api/users/logout', authMiddleware, UserController.logout)

// Pemasok 
publicRouter.get('/api/pemasok', authMiddleware, pemasokController.getListAll)
publicRouter.get('/api/pemasok/:id', authMiddleware, pemasokController.get)


export {
    publicRouter
}