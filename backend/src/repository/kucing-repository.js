import { db } from "../../database/config/db.js";
import { logger } from "../app/logging.js";
import { ResponseError } from "../errors/response-error.js";

const getAll = async () => {
    try {
        const result = await db.raw(`SELECT * FROM TampilKucing()`);
        return await result
    } catch (error) {
        logger.error("Error while getting all Kucing", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

const search = async (params) => {
    try {
        const result = await db.raw(`SELECT * FROM CariKucing(:Nama_Kucing)`, { Nama_Kucing: params });
        return result;
    } catch (error) {
        logger.error("Error while searching Kucing", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

const findById = async (id) => {
    try {
        const result = await db.raw(`SELECT * FROM TampilKucingByID(:ID_Kucing)`, { ID_Kucing: id });
        return await result[0]
    } catch (error) {
        logger.error("Error while finding Kucing by id: ", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

const create = async (kucing) => {
    try {
        const id = await incrementId("Kucing", "ID_Kucing", "K");
        logger.info(id);
        await db.raw(`
        EXEC TambahKucing 
            @ID_Kucing = :ID_Kucing,
            @ID_Jenis = :ID_Jenis,
            @Nama_Kucing = :Nama_Kucing,
            @Foto = :Foto,
            @Umur = :Umur,
            @Jenis_Kelamin = :Jenis_Kelamin,
            @Tanggal_Masuk = :Tanggal_Masuk,
            @Biaya = :Biaya,
            @Status = :Status,
            @Keterangan = :Keterangan;
        `, {
            ID_Kucing: id,
            ID_Jenis: kucing.ID_Jenis,
            Nama_Kucing: kucing.Nama_Kucing,
            Foto: kucing.Foto,
            Umur: kucing.Umur,
            Jenis_Kelamin: kucing.Jenis_Kelamin,
            Tanggal_Masuk: kucing.Tanggal_Masuk,
            Biaya: kucing.Biaya,
            Status: kucing.Status,
            Keterangan: kucing.Keterangan,
        })
        return await db("Kucing").select("*").where({ ID_Kucing: id }).first();
    } catch (error) {
        logger.error("Error while creating kucing:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

const update = async (kucing) => {
    try {
        await db.raw(`
        EXEC UpdateKucing 
            @ID_Kucing = :ID_Kucing,
            @ID_Jenis = :ID_Jenis,
            @Nama_Kucing = :Nama_Kucing,
            @Foto = :Foto,
            @Umur = :Umur,
            @Jenis_Kelamin = :Jenis_Kelamin,
            @Tanggal_Masuk = :Tanggal_Masuk,
            @Biaya = :Biaya,
            @Status = :Status,
            @Keterangan = :Keterangan;
        `, {
            ID_Kucing: kucing.ID_Kucing,
            ID_Jenis: kucing.ID_Jenis,
            Nama_Kucing: kucing.Nama_Kucing,
            Foto: kucing.Foto,
            Umur: kucing.Umur,
            Jenis_Kelamin: kucing.Jenis_Kelamin,
            Tanggal_Masuk: kucing.Tanggal_Masuk,
            Biaya: kucing.Biaya,
            Status: kucing.Status,
            Keterangan: kucing.Keterangan,
        })
        return db("Kucing").select("*").where({ ID_Kucing: kucing.ID_Kucing }).first()
    } catch (error) {
        logger.error("Error while updating kucing:", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

const remove = async (id) => {
    try {
        const result = await db.raw(`
        EXEC HapusKucing @ID_Kucing = :ID_Kucing;`, { ID_Kucing: id })
        return (await db("Kucing").where({ ID_Kucing: id }) == false);
    } catch (error) {
        logger.error("Error while deleting kucing", error);
        throw new ResponseError(500, "Internal Server Error");
    }
};

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

const countKucing = async () => {
    try {
        const result = await db.raw(`
        SELECT
            J.Jenis_Kucing,
            COALESCE(COUNT(CASE WHEN K.Status = 'Tersedia' THEN 1 END), 0) AS Tersedia,
            COALESCE(COUNT(CASE WHEN K.Status = 'Tidak Tersedia' THEN 1 END), 0) AS TidakTersedia
        FROM
            Jenis J
        LEFT JOIN
            Kucing K ON J.ID_Jenis = K.ID_Jenis
        GROUP BY
            J.Jenis_Kucing;
        `);
        return result;
    } catch (error) {
        logger.error("Error while counting Kucing", error);
        throw new ResponseError(500, "Internal Server Error");
    }
}

export const kucingRepository = {
    getAll,
    search,
    findById,
    create,
    update,
    remove,
    countKucing
};
