import { logger } from "../app/logging.js"
import { pembayaranService } from "../services/pembayaran-service.js"

const getAllPembayaran = async (req, res, next) => {
    try {
        const { search, sort, orderBy, groupBy } = req.query
        const result = await pembayaranService.getAll(search, sort, orderBy, groupBy)
        logger.info("Get all pembayaran success")

        res.status(200).json({
            status: 200,
            message: "Get all pembayaran success",
            data: result,
        }).end()
    }
    catch (e) {
        next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const result = await pembayaranService.get(req.params.id)
        logger.info('Get pembayaran by id success')
        res.status(200).json({
            status: 200,
            message: 'Get pembayaran by id success',
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        const result = await pembayaranService.create(req.body)
        logger.info("Create pembayaran success")
        res.status(201).json({
            status: 201,
            message: 'Create pembayaran success',
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await pembayaranService.update(req.body)
        logger.info('Update pembayaran success')
        res.status(201).json({
            status: 201,
            message: "Update pembayaran success",
            data: result
        }).end()
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await pembayaranService.remove(req.params.id)
        logger.info('Delete pembayaran success')
        res.status(200).json({
            status: 200,
            message: 'Delete pembayaran success',
            data: "OK"
        }).end()
    } catch (e) {
        next(e)
    }
}

export const pembayaranController = {
    getAllPembayaran,
    get,
    create,
    update,
    remove
}