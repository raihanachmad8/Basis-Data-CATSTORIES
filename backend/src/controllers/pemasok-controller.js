import pemasokService from '../services/pemasok-service.js'
import jwt from 'jsonwebtoken'
import { configureEnvironment } from '../config/env.js'
import { logger } from '../app/logging.js'
configureEnvironment('../../../.env')

const getListAll = async (req, res, next) => {
    try {
        const cookie = req.cookies.Authorization
        const decoded = jwt.verify(cookie, process.env.JWT_SECRET)
        const result = await pemasokService.getListAll(decoded.user.username)
        logger.info(`User ${decoded.user.username} get list pemasok`)
        res.status(200).json({
            status: 200,
            message: "Get List Pemasok",
            data: result,
        })
    } catch (e) {
        next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const id = req.params.id
        const cookie = req.cookies.Authorization
        const decoded = jwt.verify(cookie, process.env.JWT_SECRET)
        const result = await pemasokService.get(decoded.user.username, id)
        logger.info(`User ${decoded.user.username} get list pemasok`)
        res.status(200).json({
            status: 200,
            message: "Get List Pemasok",
            data: result,
        })
    } catch (e) {
        next(e)
    }
}


export default {
    getListAll,
    get
}
