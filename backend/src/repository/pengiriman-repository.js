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
        const id = await incrementId('Jenis Pengiriman', 'ID_Jenis_Pengiriman', 'JP')
        await db('Jenis Pengiriman').insert({ID_Jenis_Pengiriman:id, ...data})
        return await db('Jenis Pengiriman').where('ID_Jenis_Pengiriman', id)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (id, data) => {
    try {
        await db('Jenis Pengiriman').where('ID_Jenis_Pengiriman', id).update(data)
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

const incrementId = async (table, column, prefix = '') => {
    try {
        const result = await db
        .raw(`
        SELECT TOP 1 ${column}
        FROM ${table}
        ORDER BY CAST(SUBSTRING(${column}, ${prefix.length +1}, LEN(${column})) AS INT) DESC
        `)
        const newId = result[0][column].substring(prefix.length)
        return prefix + (parseInt(newId) + 1)
    } catch (error) {
        logger.error('Error while getting last id kucing', error)
        throw new ResponseError(500, "Internal Server Error")
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