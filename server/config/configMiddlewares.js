const express = require("express");
const cors = require("cors");

const configMiddlewares = (server) => {
  server.use(express.json());
  server.use(cors());
};

module.exports = configMiddlewares;
