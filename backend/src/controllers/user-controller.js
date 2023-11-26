import userService from '../services/user-service.js'
import jwt from 'jsonwebtoken'
import { configureEnvironment } from '../config/env.js'
import { logger } from '../app/logging.js'
configureEnvironment('../../../.env')

const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body)
        const token = jwt.sign({user: result}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.cookie('Authorization', token, {httpOnly: true})
        logger.info(`User ${result.username} logged in`)
        res.status(200).json({
            message: "Login success",
            data: result,
            status: 200
        })
    } catch (e) {
        next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const result = await userService.get(req.user.username)
        res.status(200).json({
            message: "Get user success",
            data: result,
            status: 200
        })
    } catch (e) {
        next(e)
    }
}


const logout = async (req, res, next) => {
    try {
        await userService.logout(req.user.useraname)
        res.status(200).json({
            message: "Logout success",
            status: 200
        })
    } catch (e) {
        next(e)
    }
}


export default {
    login,
    get,
    logout
}