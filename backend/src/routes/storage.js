import { Router } from "express";
import path from 'path';
import express from 'express';
import { getDirname } from "../config/directory.js";


const storageRouter = new Router();

storageRouter.use('/storage', express.static(path.join(getDirname(), '../../storage')));

export {
    storageRouter
}
