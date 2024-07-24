import cors from "cors";
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { envVariables } from "./configEnvVariables";
import helmet from "helmet";

export const configMiddlewares = (server: Express) => {
  server.use(express.json());
  server.use(morgan("common"));
  server.use(
    cors({
      origin: envVariables.origin.url,
      credentials: true,
    }),
  );

  server.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "https://fonts.googleapis.com"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
        },
      },
    }),
  );
  server.use(cookieParser());
};
