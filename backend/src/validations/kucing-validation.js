import Joi from "joi";

const jenis = ["Jantan", "Betina"];
const status = ["Tersedia", "Tidak Tersedia"];
const getKucingValidation = Joi.string().required();

const validateImageFile =  Joi.object({
        mimetype: Joi.string()
            .valid("image/jpeg", "image/png", "image/jpg")
            .required(),
        size: Joi.number().max(5 * 1024 * 1024).required(),
    }).required()

    

const createKucingValdation = Joi.object({
    ID_Jenis: Joi.string().required(),
    Nama_Kucing: Joi.string().min(3).max(50).required(),
    Umur: Joi.number().integer().min(0).required(),
    Jenis_Kelamin: Joi.string()
        .min(3)
        .max(6)
        .valid(...jenis)
        .required(),
    Tanggal_Masuk: Joi.date().required(),
    Biaya: Joi.number().required(),
    Status: Joi.string()
        .min(3)
        .max(20)
        .valid(...status)
        .required(),
    Keterangan: Joi.string(),
});

const updateKucingValdation = Joi.object({
    ID_Kucing: Joi.string().required(),
    ID_Jenis: Joi.string().required(),
    Nama_Kucing: Joi.string().min(3).max(50).required(),
    Umur: Joi.number().integer().min(0).required(),
    Jenis_Kelamin: Joi.string()
        .min(3)
        .max(6)
        .valid(...jenis)
        .required(),
    Tanggal_Masuk: Joi.date().required(),
    Biaya: Joi.number().required(),
    Status: Joi.string()
        .min(3)
        .max(20)
        .valid(...status)
        .required(),
    Keterangan: Joi.string(),
});

export const kucingValidation = {
    getKucingValidation,
    createKucingValdation,
    updateKucingValdation,
    validateImageFile
};
