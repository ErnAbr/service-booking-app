import { CircularProgress, Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useBusinesses } from "src/api/queryBusinesses";
import { useCategories } from "src/api/queryCategories";
import { useStore } from "src/context/store";
import styles from "../styles/App.module.scss";

interface AppInitializerProps {
  children: ReactNode;
}

export const AppInitializer = ({ children }: AppInitializerProps) => {
  const initializeUser = useStore((state) => state.initializeUser);
  const setCategories = useStore((state) => state.setCategories);
  const setBusinesses = useStore((state) => state.setBusinesses);
  const user = useStore((state) => state.user);

  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: businesses, isLoading: businessesLoading } = useBusinesses();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await initializeUser();
        if (categories) setCategories(categories);
        if (businesses) setBusinesses(businesses);
      } catch (error) {
        console.error("Failed to initialize app", error);
      } 
    };

    initializeApp();
  }, [initializeUser, categories, businesses, setCategories, setBusinesses]);

  if (categoriesLoading && businessesLoading && !user) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress color="secondary" size={200} />
        <Typography variant="h4" mt={1}>
          Initiating App...
        </Typography>
      </div>
    );
  }

  return <>{children}</>;
};
