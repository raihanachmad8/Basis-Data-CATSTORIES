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

const search = async (params) => {
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
        const id = await incrementId('Pembeli', 'ID_Pembeli', 'P')
        await db.raw(`
        EXEC TambahPembeli @ID_Pembeli = :ID_Pembeli, @Nama_Pembeli = :Nama_Pembeli, @Email = :Email, @No_Telepon = :No_Telepon, @Alamat_Pembeli = :Alamat_Pembeli;`,
        { ID_Pembeli: id, Nama_Pembeli: data.Nama_Pembeli, Email: data.Email, No_Telepon: data.No_Telepon, Alamat_Pembeli: data.Alamat_Pembeli })
        return await db('Pembeli').where('ID_Pembeli', id)
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (id, data) => {
    try {
        await db.raw(`EXEC UpdatePembeli @ID_Pembeli = :ID_Pembeli, @Nama_Pembeli = :Nama_Pembeli, @Email = :Email, @No_Telepon = :No_Telepon, @Alamat_Pembeli = :Alamat_Pembeli;`, 
        { ID_Pembeli: id, Nama_Pembeli: data.Nama_Pembeli, Email: data.Email, No_Telepon: data.No_Telepon, Alamat_Pembeli: data.Alamat_Pembeli })
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


export const pembeliRepository = {
    getAll,
    search,
    findById,
    create,
    update,
    remove,
}