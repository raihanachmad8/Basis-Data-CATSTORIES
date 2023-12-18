import { logger } from "../app/logging.js"
import { pengirimanService } from "../services/pengiriman-service.js"

const getAllPengiriman = async (req, res) => {
    try {
        const { search, sort, orderBy, groupBy } = req.query
        const result = await pengirimanService.getAll(search, sort, orderBy, groupBy)
        logger.info("Get all pengiriman success")

        res.status(200).json({
            status: 200,
            message: "Get all pengiriman success",
            data: result,
        }).end()
    } catch (e) {
        next(e)
    }
}


const get = async (req, res, next) => {
    try {
        const result = await pengirimanService.get(req.params.id)
        logger.info('Get pengiriman by id success')
        res.status(200).json({
            status: 200,
            message: 'Get pengiriman by id success',
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        const result = await pengirimanService.create(req.body)
        logger.info("Create pengiriman success")
        res.status(201).json({
            status: 201,
            message: 'Create pengiriman success',
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        console.log(req.body)
        const result = await pengirimanService.update(req.body)
        logger.info('Update pengiriman success')
        res.status(201).json({
            status: 201,
            message: "Update pengiriman success",
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await pengirimanService.remove(req.params.id)
        logger.info('Delete pengiriman success')
        res.status(200).json({
            status: 200,
            message: 'Delete pengiriman success',
            data: "OK"
        }).end()
    } catch (e) {
        next(e)
    }
}

export const pengirimanController = {
    getAllPengiriman,
    get,
    create,
    update,
    remove
}