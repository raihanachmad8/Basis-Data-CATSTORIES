import jwt from "jsonwebtoken";

import { configureEnvironment } from '../config/env.js'
configureEnvironment('../../../.env')

export const guestMiddleware = async (req, res, next) => {
    const token = req.cookies.Authorization;
    
    if (token) {
        try {
            const secret = process.env.JWT_KEY;
            const decodedToken = jwt.verify(token, secret);
            const user = decodedToken.user;
            if (user) {
                return res.redirect("/api/v1/users/auth/current");
            } 
        } catch (error) {
            return res.status(403)
                .json({
                    sttaus: 403,
                    error: "Forbidden access",
                })
                .end();
        }
    }
    next();
}