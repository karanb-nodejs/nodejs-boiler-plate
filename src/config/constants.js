const Joi = require('joi');

const envSchema = Joi.object({
    PORT: Joi.string().required(),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_USER: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required().allow(""),
    DATABASE_NAME: Joi.string().required(),
    BASE_URL: Joi.string().required(),
}).unknown(true); // Allow additional environment variables


const { error, value: validatedEnv } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Environment validation error: ${error.message}`);
};

const constants = {
    PORT: validatedEnv.PORT,
    DATABASE_HOST: validatedEnv.DATABASE_HOST,
    DATABASE_USER: validatedEnv.DATABASE_USER,
    DATABASE_PASSWORD: validatedEnv.DATABASE_PASSWORD,
    BASE_URL: validatedEnv.BASE_URL,
    JWT_SECRET_KEY: validatedEnv.JWT_SECRET_KEY,
    EXPIRES_IN: validatedEnv.EXPIRES_IN,
};

module.exports = constants;
