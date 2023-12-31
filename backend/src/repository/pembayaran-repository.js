import { db } from "../../database/config/db.js"
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"

const getAll = async () => {
    try {
        const result = await db.raw(`SELECT * FROM TampilMetodePembayaran()`)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const search = async (params) => {
    try {
        const result = await db.raw(`SELECT * FROM CariMetodePembayaran(:Metode_Pembayaran)`, { Metode_Pembayaran: params })
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findById = async (id) => {
    try {
        const result = await db.raw(`SELECT * FROM TampilMetodePembayaranByID(:ID_Metode_Pembayaran)`, { ID_Metode_Pembayaran: id })
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findByName = async (name) => {
    try {
        const result = await db.raw(`SELECT * FROM TampilMetodePembayaranByName(:Metode_Pembayaran)`, { Metode_Pembayaran: name })
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const create = async (data) => {
    try {
        const id = await incrementId('Metode_Pembayaran', 'ID_Metode_Pembayaran', 'MPB')
        await db.raw(`
        EXEC TambahMetodePembayaran @ID_Metode_Pembayaran = :ID_Metode_Pembayaran, @Metode_Pembayaran = :Metode_Pembayaran;`,
            { ID_Metode_Pembayaran: id, Metode_Pembayaran: data.Metode_Pembayaran })
        return await db('Metode_Pembayaran').where('ID_Metode_Pembayaran', id).first()
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (data) => {
    try {
        await db.raw(`
        EXEC UpdateMetodePembayaran @ID_Metode_Pembayaran = :ID_Metode_Pembayaran, @Metode_Pembayaran = :Metode_Pembayaran;`,
            { ID_Metode_Pembayaran: data.ID_Metode_Pembayaran, Metode_Pembayaran: data.Metode_Pembayaran })
        return await db('Metode_Pembayaran').where('ID_Metode_Pembayaran', data.ID_Metode_Pembayaran).first()
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    try {
        const result = await db.raw(`
        EXEC HapusMetodePembayaran @ID_Metode_Pembayaran = :ID_Metode_Pembayaran;`,
            { ID_Metode_Pembayaran: id })
        return (await db('Metode_Pembayaran').where('ID_Metode_Pembayaran', id) == false)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const incrementId = async (table, column, prefix = '') => {
    try {
        const result = await db
            .raw(`
        SELECT TOP 1 ${column}
        FROM ${table}
        ORDER BY CAST(SUBSTRING(${column}, ${prefix.length + 1}, LEN(${column})) AS INT) DESC
        `)
        const newId = result[0][column].substring(prefix.length)
        return prefix + (parseInt(newId) + 1)
    } catch (error) {
        logger.error('Error while getting last id kucing', error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

export const pembayaranRepository = {
    getAll,
    search,
    findById,
    findByName,
    create,
    update,
    remove
}