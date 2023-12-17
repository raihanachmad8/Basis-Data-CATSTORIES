import Joi from "joi";

const getTransaksiSchema = Joi.string().max(50).required()

const createTransaksiSchema = Joi.object({
    Pembeli: Joi.object({
        Nama_Pembeli: Joi.string().max(100).required(),
        Email: Joi.string().email().required(),
        No_Telp: Joi.string().min(10).max(15).required(),
        Alamat: Joi.string().required(),
    }),
    ID_Jenis_Pengiriman: Joi.string().max(50).required(),
    ID_Metode_Pembayaran: Joi.string().max(50).required(),
    Tanggal_Transaksi: Joi.date().required(),
    Total_Biaya: Joi.number().required(),
    Nomor_Resi: Joi.string().required(),
    Pesan: Joi.string().required(),
    Detail_Transaksi: Joi.array().items(
        Joi.object({
            ID_Kucing: Joi.string().max(50).required(),
        })
    ),
});

const updateTransaksiSchema = Joi.object({
    ID_Transaksi: Joi.string().max(50).required(),
    Pembeli: Joi.object({
        Nama_Pembeli: Joi.string().max(100).required(),
        Email: Joi.string().email().required(),
        No_Telp: Joi.string().min(10).max(15).required(),
        Alamat: Joi.string().required(),
    }),
    ID_Jenis_Pengiriman: Joi.string().max(50).required(),
    ID_Metode_Pembayaran: Joi.string().max(50).required(),
    Tanggal_Transaksi: Joi.date().required(),
    Total_Biaya: Joi.number().required(),
    Nomor_Resi: Joi.string().required(),
    Pesan: Joi.string().required(),
    Detail_Transaksi: Joi.array().items(
        Joi.object({
            ID_Kucing: Joi.string().max(50).required(),
        })
    ),
});

export const transaksiValidation ={
    getTransaksiSchema,
    createTransaksiSchema,
    updateTransaksiSchema,
};

