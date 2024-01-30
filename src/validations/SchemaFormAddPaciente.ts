import Joi from "joi";

export const SchemaFormAddPaciente = Joi.object({
    mascota : Joi.string()
        .max(30)
        .required()
        .messages({
            "string.empty" : "El nombre de la mascota es requerida",
            "string.max" : "Máximo de 30 caracteres"
        }),
    duenio : Joi.string()
        .max(30)
        .required()
        .messages({
            "string.empty" : "El nombre del dueño es requerido",
            "string.max" : "Máximo de 30 caracteres"
        }),
    email : Joi.string()
        .required()
        .email({tlds :false})
        .messages({
            "string.empty" : "El email del dueño es obligatorio",
            "string.email" : "El formato es incorrecto",
        }),
    raza : Joi.string()
        .max(30)
        .required()
        .messages({
            "string.empty" : "La raza requerida",
            "string.max" : "Máximo de 30 caracteres"
        }),
})