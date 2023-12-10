import { db } from "../../database/config/db"
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"

const getAll = async () => {
    try {
        const result = await db.select().table('Transaksi')
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const seacrh = async (params) => {
    try {
        const result = await db.select().table('Transaksi').whereLike(params)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findById = async (id) => {
    try {
        const result = await db.select().table('Transaksi').where('ID_Transaksi', id)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const create = async (data) => {
    try {
        await db('Transaksi').insert(data)
        return await db('Transaksi').select().where('ID_Transaksi', data.ID_Transaksi)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (id, data) => {
    try {
        await db('Transaksi').where('ID_Transaksi', id).update(data)
        return await db('Transaksi').select().where('ID_Transaksi', id)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    try {
        const result = await db('Transaksi').where('ID_Transaksi', id).del()
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

export const transaksiRepository = {
    getAll,
    seacrh,
    findById,
    create,
    update,
    remove
}