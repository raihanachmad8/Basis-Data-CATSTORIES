import { logger } from "../app/logging.js"
import { pembeliService } from "../services/pembeli-service.js"

const getAllPembeli = async (req, res, next) => {
    try {
        const { search, sort, orderBy, groupBy } = req.query
        const result = await pembeliService.getAll(search, sort, orderBy, groupBy)
        logger.info("Get all pembeli success")

        res.status(200).json({
            status: 200,
            message: "Get all pembeli success",
            data: result,
        }).end()
    } catch (e) {
        next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const result = await pembeliService.get(req.params.id)
        logger.info('Get pembeli by id success')
        res.status(200).json({
            status: 200,
            message: 'Get pembeli by id success',
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        const result = await pembeliService.create(req.body)
        logger.info("Create pembeli success")
        res.status(201).json({
            status: 201,
            message: 'Create pembeli success',
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await pembeliService.update(req.body)
        logger.info('Update pembeli success')
        res.status(201).json({
            status: 201,
            message: "Update pembeli success",
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await pembeliService.remove(req.params.id)
        logger.info('Delete pembeli success')
        res.status(201).json({
            status: 201,
            message: "Delete pembeli success",
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

export const pembeliController = {
    getAllPembeli,
    get,
    create,
    update,
    remove
}