import { db } from "../../database/config/db.js"
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"

const getAll = async () => {
    try {
        const result = await db.raw(`SELECT * FROM TampilTransaksi()`)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const search = async (params) => {
    try {
        const result = await db.raw(`SELECT * FROM CariTransaksi(:ID_Transaksi)`, { ID_Transaksi: params })
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findById = async (id) => {
    try {
        const result = await db.raw(`SELECT * FROM TampilTransaksiByID(:ID_Transaksi)`, { ID_Transaksi: id })
        return result[0]
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const create = async (data) => {
    try {
        const id = await incrementId('Transaksi', 'ID_Transaksi', 'T')
        await db.raw(`
        EXEC tambahTransaksi 
            @ID_Transaksi = :ID_Transaksi,
            @ID_Pembeli = :ID_Pembeli,
            @ID_Jenis_Pengiriman = :ID_Jenis_Pengiriman,
            @ID_Metode_Pembayaran = :ID_Metode_Pembayaran,
            @Total_Biaya = :Total_Biaya,
            @Nomor_Resi = :Nomor_Resi,
            @Tanggal_Transaksi = :Tanggal_Transaksi,
            @Pesan = :Pesan;
        `, {
            ID_Transaksi: id,
            ID_Pembeli: data.ID_Pembeli,
            ID_Jenis_Pengiriman: data.ID_Jenis_Pengiriman,
            ID_Metode_Pembayaran: data.ID_Metode_Pembayaran,
            Total_Biaya: data.Total_Biaya,
            Nomor_Resi: data.Nomor_Resi,
            Tanggal_Transaksi: data.Tanggal_Transaksi,
            Pesan: data.Pesan
        })
        return await db('Transaksi').select().where('ID_Transaksi', id).first()
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (data) => {
    try {
        await db.raw(`
        EXEC updateTransaksi
        @ID_Transaksi = :ID_Transaksi 
        @ID_Pembeli = :ID_Pembeli 
        @ID_Jenis_Pengiriman = :ID_Jenis_Pengiriman 
        @ID_Metode_Pembayaran = :ID_Metode_Pembayaran 
        @Total_Biaya = :Total_Biaya,
        @Nomor_Resi = :Nomor_Resi,
        @Tanggal_Transaksi = :Tanggal_Transaksi,
        @Pesan = :Pesan;
        `, {
            ID_Transaksi: data.ID_Transaksi,
            ID_Pembeli: data.ID_Pembeli,
            ID_Jenis_Pengiriman: data.ID_Jenis_Pengiriman,
            ID_Metode_Pembayaran: data.ID_Metode_Pembayaran,
            Total_Biaya: data.Total_Biaya,
            Nomor_Resi: data.Nomor_Resi,
            Tanggal_Transaksi: data.Tanggal_Transaksi,
            Pesan: data.Pesan
        })

        return await db('Transaksi').select().where('ID_Transaksi', data.ID_Transaksi).first()
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    try {
        const result = await db.raw(`
        EXEC hapusTransaksi @ID_Transaksi = :ID_Transaksi;`, { ID_Transaksi: id })
        return (await db('Transaksi').where('ID_Transaksi', id) == false )
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

const countTransaksi = async () => {
    try {
        const result = await db.raw(`SELECT * FROM JumlahTransaksiPivot()`)
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

export const transaksiRepository = {
    getAll,
    search,
    findById,
    create,
    update,
    remove
}
