import { db } from "../../database/config/db.js"
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"

const getAll = async () => {
    try {
        const result = await db.select().table('Jenis Pengiriman')
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const search = async (params) => {
    try {
        const result = await db.select().table('Jenis Pengiriman').whereLike(params)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findById = async (id) => {
    try {
        const result = await db.select().table('Jenis Pengiriman').where('ID_Jenis_Pengiriman', id)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const create = async (data) => {
    try {
        const result = await db('Jenis Pengiriman').insert(data)
        return await db('Jenis Pengiriman').where('ID_Jenis_Pengiriman', data.ID_Jenis_Pengiriman)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (id, data) => {
    try {
        const result = await db('Jenis Pengiriman').where('ID_Jenis_Pengiriman', id).update(data)
        return await db('Jenis Pengiriman').where('ID_Jenis_Pengiriman', id)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    try {
        const result = await db('Jenis Pengiriman').del().where('ID_Jenis_Pengiriman', id)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error", error?.message)
    }
}

export const pengirimanRepository = {
    getAll,
    search,
    findById,
    create,
    update,
    remove
}