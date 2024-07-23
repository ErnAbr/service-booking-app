import cors from "cors";
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { envVariables } from "./configEnvVariables";

export const configMiddlewares = (server: Express) => {
  server.use(express.json());
  server.use(morgan("common"));
  server.use(
    cors({
      origin: envVariables.origin.url,
      credentials: true,
    }),
  );
  server.use(cookieParser());
};
