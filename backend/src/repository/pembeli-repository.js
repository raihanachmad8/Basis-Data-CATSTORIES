import { db } from "../../database/config/db.js";
import { logger } from "../app/logging.js";
import { ResponseError } from "../errors/response-error.js";

const getAll = async () => {
    try {
        const result = await db.select().table('Pembeli')
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const seacrh = async (params) => {
    try {
        const result = await db.select().table('Pembeli').whereLike(params)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findById = async (id) => {
    try {
        const result = await db.select().table('Pembeli').where('ID_Pembeli', id)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const create = async (data) => {
    try {
        await db('Pembeli').insert(data)
        return await db('Pembeli').where('ID_Pembeli', data.ID_Pembeli)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (id, data) => {
    try {
        await db('Pembeli').where('ID_Pembeli', id).update(data)
        return await db('Pembeli').where('ID_Pembeli', id)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    try {
        const result = await db('Pembeli').where('ID_Pembeli', id).del()
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}


export const pembeliRepository = {
    getAll,
    seacrh,
    findById,
    create,
    update,
    remove,
}