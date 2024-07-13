import express from "express";
import { getUserBookings } from "./queries/getUserBookings";
import { createBooking } from "./mutations/createBooking";
import { deleteBooking } from "./mutations/deleteBooking";
import { isValidObjectId } from "../../middleware/isValidObjectId";
import { authMiddleware } from "../../middleware/authMiddleware";

const ROUTER_BASE_API = "/api/bookings";
const bookingRouter = express.Router();

bookingRouter.get(`${ROUTER_BASE_API}/user/:email`, authMiddleware, getUserBookings);
bookingRouter.post(ROUTER_BASE_API, authMiddleware, createBooking);
bookingRouter.delete(`${ROUTER_BASE_API}/:id`, isValidObjectId, authMiddleware, deleteBooking);

export default bookingRouter;
