const Joi = require('joi');

const propertyValidationSchema = Joi.object({
  state: Joi.string().max(100).required(),
  city: Joi.string().max(100).required(),
  place: Joi.string().max(100).required(),
  rent: Joi.number().min(0).required(),
  furnished: Joi.string().valid('Fully Furnished', 'Semi Furnished', 'Unfurnished').required(),
  parking: Joi.string().valid('2 Wheeler', '4 Wheeler', 'None').required(),
  bhkType: Joi.string().valid('1 BHK', '2 BHK', '3 BHK').required(),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now),
});

const sellerValidationSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  firstName: Joi.string().max(50).required(),
  phone: Joi.string().max(15).required(),
  properties: Joi.array().items(propertyValidationSchema).optional(),
});

module.exports = {sellerValidationSchema};