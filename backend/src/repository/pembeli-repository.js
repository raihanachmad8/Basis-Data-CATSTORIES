import { db } from "../../database/config/db.js";
import { logger } from "../app/logging.js";
import { ResponseError } from "../errors/response-error.js";

const getAll = async () => {
    try {
        const result = await db.raw(`SELECT * FROM TampilPembeli()`)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const search = async (params) => {
    try {
        const result = await db.raw(`SELECT * FROM CariPembeli(:Nama_Pembeli)`, { Nama_Pembeli: params })
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findById = async (id) => {
    try {
        const result = await db.raw(`SELECT * FROM TampilPembeliByID(:ID_Pembeli)`, { ID_Pembeli: id })
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
        EXEC TambahPembeli @ID_Pembeli = :ID_Pembeli, @Nama_Pembeli = :Nama_Pembeli, @Email = :Email, @No_Telp = :No_Telp, @Alamat = :Alamat;`,
        { ID_Pembeli: id, Nama_Pembeli: data.Nama_Pembeli, Email: data.Email, No_Telp: data.No_Telp, Alamat: data.Alamat })
        return await db('Pembeli').where('ID_Pembeli', id).first()
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (data) => {
    try {
        await db.raw(`EXEC UpdatePembeli @ID_Pembeli = :ID_Pembeli, @Nama_Pembeli = :Nama_Pembeli, @Email = :Email, @No_Telp = :No_Telp, @Alamat = :Alamat;`, 
        { ID_Pembeli: data.ID_Pembeli, Nama_Pembeli: data.Nama_Pembeli, Email: data.Email, No_Telp: data.No_Telp, Alamat: data.Alamat })
        return await db('Pembeli').where('ID_Pembeli', id).first()
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    try {
        const result = await db.raw(`EXEC HapusPembeli @ID_Pembeli = :ID_Pembeli;`, { ID_Pembeli: id })
        return (await db('Pembeli').where('ID_Pembeli', id) == false )
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