import express from "express";
import UserController from "../controllers/user-controller.js"
import {authMiddleware} from "../middleware/auth-middleware.js";

const userRouter = new express.Router()
userRouter.use(authMiddleware)

// User API
// userRouter.get('/api/users/current', UserController.get)
// userRouter.patch('/api/users/current', UserController.update)
// userRouter.delete('/api/users/logout', UserController.logout)


export {
    userRouter
}