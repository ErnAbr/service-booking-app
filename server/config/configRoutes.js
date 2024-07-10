const categoriesRouter = require("../features/categories/router");
const bookingRouter = require("../features/bookings/router");
const businessRouter = require("../features/businesses/router");
const authRouter = require("../features/auth/router");

const configRoutes = (server) => {
  server.use(categoriesRouter);
  server.use(bookingRouter);
  server.use(businessRouter);
  server.use(authRouter);
};

module.exports = configRoutes;
