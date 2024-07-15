import { useEffect, useRef } from "react";
import { useStore } from "../../context/store";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../routes/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RequireAuth = () => {
  const user = useStore((state) => state.user);
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!user && !toastShownRef.current) {
      toast.error("You must be logged in to view this page.");
      toastShownRef.current = true;
    }
  }, []);

  return user ? <Outlet /> : <Navigate to={routes.LOGIN} />;
};
