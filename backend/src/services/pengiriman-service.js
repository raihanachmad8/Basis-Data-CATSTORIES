import { logger } from "../app/logging.js"
import { pengirimanRepository } from "../repository/pengiriman-repository.js"
import { pengirimanValidation } from "../validations/pengiriman-validation.js"
import { ResponseError } from "../errors/response-error.js"
import { validate } from "../validations/validate.js"
const getAll = async (search, sort, orderBy) => {
    const result = (search) ? await pengirimanRepository.search(search) : await pengirimanRepository.getAll()
    
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
    
   
    if (!result || result.length === 0) {
        logger.error("jenis pengiriman not found");
        throw new ResponseError(404, "jenis pengiriman not found");
    } 
    logger.info("Get all jenis pengiriman success");
    return result;
}

const get = async (id) => {
    const validateId = validate(pengirimanValidation.getPengirimanSchema, id)

    if (validateId.error) {
        logger.error("Error while validating id:", validateId.error.message);
        throw new ResponseError(400, validateId.error?.message);
    }

    const result = await pengirimanRepository.findById(id);

    if (!result || result.length === 0) {
        logger.error("jenis pengiriman not found");
        throw new ResponseError(404, "jenis pengiriman not found");
    }
    logger.info("Get jenis pengiriman success");
    return result;
}

const getByName = async (nama) => {
    const validateNama = validate(pengirimanValidation.getPengirimanNamaSchema, nama)

    if (validateNama.error) {
        logger.error("Error while validating nama:", validateNama.error.message);
        throw new ResponseError(400, validateNama.error?.message);
    }

    const result = await pengirimanRepository.findByName(nama);

    if (!result || result.length === 0) {
        logger.error("jenis pengiriman not found");
        throw new ResponseError(404, "jenis pengiriman not found");
    }

    logger.info("Get jenis pengiriman success");
    return result;
}

const create = async (pengiriman) => {
    logger.info('Create Jenis Pengiriman:', pengiriman)
    const validatePengiriman = validate(
        pengirimanValidation.createPengirimanSchema,
        pengiriman
    )

    if (validatePengiriman.error) {
        logger.error(
            "Error while validating jenis pengiriman:",
            validatePengiriman.error?.message
            );
        throw new ResponseError(400, "Validation error: ",validatePengiriman.error?.message );
    }

    const result = await pengirimanRepository.create(pengiriman)
    if (!result || result.length === 0) {
        logger.error("Failed to create jenis pengiriman");
        throw new ResponseError(404, "Failed to create jenis pengiriman");
    }
    logger.info("Create jenis pengiriman success");
    return result;
}

const update = async (pengiriman) => {
    logger.info('Create Jenis Pengiriman:', pengiriman)
    const validatePengiriman = validate(
        pengirimanValidation.updatePengirimanSchema,
        pengiriman
    )

    if (validatePengiriman.error) {
        logger.error(
            "Error while validating pembeli:",
            validatePengiriman.error?.message
            );
        throw new ResponseError(400, "Validation error: ",validatePengiriman.error?.message );
    }

    const result = await pengirimanRepository.update(pengiriman)
    if (!result || result.length === 0) {
        logger.error("Failed to update jenis pengiriman");
        throw new ResponseError(404, "Failed to update jenis pengiriman");
    }
    logger.info("Update jenis pengiriman success");
    return result;
}

const remove = async (id) => {
    const validateId = validate(pengirimanValidation.getPengirimanSchema, id)
    if (validateId.error) {
        logger.error('Error while valdating id', validateId.error?.message)
        throw new ResponseError(400, validateId.error?.message)
    }

    const result = await pengirimanRepository.remove(id)

    if (!result || result == false) {
        logger.error('Failed to delete jenis pengiriman')
        throw new ResponseError('Failed to delete jenis pengiriman')
    }

    logger.info('Delete jenis pengiriman success')
    return result
}

export const pengirimanService = {
    getAll,
    get,
    getByName,
    create,
    update,
    remove
}

