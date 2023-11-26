import express from "express";
import UserController from "../controllers/user-controller.js"
import { authMiddleware } from "../middleware/auth-middleware.js";

const publicRouter = new express.Router()

publicRouter.post('/api/users/login', UserController.login)

publicRouter.get('/api/users/cookie', authMiddleware, (req, res) => {
    res.send(req.cookies.Authorization)
})

publicRouter.post('/api/users/logout', UserController.logout)


export {
    publicRouter
}