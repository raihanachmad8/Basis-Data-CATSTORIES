import Joi from "joi";

const createPembayaranSchema = Joi.object({
    Metode_Pembayaran: Joi.string().max(20).required(),
});

const getPembayaranSchema = Joi.string().max(20).required()

const updatePembayaranSchema = Joi.object({
    ID_Metode_Pembayaran: Joi.string().max(50).required(),
    Metode_Pembayaran: Joi.string().max(20).required(),
});

export const pembayaranValidation ={
    getPembayaranSchema,
    createPembayaranSchema,
    updatePembayaranSchema,
};