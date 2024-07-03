import { useEffect } from "react";
import "./styles/Default.module.scss";
import { Routes } from "./navigation/router";
import { useStore } from "./context/store";

function App() {
  const initializeUser = useStore((state) => state.initializeUser);

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  return <Routes />;
}

export default App;
