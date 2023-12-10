import { db } from "../../database/config/db.js";
import { logger } from "../app/logging.js";

const getAllJenis = async () => {
    try {
        const result = await db("jenis").select("*");
        return result;
    } catch (error) {
        logger.error("Error while getting all Jenis:", error);
    }
};

const findById = async (id) => {
    try {
        const result = await db("jenis").where({ ID_Jenis: id }).select("*");
        return result;
    } catch (error) {
        logger.error("Error while finding Jenis by id:", error);
    }
}

const create = async (jenis) => {
    try {
        await db("jenis").insert(jenis);
        return await db("jenis").where({ ID_Jenis: jenis.ID_Jenis }).select("*");
    } catch (error) {
        logger.error("Error while creating Jenis:", error);
    }
}

const update = async (id, jenis) => {
    try {
        await db("jenis").where({ ID_Jenis: id }).update(jenis);
        return await db("jenis").where({ ID_Jenis: id }).select("*");
    } catch (error) {
        logger.error("Error while updating Jenis:", error);
    }
}

const remove = async (id) => {
    try {
        const result =  await db("jenis").where({ ID_Jenis: id }).del();
        return result > 0
    } catch (error) {
        logger.error("Error while deleting Jenis:", error);
    }
}


export const jenisRepository = {
    getAllJenis,
    findById,
    create,
    update,
    remove
};