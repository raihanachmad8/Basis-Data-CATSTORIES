
import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"
import { pembeliRepository } from "../repository/pembeli-repository.js"
import { pembeliValidation } from "../validations/pembeli-validation.js"
import { validate } from "../validations/validate.js"

const getAll = async (search, sort, orderBy, groupBy) => {
    const result = (search) ? await pembeliRepository.search(search) : await pembeliRepository.getAll()
    if (!result || result.length === 0) {
        logger.error('Pembeli not found')
        throw new ResponseError('404', 'Pembeli not found')
    }

    logger.info('Get all pembeli success')
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
        logger.error("Pembeli not found");
        throw new ResponseError(404, "Pembeli not found");
    }
    return result
}

const get = async (id) => {
    const validateId = validate(pembeliValidation.getPemebeliSchema, id);
    
    if (validateId.error) {
        logger.error('Error while valdating id', validateId.error?.message)
        throw new ResponseError(400, validateId.error?.message)
    }

    const result = await pembeliRepository.findById(id)

    if (!result || result.length === 0) {
        logger.error('Pembeli not found')
        throw new ResponseError(404, 'Pembeli not found')
    }

    logger.info('Get pembeli success')
    return result
}

const create = async (pembeli) => {
    logger.info('Create Pembeli:', pembeli)
    const validatePembeli = validate(
        pembeliValidation.createPembeliSchema,
        pembeli
    )

    if (validatePembeli.error) {
        logger.error(
            "Error while validating pembeli:",
            validatePembeli.error?.message
            );
        throw new ResponseError(400, "Validation error: ",validatePembeli.error?.message );
    }

    const result = await pembeliRepository.create(pembeli)
    if (!result || result.length === 0) {
        logger.error("Failed to create pembeli");
        throw new ResponseError(404, "Failed to create pembeli");
    }
    logger.info("Create pembeli success");
    return result;
}

const update = async (pembeli) => {
    console.log(pembeli)
    logger.info('Create Pembeli:', pembeli)
    const validatePembeli = validate(
        pembeliValidation.updatePembeliSchema,
        pembeli
    )

    if (validatePembeli.error) {
        logger.error(
            "Error while validating pembeli:",
            validatePembeli.error?.message
            );
        throw new ResponseError(400, "Validation error: ",validatePembeli.error?.message );
    }
    const result = await pembeliRepository.update(pembeli)
    if (!result || result.length === 0) {
        logger.error("Failed to update pembeli");
        throw new ResponseError(404, "Failed to update pembeli");
    }
    logger.info("Update pembeli success");
    return result;
}

const remove = async (id) => {
    const validateId = validate(pembeliValidation.getPemebeliSchema, id)

    if (validateId.error) {
        logger.error('Error while valdating id', validateId.error?.message)
        throw new ResponseError(400, validateId.error?.message)
    }

    const result = await pembeliRepository.remove(id)

    if (!result || result == false) {
        logger.error('Failed to delete pembeli')
        throw new ResponseError('Failed to delete pembeli')
    }

    logger.info('Delete pembeli success')
    return result
}


export const pembeliService = {
    getAll,
    get,
    create,
    update,
    remove
}