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
        const id = await incrementId('Metode Pembayaran', 'ID_Metode_Pembayaran', 'MPB')
        await db('Metode Pembayaran').insert({ID_Metode_Pembayaran:id,...data})
        return await db('Metode Pembayaran').where('ID_Metode_Pembayaran',id)
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

const incrementId = async (table, column, prefix = "") => {
    try {
        const result = await db(table)
            .select(column)
            .orderBy(column, "desc")
            .first();
        const newId = result.ID_Kucing.substr(prefix.length);
        return prefix + (parseInt(newId) + 1);
    } catch (error) {
        logger.error("Error while getting last id kucing", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

export const pembayaranRepository = {
    getAll,
    seacrh,
    findById,
    create,
    update,
    remove
}


