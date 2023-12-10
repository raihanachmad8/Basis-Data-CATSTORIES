import { db } from "../../database/config/db.js"
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"

const getAll = async () => {
    try {
        const result = await db.select().table('Metode Pembayaran')
        if (result.length > 0) {
            return result
        } else {
            throw new ResponseError(404, "Record not found");
        }
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const seacrh = async (params) => {
    try {
        const result = await db.select().table('Metode Pembayaran').whereLike(params)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findById = async (id) => {
    try {
        const result = await db.select().table('Metode Pembayaran').where('ID_Metode_Pembayaran', id)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const create = async (data) => {
    try {
        await db('Metode Pembayaran').insert(data)
        return await db('Metode Pembayaran').where('ID_Metode_Pembayaran', data.ID_Metode_Pembayaran)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (id, data) => {
    try {
        await db('Metode Pembayaran').where('ID_Metode_Pembayaran', id).update(data)
        return await db('Metode Pembayaran').where('ID_Metode_Pembayaran', id)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    try {
        const result = await db('Metode Pembayaran').where('ID_Metode_Pembayaran', id).del()
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

export const pembayaranRepository = {
    getAll,
    seacrh,
    findById,
    create,
    update,
    remove
}


