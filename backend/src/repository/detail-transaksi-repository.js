import { db } from "../../database/config/db.js"
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"

const getAll = async () => {
    try {
        const result = await db('Detail_Transaksi').select()
        .join('Kucing', 'Detail_Transaksi.ID_Kucing', 'Kucing.ID_Kucing')
        .join('Jenis', 'Kucing.ID_Jenis', 'Jenis.ID_Jenis')
        .groupBy('Detail_Transaksi.ID_Transaksi')
        
        return result.map((result) => formattedResult(result))
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }  
}

const findById = async (id) => {
    try {
        const result = await db('Kucing as k')
        .select('j.ID_Jenis', 'j.Jenis_Kucing', 'k.ID_Kucing', 'k.Nama_Kucing', 'k.Foto', 'k.Umur', 'k.Jenis_Kelamin', 'k.Tanggal_Masuk', 'k.Biaya', 'k.Status', 'k.Keterangan')
        .leftJoin('detail_transaksi as d', 'k.ID_Kucing', 'd.ID_Kucing')
        .leftJoin('jenis as j', 'j.ID_Jenis', 'k.ID_Jenis')
        .where('d.ID_Transaksi', 'T1');
        
        return result.map((result) => formattedResult(result))
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

const formattedResult =  (result) => {
    return {
        ID_Detail_Transaksi: result.ID_Detail_Transaksi,
        Kucing: {
            ID_Kucing: result.ID_Kucing,
            Jenis_Kucing: {
                ID_Jenis: result.ID_Jenis,
                Jenis_Kucing: result.Jenis_Kucing,
            },
            Nama_Kucing: result.Nama_Kucing,
            Foto: result.Foto,
            Umur: result.Umur,
            Jenis_Kelamin: result.Jenis_Kelamin,
            Tanggal_Masuk: result.Tanggal_Masuk,
            Biaya: result.Biaya,
            Status: result.Status,
            Keterangan: result.Keterangan,
        },

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
