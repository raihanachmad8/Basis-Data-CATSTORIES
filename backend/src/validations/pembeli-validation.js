import Joi from 'joi';

const getPemebeliSchema = Joi.string().max(50).required()

const createPembeliSchema = Joi.object({
    Nama: Joi.string().max(100).required(),
    Email: Joi.string().email().required(),
    No_Telp: Joi.string().min(10).max(15).required(),
    Alamat: Joi.string().required(),
});

const updatePembeliSchema = Joi.object({
    ID_Pembeli: Joi.string().max(50).required(),
    Nama: Joi.string().max(100).required(),
    Email: Joi.string().email().required(),
    No_Telp: Joi.string().min(10).max(15).required(),
    Alamat: Joi.string().required(),
});

export const pembeliValidation ={
    getPemebeliSchema,
    createPembeliSchema,
    updatePembeliSchema,
};