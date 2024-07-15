import { useEffect } from "react";
import { useStore } from "../../context/store";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../routes/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GuestOnlyAuth = () => {
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (user) {
      toast.error("You Are Already Logged In");
    }
  }, []);

  return user ? <Navigate to={routes.HOME} /> : <Outlet />;
};
