const express = require("express");
const getAllBusinesses = require("./queries/getAllBusinesses");
const getBusinessesByCategory = require("./queries/getBusinessesByCategory");
const getBusinessById = require("./queries/getBusinessById");
const getBookingsByDate = require("./queries/getBookingsByDate");
const createBusiness = require("./mutations/createBusiness");
const updateBusiness = require("./mutations/updateBusiness");
const isValidObjectId = require("../../middleware/isValidObjectId");
const authMiddleware = require("../../middleware/authMiddleware");

const ROUTER_BASE_API = "/api/businesses";
const businessRouter = express.Router();

businessRouter.get(ROUTER_BASE_API, getAllBusinesses);
businessRouter.get(`${ROUTER_BASE_API}/category/:category`, getBusinessesByCategory);
businessRouter.get(`${ROUTER_BASE_API}/:id`, isValidObjectId, getBusinessById);
businessRouter.get(`${ROUTER_BASE_API}/:businessId/bookings/date/:date`, authMiddleware, getBookingsByDate);
businessRouter.post(ROUTER_BASE_API, authMiddleware, createBusiness);
businessRouter.put(`${ROUTER_BASE_API}/:id`, isValidObjectId, authMiddleware, updateBusiness);

module.exports = businessRouter;
