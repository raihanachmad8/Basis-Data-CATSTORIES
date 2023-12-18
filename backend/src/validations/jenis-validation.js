import Joi from "joi";

const createJenisValdation = Joi.object({
    Jenis_Kucing: Joi.string().min(3).max(50).required(),
});

const getJenisValidation = Joi.string().required();

const updateJenisValdation = Joi.object({
    ID_Jenis: Joi.string().required(),
    Jenis_Kucing: Joi.string().min(3).max(50).required(),
});


export const jenisValidation = {
    getJenisValidation,
    createJenisValdation,
    updateJenisValdation,
}