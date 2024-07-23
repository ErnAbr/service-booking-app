import express from "express";
import { connectDB } from "./libs/database";
import { configMiddlewares } from "./config/configMiddlewares";
import { configRoutes } from "./config/configRoutes";
import { envVariables } from "./config/configEnvVariables";

const server = express();
connectDB();
configMiddlewares(server);
configRoutes(server);

server.listen(envVariables.server.port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listening to port ${envVariables.server.port}`);
});
