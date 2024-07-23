import express from "express";
import { connectDB } from "./libs/database";
import { configMiddlewares } from "./config/configMiddlewares";
import { configRoutes } from "./config/configRoutes";
import { envVariables } from "./config/configEnvVariables";
import path from "path";

const server = express();
connectDB();

server.use(express.json({ limit: "50mb" }));
server.use(express.static(path.join(__dirname, "../../frontend/dist")));

configMiddlewares(server);
configRoutes(server);

server.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

server.listen(envVariables.server.port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listening to port ${envVariables.server.port}`);
});
