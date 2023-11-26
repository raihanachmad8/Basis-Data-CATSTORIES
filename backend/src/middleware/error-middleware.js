import {ResponseError} from "../errors/response-error.js";

const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next()
        return;
    }
    if (err instanceof ResponseError) {
        res.status(err.status).json({
            error: err.message,
            status: err.status
        }).end()
    } else {
        res.status(500).json({
            error: err.message,
            status: 500
        }).end()
    }
}

export {
    errorMiddleware
}