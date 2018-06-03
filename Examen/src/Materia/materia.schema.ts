import * as Joi from 'joi';
export const MATERIA_SCHEMA = Joi
    .object().keys({
        codigo: Joi.number(),
        nombreMateria: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        description: Joi.number().integer().greater(18).less(40),
        activo: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        fechaCreacion: Joi.string().required(),
        numeroHorasSemana:Joi.number(),
        estudianteId:Joi.number().required()
    });