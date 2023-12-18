
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"
import { pembayaranRepository } from "../repository/pembayaran-repository.js"
import { pembayaranValidation } from "../validations/pembayaran-validation.js"
import { validate } from "../validations/validate.js"

const getAll = async (search, sort, orderBy, groupBy) => {
    const result = (search) ? await pembayaranRepository.search(search) : await pembayaranRepository.getAll()
    if (!result || result.length === 0) {
        logger.error("metode pembayaran not found");
        throw new ResponseError(404, "metode pembayaran not found");
    } 
    logger.info("Get all metode pembayaran success");
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
        logger.error("Metode Pembayaran not found");
        throw new ResponseError(404, "Metode Pembayaran not found");
    }
    return result;
}

const get = async (id) => {
    const validateId = validate(pembayaranValidation.getPembayaranSchema, id)

    if (validateId.error) {
        logger.error("Error while validating id:", validateId.error.message);
        throw new ResponseError(400, validateId.error?.message);
    }

    const result = await pembayaranRepository.findById(id);

    if (!result || result.length === 0) {
        logger.error("metode pembayaran not found");
        throw new ResponseError(404, "metode pembayaran not found");
    }
    logger.info("Get metode pembayaran success");
    return result;
}

const create = async (pembayaran) => {
    logger.info("Create pembayaran:", pembayaran);
    const validatePembayaran = validate(
        pembayaranValidation.createPembayaranSchema,
        pembayaran
    )

    if (validatePembayaran.error) {
        logger.error(
            "Error while validating pembayaran:",
            validatePembayaran.error?.message
            );
        throw new ResponseError(400, "Validation error: ",validatePembayaran.error?.message );
    }

    const result = await pembayaranRepository.create(pembayaran)
    if (!result || result.length === 0) {
        logger.error("Failed to create pembayaran");
        throw new ResponseError(500, "Failed to create pembayaran");
    }
    logger.info("Create pembayaran success");
    return result;
}

const update = async (pembayaran) => {
    logger.info("Update pembayaran:", pembayaran);
    const validatePembayaran = validate(
        pembayaranValidation.updatePembayaranSchema,
        pembayaran
    )

    if (validatePembayaran.error) {
        logger.error(
            "Error while validating pembayaran:",
            validatePembayaran.error?.message
            );
        throw new ResponseError(400, "Validation error: ",validatePembayaran.error?.message );
    }
    const result = await pembayaranRepository.update(pembayaran)
    if (!result || result.length === 0) {
        logger.error("Failed to update pembayaran");
        throw new ResponseError(500, "Failed to update pembayaran");
    }
    logger.info("Update pembayaran success");
    return result;
}

const remove = async (id) => {
    const validateId = validate(pembayaranValidation.getPembayaranSchema, id)

    if (validateId.error) {
        logger.error("Error while validating id:", validateId.error.message);
        throw new ResponseError(400, validateId.error?.message);
    }

    const result = await pembayaranRepository.remove(id);

    if (!result || result == false) {
        logger.error("metode pembayaran not found");
        throw new ResponseError(404, "metode pembayaran not found");
    }
    logger.info("Delete metode pembayaran success");
    return result;
}

export const pembayaranService = {
    getAll,
    get,
    create,
    update,
    remove
}