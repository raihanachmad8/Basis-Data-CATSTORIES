import express from 'express'
import {publicRouter} from "../routes/public-api.js";
import {errorMiddleware} from "../middleware/error-middleware.js";
import {userRouter} from "../routes/api.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(publicRouter)
app.use(userRouter)

app.use(errorMiddleware)