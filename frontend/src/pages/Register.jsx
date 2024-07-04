import { useStore } from "../context/store";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  if (user) navigate("/");

  return <h1>This is Register page</h1>;
};
