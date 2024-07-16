import { useEffect } from "react";
import "./styles/Default.module.scss";
import { Routes } from "./navigation/routes/router";
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
  const user = useStore((state) => state.user);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await initializeUser();
        const categories = await api.Categories.getCategories();
        setCategories(categories);
        const businesses = await api.Businesses.getBusinesses();
        setBusinesses(businesses);
      } catch (error) {
        console.error("Failed to initialize app", error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, [initializeUser, setCategories, setBusinesses, setLoading]);

  if (isLoading && !user) {
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
