
import { logger } from "../app/logging.js"
import { kucingService } from "../services/kucing-service.js"

const getAllKucing = async (req, res, next) => {
    try {
        const { search, sort, orderBy, groupBy } = req.query
        const result = await kucingService.getAll(search, sort, orderBy, groupBy)
        logger.info("Get all kucing success")

        res.status(200).json({
            status: 200,
            message: "Get all kucing success",
            data: result,
        }).end()
    } catch (e) {
        next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const result = await kucingService.get(req.params.id)
        logger.info('Get kucing by id success')
        res.status(200).json({
            status: 200,
            message: 'Get kucing by id success',
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        if (!req.file) {
            logger.error("No file uploaded")
            throw new ResponseError(400, "No file uploaded")
        }
        const result = await kucingService.create(req.body, req.file)
        logger.info("Create kucing success")
        res.status(201).json({
            status: 201,
            message: 'Create kucing success',
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        if (!req.file) {
            logger.error("No file uploaded")
            throw new ResponseError(400, "No file uploaded")
        }
        const result = await kucingService.update(req.body, req.file)
        logger.info('Update kucing success')
        res.status(201).json({
            status: 201,
            message: "Update jenis success",
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await kucingService.remove(req.params.id)
        logger.info('Delete kucing success')
        res.status(201).json({
            status: 201,
            message: "Delete jenis success",
            data: "OK"
        })
    } catch (e) {
        next(e)
    }
}

const count = async (req, res, next) => {
    try {
        const result = await kucingService.count()
        logger.info('Count kucing success')
        res.status(200).json({
            status: 200,
            message: "Count kucing success",
            data: result
        })
    } catch (e) {
        next(e)
    }
}

export const kucingController = {
    getAllKucing,
    get,
    create,
    update,
    remove,
    count
}