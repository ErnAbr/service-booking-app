import jwt, { JwtPayload } from "jsonwebtoken";
import { envVariables } from "../config/configEnvVariables";
import { RequestHandler } from "express";

export const userProtected: RequestHandler = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, envVariables.jwt.secret) as JwtPayload;
    req.currentUser = decoded;
    next();
  } catch {
    return res.status(401).send({ message: "Unauthorized: Session Expired" });
  }
};
