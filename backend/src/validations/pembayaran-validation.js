import Joi from "joi";

const getPembayaranSchema = Joi.string().max(50).required()

const getPembayaranNamaSchema = Joi.string().max(20).required()

const createPembayaranSchema = Joi.string().max(20).required()

const updatePembayaranSchema = Joi.object({
    ID_Metode_Pembayaran: Joi.string().max(50).required(),
    Metode_Pembayaran: Joi.string().max(20).required(),
});

export const pembayaranValidation ={
    getPembayaranSchema,
    createPembayaranSchema,
    updatePembayaranSchema,
    getPembayaranNamaSchema,
};
