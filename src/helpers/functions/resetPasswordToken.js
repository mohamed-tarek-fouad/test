import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export default function createResetToken(token, secret, next) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    next(err);
  }
}
