import Joi from 'joi';

const getPengirimanSchema = Joi.string().max(50).required()

const createPengirimanSchema = Joi.object({
    Jenis_Pengiriman: Joi.string().max(10).required(),
});

const updatePengirimanSchema = Joi.object({
    ID_Jenis_Pengiriman: Joi.string().max(50).required(),
    Jenis_Pengiriman: Joi.string().max(10).required(),
});

export const pengirimanValidation ={
    getPengirimanSchema,
    createPengirimanSchema,
    updatePengirimanSchema,
};
