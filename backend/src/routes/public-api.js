import express from "express";
import UserController from "../controllers/user-controller.js"
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'
import {resolve} from 'path'
import { guestMiddleware } from "../middleware/guest-middleware.js";
import { jenisController } from "../controllers/jenis-controller.js";
import { kucingController } from "../controllers/kucing-controller.js";
import multer from 'multer'
import { getDirname } from "../config/directory.js";
import { pembeliController } from "../controllers/pembeli-service.js";
import { pengirimanController } from "../controllers/pengiriman-controller.js";
import { pembayaranController } from "../controllers/pembayaran-controller.js";
import { transaksiController } from "../controllers/transaksi-controller.js";


const swaggerSpec = YAML.load(resolve(getDirname(), '../../docs/swagger.yaml'))

const publicRouter = new express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, getDirname() + '../../../storage/kucing')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-.' + file.originalname.split('.').pop())
    }
})
const upload = multer({storage: storage})

// Swagger
publicRouter.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

publicRouter.post('/api/v1/users/auth/login', guestMiddleware, UserController.login)
publicRouter.get('/api/v1/users/auth/login',guestMiddleware,  (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method="POST" action="/api/v1/users/login">
            <input name="username" placeholder="username" />
            <input name="password" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    `)
})

publicRouter.get('/api/v1/cat-stories/jenis', jenisController.getAllJenis)
publicRouter.get('/api/v1/cat-stories/jenis/:id', jenisController.get)
publicRouter.post('/api/v1/cat-stories/jenis/create', jenisController.create)
publicRouter.put('/api/v1/cat-stories/jenis/update', jenisController.update)
publicRouter.delete('/api/v1/cat-stories/jenis/delete/:id', jenisController.remove)

publicRouter.get('/api/v1/cat-stories/kucing', kucingController.getAllKucing)
publicRouter.get('/api/v1/cat-stories/kucing/:id', kucingController.get)
publicRouter.post('/api/v1/cat-stories/kucing/create', upload.single('Foto'), kucingController.create)
publicRouter.put('/api/v1/cat-stories/kucing/update', upload.single('Foto'), kucingController.update)
publicRouter.delete('/api/v1/cat-stories/kucing/delete/:id', kucingController.remove)

publicRouter.get('/api/v1/cat-stories/pembeli', pembeliController.getAllPembeli)
publicRouter.get('/api/v1/cat-stories/pembeli/:id', pembeliController.get)
publicRouter.post('/api/v1/cat-stories/pembeli/create', pembeliController.create)
publicRouter.put('/api/v1/cat-stories/pembeli/update', pembeliController.update)
publicRouter.delete('/api/v1/cat-stories/pembeli/delete/:id', pembeliController.remove)

publicRouter.get('/api/v1/cat-stories/pengiriman', pengirimanController.getAllPengiriman)
publicRouter.get('/api/v1/cat-stories/pengiriman/:id', pengirimanController.get)
publicRouter.post('/api/v1/cat-stories/pengiriman/create', pengirimanController.create)
publicRouter.put('/api/v1/cat-stories/pengiriman/update', pengirimanController.update)
publicRouter.delete('/api/v1/cat-stories/pengiriman/delete/:id', pengirimanController.remove)

publicRouter.get('/api/v1/cat-stories/pembayaran', pembayaranController.getAllPembayaran)
publicRouter.get('/api/v1/cat-stories/pembayaran/:id', pembayaranController.get)
publicRouter.post('/api/v1/cat-stories/pembayaran/create', pembayaranController.create)
publicRouter.put('/api/v1/cat-stories/pembayaran/update', pembayaranController.update)
publicRouter.delete('/api/v1/cat-stories/pembayaran/delete/:id', pembayaranController.remove)

publicRouter.get('/api/v1/cat-stories/checkout/payment', transaksiController.getAllTransaksi)
publicRouter.get('/api/v1/cat-stories/checkout/payment/details/:id', transaksiController.get)
// publicRouter.get('/api/v1/cat-stories/pembayaran/:id', pembayaranController.get)
// publicRouter.post('/api/v1/cat-stories/pembayaran/create', pembayaranController.create)
// publicRouter.put('/api/v1/cat-stories/pembayaran/update', pembayaranController.update)
// publicRouter.delete('/api/v1/cat-stories/pembayaran/delete/:id', pembayaranController.remove)

export {
    publicRouter
}