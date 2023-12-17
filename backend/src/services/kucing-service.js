import { logger } from "../app/logging.js";
import { getDirname } from "../config/directory.js";
import { ResponseError } from "../errors/response-error.js";
import { kucingRepository } from "../repository/kucing-repository.js";
import { kucingValidation } from "../validations/kucing-validation.js";
import { validate } from "../validations/validate.js";
import { resolve } from 'path';
import * as fs from 'fs';

const getAll = async () => {
    const result = await kucingRepository.getAll();
    if (!result || result.length === 0) {
        logger.error("Kucing not found");
        throw new ResponseError(404, "Kucing not found");
    }
    logger.info("Get all kucing success");
    return result;
};

const get = async (id) => {
    const validateId = validate(kucingValidation.getKucingValidation, id);

    if (validateId.error) {
        logger.error("Error while validating id:", validateId.error.message);
        throw new ResponseError(400, validateId.error?.message);
    }

    const result = await kucingRepository.findById(id);

    if (!result || result.length === 0) {
        logger.error("Kucing not found");
        throw new ResponseError(404, "Kucing not found");
    }
    logger.info("Get kucing success");
    return result;
};

const create = async (kucing, file) => {
    try {
        console.log(kucing)
        logger.info("Create kucing:", kucing);
        const validateKucing = validate(
            kucingValidation.createKucingValdation,
            kucing
        )
        let foto = null;
        if (file) {
            await handleImage(file);
            foto = "http://localhost:3000/storage/kucing/" + file.filename;
        }

        if (validateKucing.error) {
            logger.error(
                "Error while validating kucing:",
                validateKucing.error?.message
            );
            throw new ResponseError(400, "Validation error");
        }

        const result = await kucingRepository.create({
            ID_Jenis: kucing.ID_Jenis,
            Foto: foto,
            ...kucing,
        });
        if (!result || result.length === 0) {
            logger.error("Failed to create kucing");
            throw new ResponseError(404, "Failed to create kucing");
        }
        logger.info("Create kucing success");
        return result;
    } catch (error) {
        logger.error("Error while creating kucing:", error);
        handleDelete(file)
        throw new ResponseError(400, "Validation error", error?.message);
    }
};


const update = async (kucing, file) => {
    logger.info("Update kucing:", kucing);
    const validateKucing = validate(
        kucingValidation.updateKucingValdation,
        kucing
    );
    let foto = null;
    if (file) {
        await handleImage(file);
        foto = "http://localhost:3000/storage/kucing/" + file.filename;
    } else {
        foto = (await kucingRepository.findById(kucing.ID_Kucing)).Foto;
    }

    if (validateKucing.error) {
        logger.error(
            "Error while validating kucing:",
            validateKucing.error?.message
        );
        throw new ResponseError(400, validateKucing.error.message);
    }
    const result = await kucingRepository.update({ Foto: foto, ...kucing });
    if (!result || result.length === 0) {
        logger.error("Failed to update kucing");
        throw new ResponseError(404, "Failed to update kucing");
    }
    logger.info("Update kucing success");
    return result;
};

const remove = async (id) => {
    const validateId = validate(kucingValidation.getKucingValidation, id);

    if (validateId.error) {
        logger.error("Error while validating id:", validateId.error.message);
        throw new ResponseError(400, validateId.error.message);
    }

    const result = await kucingRepository.remove(id);

    if (!result || result == false) {
        logger.error("Failed to delete kucing");
        throw new ResponseError(404, "Failed to delete kucing");
    }
    logger.info("Delete kucing success");
    return result;
};

const handleImage = async (file) => {
    try {
        await kucingValidation.validateImageFile.validateAsync({
            mimetype: file.mimetype,
            size: file.size,
        });

    } catch (validationError) {
        logger.error("Error while validating kucing or Foto:", validationError.message);
        handleDelete(file)
        throw new ResponseError(400, "Validation error file not allowed: " + validationError.message);
    }
}

const handleDelete = async (file) => {
    const filePath = resolve(getDirname(), '../../storage/kucing/' + file.filename);

    try {
        fs.unlinkSync(filePath);
        logger.info("File removed successfully:", filePath);
    } catch (unlinkError) {
        logger.error("Error while removing file:", unlinkError.message);
    }
}


export const kucingService = {
    getAll,
    get,
    create,
    update,
    remove,
};
