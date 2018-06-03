import * as Joi from 'joi';
export const ESTUDIANTE_SCHEMA = Joi
    .object().keys({
        id: Joi.number(),
        nombre: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        apellido: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        fechaNacimiento: Joi.string().required(),
        semestrActual:Joi.number(),
        graduado:Joi.required()
    });