import { db } from "../../database/config/db.js"
import { logger } from "../app/logging.js"

const getAll = async () => {
    try {
        const result = await db("Kucing").select("*")
        return result
    } catch (error) {
        logger.error('Error while getting all Kucing', error)
    }
}

const findById = async (id) => {
    try {
        const result = await db('Kucing').select('*').where({ID_Kucing: id})
        return result
    } catch (error) {
        logger.error('Error while finding Kucing by id: ', error)
    }
}

const create = async (kucing) => {
    try {
        await db('Kucing').insert(kucing)
        return await db('Kucing').select('*').where({ID_Kucing: kucing.ID_Kucing})
    } catch (error) {
        logger.error('Error while creating kucing:', error)
    }
}

const update = async (id, kucing) => {
    try {
        await db('Kucing').update(kucing).where({ID_Kucing: id})
        return db('Kucing').select('*').where({ID_Kucing: id})
    } catch (error) {
        logger.error('Error while updating kucing:', error)
    }
}

const remove = async (id) => {
    try {
        const result = await db('Kucing').del().where({ID_Kucing:id})
        return result > 0
    } catch (error) {
        logger.error('Error while deleting kucing', error)
    }
}

export const kucingRepository = {
    getAll,
    findById,
    create,
    update,
    remove
}