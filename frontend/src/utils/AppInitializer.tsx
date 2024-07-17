import { CircularProgress, Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useStore } from "src/context/store";
import styles from "../styles/App.module.scss";
import { useBusinesses } from "src/api/queryBusinesses";
import { useCategories } from "src/api/queryCategories";

interface AppInitializerProps {
  children: ReactNode;
}

export const AppInitializer = ({ children }: AppInitializerProps) => {
  const initializeUser = useStore((state) => state.initializeUser);
  const user = useStore((state) => state.user);
  const isUserLoading = useStore((state) => state.isLoading);
  const setIsUserLoading = useStore((state) => state.setLoading);

  const { isLoading: isBusinessesLoading } = useBusinesses();
  const { isLoading: isCategoriesLoading } = useCategories();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await initializeUser();
      } catch (error) {
        console.error("Failed to initialize app", error);
      } finally {
        setIsUserLoading(false);
      }
    };
    initializeApp();
  }, [initializeUser]);

  if (isBusinessesLoading || isCategoriesLoading || isUserLoading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress color="secondary" size={200} />
        <Typography variant="h4" mt={1}>
          Loading...
        </Typography>
      </div>
    );
  }

  return <>{children}</>;
};
