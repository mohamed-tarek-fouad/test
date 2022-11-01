import Joi from "joi";

const voteSchema = Joi.object({
  domain: Joi.string().required().messages({
    "string.empty": "domain cannot be an empty field",
    "any.required": "domain is a required field",
  }),
  settings: Joi.object().required().messages({
    "string.empty": "settings cannot be an empty field",
    "any.required": "settings is a required field",
  }),
  phoneNumber: Joi.string().allow("").optional().messages({
    "string.empty": "phoneNumber cannot be an empty field",
    "any.required": "phoneNumber is a required field",
  }),
  whatsapp: Joi.string().allow("").optional().messages({
    "string.empty": "whatsapp cannot be an empty field",
  }),
  startAt: Joi.date().allow("").optional().messages({
    "string.empty": "startAt cannot be an empty field",
    "any.required": "startAt is a required field",
  }),
  endAt: Joi.date().allow("").optional().messages({
    "string.empty": "endAt cannot be an empty field",
    "any.required": "endAt is a required field",
  }),
  days: Joi.string().allow("").optional().messages({
    "string.empty": "days cannot be an empty field",
  }),
  estimatedTime: Joi.number().allow("").optional().messages({
    "number.empty": "estimatedTime cannot be an empty field",
  }),
  location: Joi.string().required().messages({
    "string.empty": "location cannot be an empty field",
    "any.required": "location is a required field",
  }),
  fees: Joi.number().allow("").optional().messages({
    "number.empty": "fees cannot be an empty field",
    "any.required": "fees is a required field",
  }),
  type: Joi.string().required().messages({
    "string.empty": "type cannot be an empty field",
    "any.required": "type is a required field",
  }),
});

export default voteSchema;
