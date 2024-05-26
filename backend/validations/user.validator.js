const Joi = require("joi");

const userValidationSchema = Joi.object({
  firstName: Joi.string().max(50),
  lastName: Joi.string().max(50),
  phone: Joi.string().max(50),
  accountType: Joi.string().max(50),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required()
});


module.exports = { userValidationSchema };