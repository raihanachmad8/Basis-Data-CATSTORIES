import Joi from 'joi';

const getPengirimanSchema = Joi.string().max(50).required()

const getPengirimanNamaSchema = Joi.string().max(20).required()

const createPengirimanSchema = Joi.object({
    Jenis_Pengiriman: Joi.string().max(20).required(),
});

const updatePengirimanSchema = Joi.object({
    ID_Jenis_Pengiriman: Joi.string().max(50).required(),
    Jenis_Pengiriman: Joi.string().max(20).required(),
});

export const pengirimanValidation ={
    getPengirimanSchema,
    createPengirimanSchema,
    updatePengirimanSchema,
    getPengirimanNamaSchema,
};
