import express from "express";
import { getCategories } from "./queries/getCategories";
import { postCategories } from "./mutations/postCategories";
import { authMiddleware } from "../../middleware/authMiddleware";

const ROUTER_BASE_API = "/api/categories";
const categoriesRouter = express.Router();

categoriesRouter.get(ROUTER_BASE_API, getCategories);
categoriesRouter.post(ROUTER_BASE_API, authMiddleware, postCategories);

export default categoriesRouter;
