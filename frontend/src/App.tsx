import { useEffect } from "react";
import "./styles/Default.module.scss";
import { Routes } from "./navigation/router";
import { useStore } from "./context/store";
import api from "./api/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const initializeUser = useStore((state) => state.initializeUser);
  const setCategories = useStore((state) => state.setCategories);
  const setBusinesses = useStore((state) => state.setBusinesses);
  const setLoading = useStore((state) => state.setLoading);
  const isLoading = useStore((state) => state.isLoading);

  useEffect(() => {
    const initializeApp = async () => {
      setLoading(true);
      try {
        initializeUser();
        const [categories, businesses] = await Promise.all([
          api.Categories.getCategories(),
          api.Businesses.getCompanies(),
        ]);
        setCategories(categories);
        setBusinesses(businesses);
      } catch (error) {
        console.error("Failed to initialize app", error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, [initializeUser, setCategories, setBusinesses, setLoading]);

  if (isLoading) {
    return <div>Initiating App...</div>;
  }

  return (
    <>
      <Routes />
      <ToastContainer closeOnClick position="bottom-right" theme="colored" />
    </>
  );
}

export default App;
