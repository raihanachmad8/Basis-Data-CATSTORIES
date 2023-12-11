import Joi from 'joi';

const getDetailTransaksiSchema = Joi.string().max(50).required();

const createDetailTransaksiSchema = Joi.object({
    ID_Transaksi: Joi.string().max(50).required(),
    ID_Kucing: Joi.string().max(50).required()
});

const updateDetailTransaction = Joi.object({
    ID_Detail_Transaksi: Joi.string().max(50).required(),
    ID_Transaksi: Joi.string().max(50).required(),
    ID_Kucing: Joi.string().max(50).required()
});

export const detailTransaksiValidation = {
    getDetailTransaksiSchema,
    createDetailTransaksiSchema,
    updateDetailTransaction
}
