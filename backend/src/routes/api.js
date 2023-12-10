import express from "express";
import UserController from "../controllers/user-controller.js"
import {authMiddleware} from "../middleware/auth-middleware.js";

const userRouter = new express.Router()
// userRouter.use(authMiddleware)

// User API
userRouter.get('/api/v1/users/auth/current', authMiddleware, UserController.get)
userRouter.get('/api/v1/users/auth/logout', authMiddleware, UserController.logout)


export {
    userRouter
}