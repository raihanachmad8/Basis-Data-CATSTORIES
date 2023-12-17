import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"
import { transaksiRepository } from "../repository/transaksi-repository.js"
import { transaksiValidation } from "../validations/transaksi-validation.js"
import { validate } from "../validations/validate.js"
import { detailTransaksiService } from "./detail-transaksi-service.js"
import { pembeliService } from "./pembeli-service.js"
import { pengirimanService } from "./pengiriman-service.js"

const getAll = async () => {
    try {
        const result = await transaksiRepository.getAll()
        const resultWithDetails = await Promise.all(result.map(async (item) => {
            // Fetch details for each item asynchronously
            item.Detail_Transaksi = await detailTransaksiService.get(item.ID_Transaksi);
            return item;
        }));
        return resultWithDetails
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const get = async (id) => {
    try {
        const validateId = validate(transaksiValidation.getTransaksiSchema, id)
        if (validateId.error) {
            logger.error(validateId.error)
            throw new ResponseError(400, validateId.error.message)
        }

        const result = await transaksiRepository.findById(id)

        if (!result || result.length === 0) {
            logger.error("Transaksi not found")
            throw new ResponseError(404, "Transaksi not found")
        }


        const resultWithDetails = Object.assign(result, { Detail_Transaksi: await detailTransaksiService.get(id) })
        return resultWithDetails
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}



const create = async (data) => {
    try {
        const validateTransaction = validate(
            transaksiValidation.createValidation,
            data
        )

        if (validateTransaction.error) {
            logger.error(validateTransaction.error)
            throw new ResponseError(400, validateTransaction.error.message)
        }

        const { Pembeli, Jenis_Pengiriman, Detail_Transaksi } = data

        const pembeli = pembeliService.create(Pembeli)
        const pengiriman = pengirimanService.getByName(Jenis_Pengiriman)
        const pembayaran = pembayaranService.getByName(Metode_Pembayaran)
        const transaksi = transaksiRepository.create({
            ID_Pembeli: pembeli.ID_Pembeli,
            ID_Jenis_Pengiriman: pengiriman.ID_Jenis_Pengiriman,
            ID_Metode_Pembayaran: pembayaran.ID_Metode_Pembayaran,
            Total_Biaya: data.Total_Biaya,
            Nomor_Resi: data.Nomor_Resi,
            Tanggal_Transaksi: data.Tanggal_Transaksi,
            Pesan: data.Pesan
        })

        const detail_transaksi = detailTransaksiService.create({
            ID_Transaksi: transaksi.ID_Transaksi,
            ID_Kucing: data.ID_Kucing
        })

        return {
            Transaksi: transaksi,
            Detail_Transaksi: detail_transaksi
        }
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}

const remove = async (id) => {
    const validateId = validate(transaksiValidation.getValidation, id)
    if (validateId.error) {
        logger.error(validateId.error)
        throw new ResponseError(400, validateId.error.message)
    }

    const result = await transaksiRepository.remove(id)

    if (!result || result.length === 0) {
        logger.error("Transaksi not found")
        throw new ResponseError(404, "Transaksi not found")
    }

    return result
}

export const transaksiService = {
    getAll,
    get,
    create,
    remove
}
