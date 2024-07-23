import express from "express";
import { getUserBookings } from "./queries/getUserBookings";
import { createBooking } from "./mutations/createBooking";
import { deleteBooking } from "./mutations/deleteBooking";
import { isValidObjectId } from "../../middleware/isValidObjectId";
import { userProtected } from "../../middleware/userProtected";

const ROUTER_BASE_API = "/api/bookings";
const bookingRouter = express.Router();

bookingRouter.get(`${ROUTER_BASE_API}/user/:email`, userProtected, getUserBookings);
bookingRouter.post(ROUTER_BASE_API, userProtected, createBooking);
bookingRouter.delete(`${ROUTER_BASE_API}/:id`, isValidObjectId, userProtected, deleteBooking);

export default bookingRouter;
