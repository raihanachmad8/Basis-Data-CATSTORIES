import { db } from "../../database/config/db.js"
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"

const getAll = async () => {
    try {
        const result = await db('Transaksi as t')
        .select(
            't.ID_Transaksi',
            'p.ID_Pembeli',
            'p.Nama_Pembeli',
            'p.Email',
            'p.No_Telp',
            'p.Alamat',
            'jp.ID_Jenis_Pengiriman',
            'jp.Jenis_Pengiriman',
            'mp.ID_Metode_Pembayaran',
            'mp.Metode_Pembayaran',
            't.Total_Biaya',
            't.Nomor_Resi',
            't.Tanggal_Transaksi',
            't.Pesan'
        )
        .leftJoin('pembeli as p', 't.ID_Pembeli', 'p.ID_Pembeli')
        .leftJoin('jenis pengiriman as jp', 't.ID_Jenis_Pengiriman', 'jp.ID_Jenis_Pengiriman')
        .leftJoin('metode pembayaran as mp', 't.ID_Metode_Pembayaran', 'mp.ID_Metode_Pembayaran')
        return result.map((result) => formattedResult(result))
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const search = async (params) => {
    try {
        const result = await db.select().table('Transaksi').whereLike(params)
        return result.map((result) => formattedResult(result))
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const findById = async (id) => {
    try {
        const result = await db('Transaksi as t')
        .select(
            't.ID_Transaksi',
            'p.ID_Pembeli',
            'p.Nama_Pembeli',
            'p.Email',
            'p.No_Telp',
            'p.Alamat',
            'jp.ID_Jenis_Pengiriman',
            'jp.Jenis_Pengiriman',
            'mp.ID_Metode_Pembayaran',
            'mp.Metode_Pembayaran',
            't.Total_Biaya',
            't.Nomor_Resi',
            't.Tanggal_Transaksi',
            't.Pesan'
        )
        .leftJoin('pembeli as p', 't.ID_Pembeli', 'p.ID_Pembeli')
        .leftJoin('jenis pengiriman as jp', 't.ID_Jenis_Pengiriman', 'jp.ID_Jenis_Pengiriman')
        .leftJoin('metode pembayaran as mp', 't.ID_Metode_Pembayaran', 'mp.ID_Metode_Pembayaran')
        .where('ID_Transaksi', id)
        return formattedResult(result[0])
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
            ID_Transaksi: data.ID_Transaksi,
            ID_Pembeli: data.ID_Pembeli,
            ID_Jenis_Pengiriman: data.ID_Jenis_Pengiriman,
            ID_Metode_Pembayaran: data.ID_Metode_Pembayaran,
            Total_Biaya: data.Total_Biaya,
            Nomor_Resi: data.Nomor_Resi,
            Tanggal_Transaksi: data.Tanggal_Transaksi,
            Pesan: data.Pesan
        })
        return await db('Transaksi').select().where('ID_Transaksi', data.ID_Transaksi)
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

        return await db('Transaksi').select().where('ID_Transaksi', data.ID_Transaksi)
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

const formattedResult = (result) => {
    return {
        ID_Transaksi: result.ID_Transaksi,
        Pembeli: {
            ID_Pembeli: result.ID_Pembeli,
            Nama_Pembeli: result.Nama_Pembeli,
            Email: result.Email,
            No_Telepon: result.No_Telepon,
            Alamat_Pembeli: result.Alamat_Pembeli,
        },
        Jenis_Pengiriman: {
            ID_Jenis_Pengiriman: result.ID_Jenis_Pengiriman,
            Jenis_Pengiriman: result.Jenis_Pengiriman
        },
        Metode_Pembayaran: {
            ID_Metode_Pembayaran: result.ID_Metode_Pembayaran,
            Metode_Pembayaran: result.Metode_Pembayaran
        },
        Total_Biaya: result.Total_Biaya,
        Nomor_Resi: result.Nomor_Resi,
        Tanggal_Transaksi: result.Tanggal_Transaksi,
        Pesan: result.Pesan
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
