import express from 'express'
import {publicRouter} from "../routes/public-api.js";
import {errorMiddleware} from "../middleware/error-middleware.js";
import {userRouter} from "../routes/api.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { storageRouter } from '../routes/storage.js';
import bodyParser from 'body-parser'

export const app = express()
app.use(cors({ origin : 'http://localhost:5173', credentials: true, optionsSuccessStatus: 200 }))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(publicRouter)
app.use(storageRouter)
app.use(userRouter)

app.use(errorMiddleware)