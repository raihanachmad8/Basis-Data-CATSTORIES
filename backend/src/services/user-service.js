import {validate} from '../validations/validate.js'
import {ResponseError} from "../errors/response-error.js";
import { Account } from '../auth/user.js';
import {
    getUserValidation,
    loginUserValidation
} from '../validations/user-validation.js'
import { logger } from '../app/logging.js';

const login = async (req) => {
    const userValidate = validate(loginUserValidation, req)
    const {username, password} = userValidate
    const user = Account.find((user) => user.username === username)
    if (!user) {
        logger.error("Username or password is incorrect")
        throw new ResponseError(400, "Username or password is incorrect")
    }
    if (user.password !== password) {
        logger.error("Username or password is incorrect")
        throw new ResponseError(400, "Username or password is incorrect")
    }
    
    return {
        username: user.username,
        role: user.role,
    }
}

const get = async (username) => {
    username = validate(getUserValidation, username)
    const user = Account.find((user) => user.username === username)
    if (!user) {
        logger.error("User not found")
        throw new ResponseError(404, "User not found")
    }
    return {
        username: user.username,
        role: user.role,
    }
}


const logout = async (username) => {
    username = validate(getUserValidation, username)

    username = Account.find((user) => user.username === username)
    if (!username) {
        logger.error("User not found")
        throw new ResponseError(404, "User not found")
    }
}


export default {
    login,
    logout,
    get
}