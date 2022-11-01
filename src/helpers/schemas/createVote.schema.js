import Joi from "joi";

const voteSchema = Joi.object({
  voteId: Joi.string().required().messages({
    "string.empty": "voteId cannot be an empty field",
    "any.required": "voteId is a required field",
  }),
  rate: Joi.number().required().messages({
    "number.empty": "rate cannot be an empty field",
    "any.required": "rate is a required field",
  }),
});

export default voteSchema;
