import Joi from "joi";

const getJenisValidation = Joi.string().guid({ version: [
    'uuidv4',
    'uuidv5'
]}).required();
const createJenisValdation = Joi.object({
    Nama: Joi.string().min(3).max(50).required()
});
const updateJenisValdation = Joi.object({
    ID_Jenis: Joi.string().guid({ version: [
        'uuidv4',
        'uuidv5'
    ]}).required(),
    Nama: Joi.string().min(3).max(50).required(),
});


export const jenisValidation = {
    getJenisValidation,
    createJenisValdation,
    updateJenisValdation,
}