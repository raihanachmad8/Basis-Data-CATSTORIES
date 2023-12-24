import { db } from "../../database/config/db.js";
import { logger } from "../app/logging.js";
import { ResponseError } from "../errors/response-error.js";

const getAllJenis = async () => {
    try {
        const result = await db.raw(`SELECT * FROM TampilJenisKucing()`)
        return result
    } catch (error) {
        logger.error("Error while getting all Jenis:", error);
        throw new ResponseError(500, "Internal Server Error");
        
    }
};

const search = async (params) => {
    try {
        const result = await db.raw(`SELECT * FROM CariJenisKucing(:Jenis_Kucing)`, { Jenis_Kucing: params })
        return result
    } catch (error) {
        logger.error("Error while searching Jenis:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

const findById = async (id) => {
    try {
        const result = await db.raw(`SELECT * FROM TampilJenisKucing() WHERE ID_Jenis = :ID_Jenis`, { ID_Jenis: id })
        return result
    } catch (error) {
        logger.error("Error while finding Jenis by id:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
}

const create = async (jenis) => {
    try {
        const id = await incrementId('Jenis', 'ID_Jenis', 'J')
        await db.raw(`
        EXEC TambahJenis @ID_Jenis = :ID_Jenis, @Jenis_Kucing = :Jenis_Kucing;`, 
        { ID_Jenis: id, Jenis_Kucing: jenis.Jenis_Kucing });
        return await db("Jenis").where({ ID_Jenis: id }).select("*").first();
    } catch (error) {
        logger.error("Error while creating Jenis:", error);
    }
}

const update = async (jenis) => {
    try {
        await db.raw(`
        EXEC UpdateJenis @ID_Jenis = :ID_Jenis, @Jenis_Kucing = :Jenis_Kucing;`, 
        { ID_Jenis: jenis.ID_Jenis, Jenis_Kucing: jenis.Jenis_Kucing });
        return await db("Jenis").where({ ID_Jenis: jenis.ID_Jenis }).select("*").first();
    } catch (error) {
        logger.error("Error while updating Jenis:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
}

const remove = async (id) => {
    try {
        const result = await db.raw(`
        EXEC HapusJenisKucing @ID_Jenis = :ID_Jenis;`, 
        { ID_Jenis: id});
        return ((await db("Jenis").where({ ID_Jenis: id }).select("*")).length === 0);
    } catch (error) {
        logger.error("Error while deleting Jenis:", error);
        throw new ResponseError(500, "Internal Server Error");
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


export const jenisRepository = {
    getAllJenis,
    search,
    findById,
    create,
    update,
    remove
};

