import { logger } from "../app/logging.js";
import { ResponseError } from "../errors/response-error.js";
import { detailTransaksiRepository } from "../repository/detail-transaksi-repository.js";
import { detailTransaksiValidation } from "../validations/detail-transaction-validation.js";
import { validate } from "../validations/validate.js";
import { kucingService } from "./kucing-service.js";

const getAll = async () => {
    const result = await detailTransaksiRepository.getAll()
    if (!result || result.length === 0) {
        logger.error("detail transaksi not found");
        throw new ResponseError(404, "detail transaksi not found");
    }
    
    const detail = await Promise.all((result).map(async (data) => {
        data.Kucing = (data.ID_Kucing) ? await kucingService.get(data.ID_Kucing) : null
        return formattedResult(data)
    }));
    return detail;
}


const get = async (id) => {
    try {
        const validateId = validate(detailTransaksiValidation.getDetailTransaksiSchema,id)
        
        if (validateId.error) {
            logger.error("Error while validating id:", validateId.error.message);
            throw new ResponseError(400, validateId.error?.message);
        }
        
        let result = await detailTransaksiRepository.findById(id);
        
        if (!result || result.length === 0) {
            logger.error("detail transaksi not found");
            throw new ResponseError(404, "detail transaksi not found");
        }

        const detail = await Promise.all((result).map(async (data) => {
            data.Kucing = (data.ID_Kucing !== undefined) ? await kucingService.get(data.ID_Kucing) : null
            return formattedResult(data)
        }));      
        logger.info("Get detail transaksi success");
        return detail;
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

const formattedResult =  (result) => {
    return {
        ID_Detail_Transaksi: result.ID_Detail_Transaksi,
        Kucing: {
            ID_Kucing: result.ID_Kucing,
            Jenis_Kucing: {
                ID_Jenis: result.Kucing?.Jenis_Kucing.ID_Jenis ?? null,
                Jenis_Kucing: result.Kucing?.Jenis_Kucing.Jenis_Kucing ?? null,  
            },
            Nama_Kucing: result.Kucing.Nama_Kucing,
            Foto: result.Kucing.Foto,
            Umur: result.Kucing.Umur,
            Jenis_Kelamin: result.Kucing.Jenis_Kelamin,
            Tanggal_Masuk: result.Kucing.Tanggal_Masuk,
            Biaya: result.Kucing.Biaya,
            Status: result.Kucing.Status,
            Keterangan: result.Kucing.Keterangan,
        },

    }
}

export const detailTransaksiService = {
    getAll,
    get,
    create,
    update,
    remove
}
