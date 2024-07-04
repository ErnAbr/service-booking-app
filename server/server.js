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

// /api/category
server.use(process.env.CATEGORY_API, categoryController);
// /api/businesses
server.use(process.env.BUSINESS_API, businessContoller);

server.listen(process.env.PORT, () => {
  console.log(`server is listening to port ${process.env.PORT}`);
});
