
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"
import { jenisRepository } from "../repository/jenis-repository.js"
import { jenisValidation } from "../validations/jenis-validation.js"
import { validate } from "../validations/validate.js"

const getAllJenis = async (search, sort, orderBy, groupBy) => {
    const result = (search) ? await jenisRepository.search(search) : await jenisRepository.getAllJenis()

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
        logger.error("Jenis not found");
        throw new ResponseError(404, "Jenis not found");
    }
    return result
} 

const get = async (id) => {
    const validateId = validate(jenisValidation.getJenisValidation, id);

    if (validateId.error) {
        logger.error("Error while validating id:", validateId.error.message);
        throw new ResponseError(400, validateId.error.message);
    }

    const result = await jenisRepository.findById(id);

    if (!result || result.length === 0) {
        logger.error("Jenis not found");
        throw new ResponseError(404, "Jenis not found");
    }
    return result
}

const create = async (jenis) => {
    logger.info("Create jenis:", jenis);
    const validateJenis = validate(jenisValidation.createJenisValdation, jenis);
    if (validateJenis.error) {
        logger.error("Error while validating jenis:", validateJenis.error.message);
        throw new ResponseError(400, validateJenis.error.message);
    }
    const result = await jenisRepository.create(jenis);
    if (!result || result.length === 0) {
        logger.error("Failed to create jenis");
        throw new ResponseError(404, "Failed to create jenis");
    }
    console.log('result: ' , result)
    return result;
}

const update = async (jenis) => {
    logger.info("Update jenis:", jenis);
    const validateJenis = validate(jenisValidation.updateJenisValdation, jenis);
    if (validateJenis.error) {
        logger.error("Error while validating jenis:", validateJenis.error.message);
        throw new ResponseError(400, validateJenis.error.message);
    }
    const result = await jenisRepository.update(jenis);
    if (!result || result.length === 0) {
        logger.error("Failed to update jenis");
        throw new ResponseError(404, "Failed to update jenis");
    }
    return result
}

const remove = async (id) => {
    const validateId = validate(jenisValidation.getJenisValidation, id);

    if (validateId.error) {
        logger.error("Error while validating id:", validateId.error.message);
        throw new ResponseError(400, validateId.error.message);
    }

    const result = await jenisRepository.remove(id);
    if (!result || result == false) {
        logger.error("Failed to delete jenis");
        throw new ResponseError(404, "Failed to delete jenis");
    }
    return result
}


export const jenisService =  {
    getAllJenis,
    get,
    create,
    update,
    remove
}
