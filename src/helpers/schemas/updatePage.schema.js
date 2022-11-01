import Joi from "joi";

const updatePageSchema = Joi.object({
  page: Joi.object().allow("").optional().messages({
    "object.empty": "page cannot be an empty field",
  }),
  navBar: Joi.string().allow("").optional().messages({
    "string.empty": "navBar cannot be an empty field",
  }),
});

export default updatePageSchema;
