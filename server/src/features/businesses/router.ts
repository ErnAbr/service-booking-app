import express from "express";
import { getAllBusinesses } from "./queries/getAllBusinesses";
import { getBusinessesByCategory } from "./queries/getBusinessesByCategory";
import { getBusinessById } from "./queries/getBusinessById";
import { getBookingsByDate } from "./queries/getBookingsByDate";
import { createBusiness } from "./mutations/createBusiness";
import { updateBusiness } from "./mutations/updateBusiness";
import { isValidObjectId } from "../../middleware/isValidObjectId";
import { userProtected } from "../../middleware/userProtected";
import { adminProtected } from "../../middleware/adminProtected";

const ROUTER_BASE_API = "/api/businesses";
const businessRouter = express.Router();

businessRouter.get(ROUTER_BASE_API, getAllBusinesses);
businessRouter.get(`${ROUTER_BASE_API}/category/:category`, getBusinessesByCategory);
businessRouter.get(`${ROUTER_BASE_API}/:id`, isValidObjectId, getBusinessById);
businessRouter.get(
  `${ROUTER_BASE_API}/:businessId/bookings/date/:date`,
  userProtected,
  getBookingsByDate,
);
businessRouter.post(ROUTER_BASE_API, adminProtected, createBusiness);
businessRouter.put(`${ROUTER_BASE_API}/:id`, isValidObjectId, adminProtected, updateBusiness);

export default businessRouter;
