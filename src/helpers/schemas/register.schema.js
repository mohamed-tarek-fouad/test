import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
const JoiPassword = Joi.extend(joiPasswordExtendCore);
const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email",
    "string.empty": "Email cannot be an empty field",
    "any.required": "Email is a required field",
  }),
  password: JoiPassword.string()
    .min(8)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .required()
    .messages({
      "string.empty": "Password cannot be an empty field",
      "password.minOfLowercase":
        "Password must contain at least 1 lowercase letter",
      "password.minOfUppercase":
        "Password must contain at least 1 uppercase letter",
      "password.minOfNumeric": "Password must contain at least 1 number",
      "string.min": "Password must be at least 8 characters long",
      "any.required": "Password is a required field",
    }),
  firstname: Joi.string().min(2).required().messages({
    "string.empty": "firstname cannot be an empty field",
    "string.min": "firstname must be at least 2 characters long",
    "any.required": "firstname is a required field",
  }),
  lastname: Joi.string().min(2).required().messages({
    "string.empty": "lastname cannot be an empty field",
    "string.min": "lastname must be at least 2 characters long",
    "any.required": "lastname is a required field",
  }),
  phoneNumber: Joi.string().required().messages({
    "string.empty": "Phone number cannot be an empty field",
    "any.required": "Phone number is a required field",
  }),
  address: Joi.string().required().messages({
    "string.empty": "address cannot be an empty field",
    "any.required": "address is a required field",
  }),
  profilePic: Joi.string().allow("").optional(),
  info: Joi.string().allow("").optional(),
  role: Joi.string().allow("").optional(),
});

export default loginSchema;
