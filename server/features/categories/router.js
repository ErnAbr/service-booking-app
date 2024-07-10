const express = require("express");
const getCategories = require("./queries/getCategories");
const postCategories = require("./mutations/postCategories");
const authMiddleware = require("../../middleware/authMiddleware");

const ROUTER_BASE_API = "/api/categories";
const categoriesRouter = express.Router();

categoriesRouter.get(ROUTER_BASE_API, getCategories);
categoriesRouter.post(ROUTER_BASE_API, authMiddleware, postCategories);

module.exports = categoriesRouter;
