const express = require("express");
const getUserBookings = require("./queries/getUserBookings");
const createBooking = require("./mutations/createBooking");
const deleteBooking = require("./mutations/deleteBooking");
const isValidObjectId = require("../../middleware/isValidObjectId");

const ROUTER_BASE_API = "/api/bookings";
const bookingRouter = express.Router();

bookingRouter.get(`${ROUTER_BASE_API}/user/:email`, getUserBookings);
bookingRouter.post(ROUTER_BASE_API, createBooking);
bookingRouter.delete(`${ROUTER_BASE_API}/:id`, isValidObjectId, deleteBooking);

module.exports = bookingRouter;
