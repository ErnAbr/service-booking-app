import { useEffect } from "react";
import { useStore } from "../context/store";
import { routes } from "../navigation/routes";
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const initializeUser = useStore((state) => state.initializeUser);
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    initializeUser();
    if (user) navigate(routes.HOME);
  }, [initializeUser, navigate, user]);

  return <h1>This is Register page</h1>;
};
