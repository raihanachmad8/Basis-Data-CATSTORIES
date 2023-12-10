import { db } from "../../database/config/db.js";
import { logger } from "../app/logging.js";
import { ResponseError } from "../errors/response-error.js";

const getAllJenis = async () => {
    try {
        const result = await db("jenis").select("*");
        return result
    } catch (error) {
        logger.error("Error while getting all Jenis:", error);
        throw new ResponseError(500, "Internal Server Error");
        
    }
};

const search = async (params) => {
    try {
        const result = await db("jenis").whereLike(params);
        return result
    } catch (error) {
        logger.error("Error while searching Jenis:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

const findById = async (id) => {
    try {
        const result = await db("jenis").where({ ID_Jenis: id }).select("*");
        return result
    } catch (error) {
        logger.error("Error while finding Jenis by id:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
}

const create = async (jenis) => {
    try {
        id = incrementId('Jenis', 'ID_Jenis', 'J')
        const result = await db("Jenis").insert(Jenis);
        return await db("Jenis").where({ ID_Jenis: jenis.ID_Jenis }).select("*");
    } catch (error) {
        logger.error("Error while creating Jenis:", error);
    }
}

const update = async (id, jenis) => {
    try {
        const result = await db("jenis").where({ ID_Jenis: id }).update(jenis)
        return await db("jenis").where({ ID_Jenis: id }).select("*");
    } catch (error) {
        logger.error("Error while updating Jenis:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
}

const remove = async (id) => {
    try {
        const result =  await db("jenis").where({ ID_Jenis: id }).del();
        return result
    } catch (error) {
        logger.error("Error while deleting Jenis:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
}

const incrementId = async (table, column, prefix = '') => {
    try {
        const result = await db(table).select(column).orderBy(column, 'desc').first()
        const newId = result.ID_Kucing.substr(prefix.length)
        return prefix + (parseInt(newId) + 1)
    } catch (error) {
        logger.error('Error while getting last id kucing', error)
        throw new ResponseError(500, "Internal Server Error")
    }
}


export const jenisRepository = {
    getAllJenis,
    search,
    findById,
    create,
    update,
    remove
};