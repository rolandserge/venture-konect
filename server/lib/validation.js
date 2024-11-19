import Joi from "joi";

export function validateProject(body) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        jobTitle: Joi.string().min(3).max(24).required(),
        company: Joi.string().min(3).max(24).required(),
        interest: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
    });

    return schema.validate(body);
}

export function validateContact(body) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        company: Joi.string().min(3).max(24).required(),
        job: Joi.string().min(3).max(24).required(),
        industry: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.number().integer().required(),
        city: Joi.string().max(20).required(),
        about: Joi.string().required(),
        interest: Joi.string().max(50).required(),
        message: Joi.optional(),
    });

    return schema.validate(body);
}