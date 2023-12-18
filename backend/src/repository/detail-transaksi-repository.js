import { db } from "../../database/config/db.js"
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"

const getAll = async () => {
    try {
        const result = await db('Detail_Transaksi').select()
        
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }  
}

const findById = async (id) => {
    try {
        const result = await db('Detail_Transaksi').select().where('ID_Transaksi', id)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
} 

const search = async (params) => {
    try {
        const result = await db('Detail_Transaksi').select().whereLike(params)
        
        return result.map((result) => formattedResult(result))
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}


const create = async (data) => {
    try {
        const id = await incrementId('Detail_Transaksi', 'ID_Detail_Transaksi', 'DT')
        await db.raw(`
        EXEC tambahDetailTransaksi 
            @ID_Detail_Transaksi = :ID_Detail_Transaksi,
            @ID_Transaksi = :ID_Transaksi,
            @ID_Kucing = :ID_Kucing
        `, {
            ID_Detail_Transaksi: id,
            ID_Transaksi: data.ID_Transaksi,
            ID_Kucing: data.ID_Kucing,
        })
        return await db('Detail_Transaksi').select().where('ID_Detail_Transaksi',id).first()
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (data) => {
    try {
        const result = await db('Detail_Transaksi').update(data).where('ID_Detail_Transaksi', id)
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



export const detailTransaksiRepository = {
    getAll,
    findById,
    search,
    create,
    update,
    incrementId 
}
