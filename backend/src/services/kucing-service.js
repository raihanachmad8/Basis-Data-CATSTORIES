import { logger } from "../app/logging.js";
import { getDirname } from "../config/directory.js";
import { ResponseError } from "../errors/response-error.js";
import { kucingRepository } from "../repository/kucing-repository.js";
import { kucingValidation } from "../validations/kucing-validation.js";
import { validate } from "../validations/validate.js";
import { resolve } from 'path';
import * as fs from 'fs';
import { jenisService } from "./jenis-service.js";

const getAll = async (search, sort, orderBy, groupBy) => {
    let result = (search) ? await kucingRepository.search(search) : await kucingRepository.getAll();
    result = await Promise.all(result.map(async (kucing) => {
        kucing.Jenis_Kucing = (kucing.ID_Jenis != null) ? (await jenisService.get(kucing.ID_Jenis))[0].Jenis_Kucing : null
        return formattedResult(kucing);
    }))

    logger.info("Get all kucing success");

    // Sort
    if (sort) {
        const sortFields = sort.split(',');
        const sortOrder = orderBy === 'desc' ? -1 : 1;

        result.sort((a, b) => {
            for (const field of sortFields) {
                const aValue = a[field];
                const bValue = b[field];

                if (aValue > bValue) return sortOrder;
                if (aValue < bValue) return -sortOrder;
            }

            return 0;
        });
    }

    // Group
    if (groupBy) {
        const groupedResults = {};
        result.forEach(item => {
            const groupValue = item[groupBy];
            if (!groupedResults[groupValue]) {
                groupedResults[groupValue] = [];
            }
            groupedResults[groupValue].push(item);
        });
        result = Object.values(groupedResults);
    }
    if (!result || result.length === 0) {
        logger.error("Kucing not found");
        throw new ResponseError(404, "Kucing not found");
    }
    return result;
};

const get = async (id) => {
    const validateId = validate(kucingValidation.getKucingValidation, id);

    if (validateId.error) {
        logger.error("Error while validating id:", validateId.error.message);
        throw new ResponseError(400, validateId.error?.message);
    }

    let result = await kucingRepository.findById(id);
    (result.ID_Jenis != null) ? result.Jenis_Kucing = (await jenisService.get(result.ID_Jenis))[0].Jenis_Kucing : result.Jenis_Kucing = null
    result = formattedResult(result);


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

const count = async () => {
    const result = await kucingRepository.countKucing();
    if (!result || result == false) {
        logger.error("Failed to delete kucing");
        throw new ResponseError(404, "Failed to delete kucing");
    }
    logger.info("Count kucing success")
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


const formattedResult = (result) => {
    return {
        ID_Kucing: result.ID_Kucing,
        Jenis_Kucing: {
            ID_Jenis: result.ID_Jenis,
            Jenis_Kucing: result.Jenis_Kucing,
        },
        Nama_Kucing: result.Nama_Kucing,
        Foto: result.Foto,
        Umur: result.Umur,
        Jenis_Kelamin: result.Jenis_Kelamin,
        Tanggal_Masuk: result.Tanggal_Masuk,
        Biaya: result.Biaya,
        Status: result.Status,
        Keterangan: result.Keterangan,
    };
}


export const kucingService = {
    getAll,
    get,
    create,
    update,
    remove,
    count
};
