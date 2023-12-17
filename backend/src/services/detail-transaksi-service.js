import { logger } from "../app/logging.js";
import { ResponseError } from "../errors/response-error.js";
import { detailTransaksiRepository } from "../repository/detail-transaksi-repository.js";
import { detailTransaksiValidation } from "../validations/detail-transaction-validation.js";
import { validate } from "../validations/validate.js";

const getAll = async () => {
    const result = await detailTransaksiRepository.getAll()
    if (!result || result.length === 0) {
        logger.error("detail transaksi not found");
        throw new ResponseError(404, "detail transaksi not found");
    }

    return result;
}


const get = async (id) => {
    try {
        const validateId = validate(detailTransaksiValidation.getDetailTransaksiSchema,id)
        
        if (validateId.error) {
            logger.error("Error while validating id:", validateId.error.message);
            throw new ResponseError(400, validateId.error?.message);
        }
        
        const result = await detailTransaksiRepository.findById(id);
        
        if (!result || result.length === 0) {
            logger.error("detail transaksi not found");
            throw new ResponseError(404, "detail transaksi not found");
        }
        logger.info("Get detail transaksi success");
        return result;
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const create = async (data) => {
    try {
        const validateDetailTransaksi = validate(detailTransaksiValidation.createDetailTransaksiSchema,data)

        if (validateDetailTransaksi.error) {
            logger.error("Error while validating detail transaksi:", validateDetailTransaksi.error.message);
            throw new ResponseError(400, validateDetailTransaksi.error?.message);
        }

        const result = await detailTransaksiRepository.create(data)

        if (!result || result.length === 0) {
            logger.error("detail transaksi not found");
            throw new ResponseError(404, "detail transaksi not found");
        }

        return result;
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const update = async (data) => {
    try {
        const validateDetailTransaksi = validate(detailTransaksiValidation.updateDetailTransaksiSchema,data)

        if (validateDetailTransaksi.error) {
            logger.error("Error while validating detail transaksi:", validateDetailTransaksi.error.message);
            throw new ResponseError(400, validateDetailTransaksi.error?.message);
        }

        const result = await detailTransaksiRepository.update(data)

        if (!result || result.length === 0) {
            logger.error("detail transaksi not found");
            throw new ResponseError(404, "detail transaksi not found");
        }

        return result;
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}


const remove = async (id) => {
    try {
        const validateId = validate(detailTransaksiValidation.getDetailTransaksiSchema,id)
        
        if (validateId.error) {
            logger.error("Error while validating id:", validateId.error.message);
            throw new ResponseError(400, validateId.error?.message);
        }
        
        const result = await detailTransaksiRepository.remove(id);
        
        if (!result || result.length === 0) {
            logger.error("detail transaksi not found");
            throw new ResponseError(404, "detail transaksi not found");
        }

        return result;
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

export const detailTransaksiService = {
    getAll,
    get,
    create,
    update,
    remove
}
