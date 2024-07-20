import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envVariables } from "../config/configEnvVariables";

interface CustomJwtPayload extends JwtPayload {
  admin?: boolean;
}

export const adminProtected: RequestHandler = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, envVariables.jwt.secret) as CustomJwtPayload;

    if (decoded.admin) {
      next();
    } else {
      res.status(403).send({ message: "Forbidden: Not enough privileges" });
    }
  } catch {
    res.status(401).send({ message: "Unauthorized: Invalid token" });
  }
};
