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

const findByName = async (name) => {
    try {
        const result = await db.select().table('Jenis Pengiriman').where('Jenis_Pengiriman', name)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const create = async (data) => {
    try {
        const id = await incrementId('Jenis Pengiriman', 'ID_Jenis_Pengiriman', 'JP')
        await db.raw(`
        EXEC TambahJenisPengiriman @ID_Jenis_Pengiriman = :ID_Jenis_Pengiriman, @Jenis_Pengiriman = :Jenis_Pengiriman;`,{ID_Jenis_Pengiriman: id, Jenis_Pengiriman: data.Jenis_Pengiriman})
        return await db('Jenis Pengiriman').where('ID_Jenis_Pengiriman', id)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (data) => {
    try {
        await db.raw(`
        EXEC UpdateJenisPengiriman @ID_Jenis_Pengiriman = :ID_Jenis_Pengiriman, @Jenis_Pengiriman = :Jenis_Pengiriman;`,{ID_Jenis_Pengiriman: data.ID_Jenis_Pengiriman, Jenis_Pengiriman: data.Jenis_Pengiriman})
        return await db('Jenis Pengiriman').where('ID_Jenis_Pengiriman', data.ID_Jenis_Pengiriman)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    try {
        const result = await db.raw(`
        EXEC HapusJenisPengiriman @ID_Jenis_Pengiriman = :ID_Jenis_Pengiriman;`,
        {ID_Jenis_Pengiriman: id})
        return (await db('Jenis Pengiriman').where('ID_Jenis_Pengiriman', id) == false )
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
    findByName,
    create,
    update,
    remove
}