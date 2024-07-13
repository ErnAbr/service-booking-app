import { Express } from "express";
import categoriesRouter from "../features/categories/router";
import bookingRouter from "../features/bookings/router";
import businessRouter from "../features/businesses/router";
import authRouter from "../features/auth/router";

export const configRoutes = (server: Express) => {
  server.use(categoriesRouter);
  server.use(bookingRouter);
  server.use(businessRouter);
  server.use(authRouter);
};
