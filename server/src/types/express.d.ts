import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      currentUser?: JwtPayload;
      // user?: string | JwtPayload;
    }
  }
}
