const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const configMiddlewares = (server) => {
  server.use(express.json());
  server.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    }),
  );
  server.use(cookieParser());
};

module.exports = configMiddlewares;
