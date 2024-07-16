import express from "express";
import { login } from "./queries/login";
import { register } from "./mutations/register";
import { logout } from "./queries/logout";
import { updateUser } from "./mutations/updateUser";
import { userProtected } from "../../middleware/userProtected";

const ROUTER_BASE_API = "/api/auth";
const authRouter = express.Router();

authRouter.post(`${ROUTER_BASE_API}/login`, login);
authRouter.post(`${ROUTER_BASE_API}/register`, register);
authRouter.post(`${ROUTER_BASE_API}/update`, userProtected, updateUser);
authRouter.post(`${ROUTER_BASE_API}/logout`, logout);

export default authRouter;
