const express = require("express");
const cors = require("cors");
const connectDb = require("./config/database");

require("dotenv").config();
connectDb();

const server = express();
server.use(express.json());
server.use(cors());

const categoryController = require("./controllers/categoryController");
const businessContoller = require("./controllers/businessController");
const bookingController = require("./controllers/bookingController");

// /api/category
server.use(process.env.CATEGORY_API, categoryController);
// /api/businesses
server.use(process.env.BUSINESS_API, businessContoller);
// /api/bookings
server.use(process.env.BOOKING_API, bookingController);

server.listen(process.env.PORT, () => {
  console.log(`server is listening to port ${process.env.PORT}`);
});
