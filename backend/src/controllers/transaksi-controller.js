import { logger } from "../app/logging.js";
import { transaksiService } from "../services/transaksi-service.js";

const getAllTransaksi = async (req, res, next) => {
    try {
        console.log(req.query)
        const { search, sort, orderBy, groupBy } = req.query
        const result = await transaksiService.getAll(search, sort, orderBy, groupBy);
        logger.info("Get all transaksi success");
        return res.status(200).json({
            status:  200,
            message: "Get all transaksi success",
            data: result,
        });
    } catch (e) {
        next(e);   
    }
}

const get = async (req, res, next) => {
    try {
        const result = await transaksiService.get(req.params.id);
        logger.info("Get transaksi by id success");
        return res.status(200).json({
            status: 200,
            message: "Get transaksi by id success",
            data: result,
        });
    } catch (e) {
        next(e);
    }
}

const create = async (req, res, next) => {
    try {
        const result = await transaksiService.create(req.body);
        logger.info("Create transaksi success");
        return res.status(201).json({
            status: 201,
            message: "Create transaksi success",
            data: result,
        });
    } catch (e) {
        next(e);
    }
}

export const transaksiController = {
    getAllTransaksi,
    get,
    create,
};
