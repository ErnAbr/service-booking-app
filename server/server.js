const express = require("express");
const connectDb = require("./libs/database");
const configMiddlewares = require("./config/configMiddlewares");
const configRoutes = require("./config/configRoutes");

require("dotenv").config();

const server = express();
connectDb();
configMiddlewares(server);
configRoutes(server);

server.listen(process.env.PORT, () => {
  console.log(`server is listening to port ${process.env.PORT}`);
});
