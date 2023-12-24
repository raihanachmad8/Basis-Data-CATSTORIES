import { logger } from "../app/logging.js"
import { ResponseError } from "../errors/response-error.js"
import { transaksiRepository } from "../repository/transaksi-repository.js"
import { transaksiValidation } from "../validations/transaksi-validation.js"
import { validate } from "../validations/validate.js"
import { detailTransaksiService } from "./detail-transaksi-service.js"
import { kucingService } from "./kucing-service.js"
import { pembayaranService } from "./pembayaran-service.js"
import { pembeliService } from "./pembeli-service.js"
import { pengirimanService } from "./pengiriman-service.js"

const getAll = async (search, sort, orderBy) => {
    try {
        let result = (search) ? await transaksiRepository.search(search) : await transaksiRepository.getAll()


        result = await Promise.all(result.map(async (item) => {
            item.Pembeli = await pembeliService.get(item.ID_Pembeli);
            item.Jenis_Pengiriman = (item.Jenis_Pengiriman !== undefined) ? await pengirimanService.get(item.ID_Jenis_Pengiriman) : null
            item.Metode_Pembayaran = (item.Metode_Pembayaran !== undefined) ? await pembayaranService.get(item.ID_Metode_Pembayaran) : null
            item.Detail_Transaksi = await detailTransaksiService.get(item.ID_Transaksi);
            return item;
        }));

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
            logger.error("Kucing not found");
            throw new ResponseError(404, "Kucing not found");
        }

        result = result.map(formattedResult);

        return result
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

        let result = await transaksiRepository.findById(id)
        result.Pembeli = (await pembeliService.get(result.ID_Pembeli));
        result.Jenis_Pengiriman = (result.ID_Jenis_Pengiriman) ? (await pengirimanService.get(result.ID_Jenis_Pengiriman))[0] : null;
        result.Metode_Pembayaran = (result.ID_Metode_Pembayaran) ? (await pembayaranService.get(result.ID_Metode_Pembayaran))[0] : null;
        result.Detail_Transaksi = await detailTransaksiService.get(result.ID_Transaksi);
        result = formattedResult(result);

        if (!result || result.length === 0) {
            logger.error("Transaksi not found")
            throw new ResponseError(404, "Transaksi not found")
        }
        return result
    } catch (error) {
        logger.error(error)
        throw new ResponseError(500, "Internal Server Error")
    }
}



const create = async (data) => {
    try {
        const validateTransaction = validate(
            transaksiValidation.createTransaksiSchema,
            data
        )

        if (validateTransaction.error) {
            logger.error(validateTransaction.error)
            throw new ResponseError(400, validateTransaction.error.message)
        }

        const { Pembeli, ID_Jenis_Pengiriman, ID_Metode_Pembayaran, Detail_Transaksi } = data

        const unavailableKucing = [];

        await Promise.all(Detail_Transaksi.map(async (item) => {
            try {
                const isAvailable = await isKucingAvailable(item.ID_Kucing);
                if (!isAvailable) {
                    unavailableKucing.push(item.ID_Kucing);
                }
                return isAvailable;
            } catch (error) {
                throw new ResponseError(400, `Error checking availability for Kucing with ID ${item.ID_Kucing}`);
            }
        }));
        if (unavailableKucing.length > 0) {
            throw new ResponseError(400, `The following Kucing are not available: ${unavailableKucing.join(', ')}`);
        }
        const pembeli = await pembeliService.create(Pembeli)
        const transaksi = await transaksiRepository.create({
            ID_Pembeli: pembeli.ID_Pembeli,
            ID_Jenis_Pengiriman: ID_Jenis_Pengiriman,
            ID_Metode_Pembayaran: ID_Metode_Pembayaran,
            Total_Biaya: data.Total_Biaya,
            Nomor_Resi: data.Nomor_Resi,
            Tanggal_Transaksi: data.Tanggal_Transaksi,
            Pesan: data.Pesan
        })
        let detail_transaksi
        for (const item of Detail_Transaksi) {
            detail_transaksi += await detailTransaksiService.create({
                ID_Transaksi: transaksi.ID_Transaksi,
                ID_Kucing: item.ID_Kucing
            });
        }


        if (transaksi !== null && detail_transaksi !== null) {
            return transaksi
        } else {
            logger.error("Failed to create transaksi")
            await transaksiRepository.remove(transaksi.ID_Transaksi)
            throw new ResponseError(400, "Failed to create transaksi")
        }

    } catch (error) {
        logger.error(error)
        if (error instanceof ResponseError) {
            throw error
        } else {

            throw new ResponseError(500, "Internal Server Error")
        }
    }
}

async function isKucingAvailable(idKucing) {
    const kucing = await kucingService.get(idKucing);
    return kucing && kucing.Status === 'Tersedia';
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

const formattedResult = (result) => {
    return {
        ID_Transaksi: result.ID_Transaksi,
        Pembeli: result.Pembeli,
        Jenis_Pengiriman: result.Jenis_Pengiriman,
        Metode_Pembayaran: result.Metode_Pembayaran,
        Total_Biaya: result.Total_Biaya,
        Nomor_Resi: result.Nomor_Resi,
        Tanggal_Transaksi: result.Tanggal_Transaksi,
        Pesan: result.Pesan,
        Detail_Transaksi: result.Detail_Transaksi
    }
}

export const transaksiService = {
    getAll,
    get,
    create,
    remove
}

