import Joi from "joi";

const pageSchema = Joi.object({
  page: Joi.object().required().messages({
    "object.empty": "page cannot be an empty field",
    "any.required": "page is a required field",
  }),
  url: Joi.string().required().messages({
    "string.empty": "url cannot be an empty field",
    "any.required": "url is a required field",
  }),
});

export default pageSchema;
