import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
const JoiPassword = Joi.extend(joiPasswordExtendCore);
const loginSchema = Joi.object({
  email: Joi.string().email().messages({
    "string.email": "Email must be a valid email",
    "string.empty": "Email cannot be an empty field",
  }),
  password: JoiPassword.string()
    .min(8)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .messages({
      "string.empty": "Password cannot be an empty field",
      "password.minOfLowercase":
        "Password must contain at least 1 lowercase letter",
      "password.minOfUppercase":
        "Password must contain at least 1 uppercase letter",
      "password.minOfNumeric": "Password must contain at least 1 number",
      "string.min": "Password must be at least 8 characters long",
    }),
  firstname: Joi.string().min(2).messages({
    "string.empty": "firstname cannot be an empty field",
    "string.min": "firstname must be at least 2 characters long",
  }),
  lastname: Joi.string().min(2).messages({
    "string.empty": "lastname cannot be an empty field",
    "string.min": "lastname must be at least 2 characters long",
  }),
  phoneNumber: Joi.string().allow("").optional().messages({
    "string.empty": "Phone number cannot be an empty field",
  }),
  address: Joi.string().allow("").optional().messages({
    "string.empty": "address cannot be an empty field",
  }),
  profilePic: Joi.string().allow("").optional().messages({
    "string.empty": "address cannot be an empty field",
  }),
  info: Joi.string().allow("").optional().messages({
    "string.empty": "address cannot be an empty field",
  }),
  role: Joi.string().allow("").optional().messages({
    "string.empty": "address cannot be an empty field",
  }),
});

export default loginSchema;
