import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const { ACCESS_SECRET_KEY } = process.env;

export const createToken = (id: string) => {
  const payload = { id };
  if (ACCESS_SECRET_KEY) {
    const token = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: "24h" });
    return { token };
  }
};
