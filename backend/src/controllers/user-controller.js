import userService from '../services/user-service.js'
import jwt from 'jsonwebtoken'
import { configureEnvironment } from '../config/env.js'
import { logger } from '../app/logging.js'
configureEnvironment('../../../.env')

const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body)
        const token = jwt.sign({user: result}, process.env.JWT_KEY, {expiresIn: '1h'})
        res.cookie('Authorization', token, {httpOnly: true})
        logger.info(`User ${result.username} logged in`)
        res.status(200).json({
            status: 200,
            message: "Login success",
            data: {
                user: {
                    username: result.username,
                },
                token: token
            },
        })
    } catch (e) {
        next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const cookie = req.cookies.Authorization
        const decoded = jwt.verify(cookie, process.env.JWT_KEY)
        const result = await userService.get(decoded.user.username)
        logger.info(`User ${result.username} get data`)
        res.status(200).json({
            status: 200,
            message: "Get user success",
            data: {user: result},
        })
    } catch (e) {
        next(e)
    }
}


const logout = async (req, res, next) => {
    try {
        const cookie = req.cookies.Authorization
        const decoded = await jwt.verify(cookie, process.env.JWT_KEY)

        await userService.logout(decoded.user.username)
        res.clearCookie('Authorization')
        logger.info(`User ${req.user.username} logged out`)
        res.status(200).json({
            status: 200,
            message: "Logout success",
            data: 'OK'
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