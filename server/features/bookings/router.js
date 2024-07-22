const express = require("express");
const getUserBookings = require("./queries/getUserBookings");
const createBooking = require("./mutations/createBooking");
const deleteBooking = require("./mutations/deleteBooking");
const isValidObjectId = require("../../middleware/isValidObjectId");
const authMiddleware = require("../../middleware/authMiddleware");

const ROUTER_BASE_API = "/api/bookings";
const bookingRouter = express.Router();

bookingRouter.get(`${ROUTER_BASE_API}/user/:email`, authMiddleware, getUserBookings);
bookingRouter.post(ROUTER_BASE_API, authMiddleware, createBooking);
bookingRouter.delete(`${ROUTER_BASE_API}/:id`, isValidObjectId, authMiddleware, deleteBooking);

module.exports = bookingRouter;
