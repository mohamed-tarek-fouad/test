import Joi from "joi";

const voteSchema = Joi.object({
  domain: Joi.string().allow("").optional().messages({
    "string.empty": "domain cannot be an empty field",
  }),
  settings: Joi.object().allow("").optional().messages({
    "string.empty": "settings cannot be an empty field",
  }),
  phoneNumber: Joi.string().allow("").optional().messages({
    "string.empty": "phoneNumber cannot be an empty field",
  }),
  whatsapp: Joi.string().allow("").optional().messages({
    "string.empty": "whatsapp cannot be an empty field",
  }),
  startAt: Joi.date().allow("").optional().messages({
    "string.empty": "startAt cannot be an empty field",
  }),
  endAt: Joi.date().allow("").optional().messages({
    "string.empty": "endAt cannot be an empty field",
  }),
  days: Joi.string().allow("").optional().messages({
    "string.empty": "days cannot be an empty field",
  }),
  estimatedTime: Joi.number().allow("").optional().messages({
    "number.empty": "estimatedTime cannot be an empty field",
  }),
  location: Joi.string().allow("").optional().messages({
    "string.empty": "location cannot be an empty field",
  }),
  fees: Joi.number().allow("").optional().messages({
    "number.empty": "fees cannot be an empty field",
  }),
  description: Joi.string().allow("").optional().messages({
    "string.empty": "description cannot be an empty field",
  }),
  type: Joi.string().allow("").optional().messages({
    "string.empty": "type cannot be an empty field",
  }),
});

export default voteSchema;
