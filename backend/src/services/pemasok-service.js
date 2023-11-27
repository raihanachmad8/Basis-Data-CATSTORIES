import { db } from "../../database/config/db.js";
import { logger } from "../app/logging.js";
import { Account } from "../auth/user.js";
import { getUserValidation } from "../validations/user-validation.js";
import { validate } from "../validations/validate.js";
import {ResponseError} from "../errors/response-error.js";



const getListAll = async (username) => {
    username = validate(getUserValidation, username)

    username = Account.find((user) => user.username === username)
    if (!username) {
        logger.error("User not found")
        throw new ResponseError(404, "User not found")
    }
    try {
        const result = await db('pemasok').select('*')
        return result
    } catch (e) {
        const error = db.on('error', logger.error)
        throw new ResponseError(500, db.on('error',error ))
    }

}

const get = async (username, id) => {
    username = validate(getUserValidation, username)

    username = Account.find((user) => user.username === username)
    if (!username) {
        logger.error("User not found")
        throw new ResponseError(404, "User not found")
    }
    try {
        const result = await db('pemasok').select('*').where('IDPemasok', id)
        return result
    } catch (e) {
        logger.error('Error get data')
        throw new ResponseError(500, 'Error get data')
    }

}

export default {
    getListAll,
    get
}