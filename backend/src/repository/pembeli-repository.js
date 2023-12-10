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
        const id = await insertId('Pembeli', 'ID_Pembeli', 'P')
        await db('Pembeli').insert({ID_Pembeli: id, ...data})
        return await db('Pembeli').where('ID_Pembeli', id)
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


export const pembeliRepository = {
    getAll,
    seacrh,
    findById,
    create,
    update,
    remove,
}