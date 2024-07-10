const express = require("express");
const login = require("./queries/login");
const register = require("./mutations/register");

const ROUTER_BASE_API = "/api/auth";
const authRouter = express.Router();

authRouter.post(ROUTER_BASE_API, login);
authRouter.post(`${ROUTER_BASE_API}/register`, register);

module.exports = authRouter;
