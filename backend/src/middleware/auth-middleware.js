import jwt from "jsonwebtoken";

import { configureEnvironment } from '../config/env.js'
configureEnvironment('../../../.env')


export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.Authorization
    if (!token) {
        res.status(401)
            .json({
                error: "Unauthorized",
                status: 401,
            })
            .end();
    } else {
        try {
            const secret = process.env.JWT_SECRET;
            const decodedToken = jwt.verify(token, secret);
            const user = decodedToken.user;

            if (!user) {
                res.status(401)
                    .json({
                        error: "Unauthorized",
                        sttaus: 401,
                    })
                    .end();
            } else {
                req.user = user;
                next();
            }
        } catch (error) {
            res.status(401)
                .json({
                    error: "Unauthorized",
                    sttaus: 401,
                })
                .end();
        }
    }
};
