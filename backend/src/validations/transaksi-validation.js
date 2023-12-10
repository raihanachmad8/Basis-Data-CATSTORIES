import Joi from "joi";

const getTransaksiSchema = Joi.string().max(50).required()

const createTransaksiSchema = Joi.object({
    ID_Pembeli: Joi.string().max(50).required(),
    ID_Jenis_Pengiriman: Joi.string().max(50).required(),
    ID_Metode_Pembayaran: Joi.string().max(50).required(),
    Tanggal_Transaksi: Joi.date().required(),
    Pesan: Joi.string().required(),
});

const updateTransaksiSchema = Joi.object({
    ID_Transaksi: Joi.string().max(50).required(),
    ID_Pembeli: Joi.string().max(50).required(),
    ID_Jenis_Pengiriman: Joi.string().max(50).required(),
    ID_Metode_Pembayaran: Joi.string().max(50).required(),
    Tanggal_Transaksi: Joi.date().required(),
    Pesan: Joi.string().required(),
});

export const transaksiValidation ={
    getTransaksiSchema,
    createTransaksiSchema,
    updateTransaksiSchema,
};

