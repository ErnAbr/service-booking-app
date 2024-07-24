import express from "express";
import path from "path";
import { connectDB } from "./libs/database";
import { configMiddlewares } from "./config/configMiddlewares";
import { configRoutes } from "./config/configRoutes";
import { envVariables } from "./config/configEnvVariables";

const server = express();
connectDB();

server.use(express.json({ limit: "50mb" }));
server.use(express.static(path.join(__dirname, "../../frontend/dist")));

configMiddlewares(server);
configRoutes(server);

server.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

const PORT = process.env.PORT || envVariables.server.port;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
