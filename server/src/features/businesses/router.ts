import express from "express";
import { getAllBusinesses } from "./queries/getAllBusinesses";
import { getBusinessesByCategory } from "./queries/getBusinessesByCategory";
import { getBusinessById } from "./queries/getBusinessById";
import { getBookingsByDate } from "./queries/getBookingsByDate";
import { createBusiness } from "./mutations/createBusiness";
import { updateBusiness } from "./mutations/updateBusiness";
import { isValidObjectId } from "../../middleware/isValidObjectId";
import { authMiddleware } from "../../middleware/authMiddleware";

const ROUTER_BASE_API = "/api/businesses";
const businessRouter = express.Router();

businessRouter.get(ROUTER_BASE_API, getAllBusinesses);
businessRouter.get(`${ROUTER_BASE_API}/category/:category`, getBusinessesByCategory);
businessRouter.get(`${ROUTER_BASE_API}/:id`, isValidObjectId, getBusinessById);
businessRouter.get(`${ROUTER_BASE_API}/:businessId/bookings/date/:date`, authMiddleware, getBookingsByDate);
businessRouter.post(ROUTER_BASE_API, authMiddleware, createBusiness);
businessRouter.put(`${ROUTER_BASE_API}/:id`, isValidObjectId, authMiddleware, updateBusiness);

export default businessRouter;
