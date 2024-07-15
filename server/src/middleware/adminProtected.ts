import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  admin?: boolean;
}

export const adminProtected: RequestHandler = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const jwtSecret = process.env.TOKEN_SECRET as string;

    if (!token) {
      return res.status(401).send({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, jwtSecret) as CustomJwtPayload;

    if (decoded.admin) {
      next();
    } else {
      res.status(403).send({ message: "Forbidden: Not enough privileges" });
    }
  } catch {
    res.status(401).send({ message: "Unauthorized: Invalid token" });
  }
};
