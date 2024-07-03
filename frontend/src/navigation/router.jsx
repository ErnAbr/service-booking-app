import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { AboutUs } from "../pages/AboutUs";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";
import { MainLayout } from "./MainLayout"; // Ensure the path is correct
import { routes } from "./routes"; // Ensure the path is correct

const routeObjects = [
  { path: routes.HOME, element: <Home /> },
  { path: routes.SERVICES, element: <Services /> },
  { path: routes.ABOUT_US, element: <AboutUs /> },
  { path: routes.LOGIN, element: <Login /> },
  { path: routes.REGISTER, element: <Register /> },
  { path: "/not-found", element: <NotFound /> },
  { path: "*", element: <Navigate replace to="/not-found" /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routeObjects,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
