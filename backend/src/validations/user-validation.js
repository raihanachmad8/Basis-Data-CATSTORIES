import Joi from 'joi'

const loginUserValidation = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(4).required(),
})

const getUserValidation = Joi.string().min(4).required()

export {
    loginUserValidation,
    getUserValidation
}