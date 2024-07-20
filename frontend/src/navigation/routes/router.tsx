import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Services } from "../../pages/Services";
import { AboutUs } from "../../pages/AboutUs";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Register/Register";
import { NotFound } from "../../pages/NotFound";
import { MainLayout } from "../layout/MainLayout";
import { routes } from "./routes";
import { BusinessPage } from "src/pages/BusinessPage/BusinessPage";
import { RequireAuth } from "../auth/RequireAuth";
import { GuestOnlyAuth } from "../auth/GuestOnlyAuth";
import { BookingPage } from "src/pages/BookingPage/BookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: routes.HOME, element: <Home /> },
      { path: routes.SERVICES, element: <Services /> },
      { path: routes.ABOUT_US, element: <AboutUs /> },
      {
        element: <RequireAuth />,
        children: [
          { path: routes.BUSINESS_PAGE, element: <BusinessPage /> },
          { path: routes.BOOKING_PAGE, element: <BookingPage /> },
        ],
      },
      {
        element: <GuestOnlyAuth />,
        children: [
          { path: routes.LOGIN, element: <Login /> },
          { path: routes.REGISTER, element: <Register /> },
        ],
      },
      { path: "/not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
