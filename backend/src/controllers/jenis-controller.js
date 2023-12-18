import { logger } from "../app/logging.js"
import { jenisService } from "../services/jenis-service.js"


const getAllJenis = async (req, res, next) => {
    try {
        const { search, sort, orderBy, groupBy } = req.query
        const result = await jenisService.getAllJenis(search, sort, orderBy, groupBy)
        logger.info("Get all jenis success")
        res.status(201).json({
            status: 201,
            message: "Get all jenis success",
            data: result,
        }).end()
    } catch (e) {
        next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const result = await jenisService.get(req.params.id)
        logger.info("Get jenis success")
        res.status(201).json({
            status: 201,
            message: "Get jenis success",
            data: result,
        }).end

    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        const result = await jenisService.create(req.body)
        logger.info("Create jenis success")
        res.status(201).json({
            status: 201,
            message: "Create jenis success",
            data: result,
        }).end()
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await jenisService.update(req.body)
        logger.info("Update jenis success")
        res.status(201).json({
            status: 201,
            message: "Update jenis success",
            data: result,
        }).end()
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        await jenisService.remove(req.params.id)
        logger.info("Delete jenis success")
        res.status(201).json({
            status: 201,
            message: "Delete jenis success",
            data: 'OK',
        }).end()
    } catch (e) {
        next(e)
    }
}

export const jenisController = {
    getAllJenis,
    get,
    create,
    update,
    remove
}