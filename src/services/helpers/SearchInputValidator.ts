import Joi from "joi";

export const SearchInputValidator = Joi.string()
    .allow('').max(50).pattern(/^[a-zA-Z0-9\s]+$/).messages({
        "string.max": "Maximum 50 chars",
        "string.pattern.base": "Only latin letters, numbers and spaces are allowed",
    });
