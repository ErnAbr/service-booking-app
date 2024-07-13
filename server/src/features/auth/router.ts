import express from "express";
import { login } from "./queries/login";
import { register } from "./mutations/register";

const ROUTER_BASE_API = "/api/auth";
const authRouter = express.Router();

authRouter.post(`${ROUTER_BASE_API}/login`, login);
authRouter.post(`${ROUTER_BASE_API}/register`, register);

export default authRouter;
