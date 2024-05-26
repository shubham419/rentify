const Joi = require("joi");

const loginBodyValidatorSchema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {loginBodyValidatorSchema};