import { envVariables } from "../../../config/configEnvVariables";
import jwt, { JwtPayload } from "jsonwebtoken";

export const generateToken = (payload: JwtPayload): string => {
  const token = jwt.sign(payload, envVariables.jwt.secret, { expiresIn: envVariables.jwt.expiration });
  return token;
};
