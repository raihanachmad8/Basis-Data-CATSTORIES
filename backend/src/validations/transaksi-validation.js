import Joi from "joi";

const getTransaksiSchema = Joi.string().max(50).required()

const createTransaksiSchema = Joi.object({
    Pembeli: Joi.object({
        Nama_Pembeli: Joi.string().max(100).required(),
        Email: Joi.string().email().required(),
        No_Telp: Joi.string().min(10).max(15).required(),
        Alamat: Joi.string().required(),
    }),
    Jenis_Pengiriman: Joi.string().max(20).required(),
    Metode_Pembayaran: Joi.string().max(20).required(),
    Tanggal_Transaksi: Joi.date().required(),
    Pesan: Joi.string().required(),
    Detail_Transaksi: Joi.array().items(Joi.object({
        Kucing: Joi.object({
            Nama_Kucing: Joi.string().max(50).required(),
            Umur: Joi.number().integer().min(0).required(),
            Jenis_Kelamin: Joi.string().max(6).required(),
            Tanggal_Masuk: Joi.date().required(),
            Biaya: Joi.number().required(),
            Keterangan: Joi.string(),
        }),
    })),
});

const updateTransaksiSchema = Joi.object({
    ID_Transaksi: Joi.string().max(50).required(),
    Pembeli: Joi.object({
        Nama_Pembeli: Joi.string().max(100).required(),
        Email: Joi.string().email().required(),
        No_Telp: Joi.string().min(10).max(15).required(),
        Alamat: Joi.string().required(),
    }),
    Jenis_Pengiriman: Joi.string().max(20).required(),
    Metode_Pembayaran: Joi.string().max(20).required(),
    Tanggal_Transaksi: Joi.date().required(),
    Pesan: Joi.string().required(),
    Detail_Transaksi: Joi.array().items(Joi.object({
        Kucing: Joi.object({
            Nama_Kucing: Joi.string().max(50).required(),
            Umur: Joi.number().integer().min(0).required(),
            Jenis_Kelamin: Joi.string().max(6).required(),
            Tanggal_Masuk: Joi.date().required(),
            Biaya: Joi.number().required(),
            Keterangan: Joi.string(),
        }),
    })),
});

export const transaksiValidation ={
    getTransaksiSchema,
    createTransaksiSchema,
    updateTransaksiSchema,
};

