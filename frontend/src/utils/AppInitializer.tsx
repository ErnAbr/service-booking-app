import { CircularProgress, Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import styles from "../styles/App.module.scss";
import { toast } from "react-toastify";
import { useBusinesses } from "@/api/queryBusinesses";
import { useCategories } from "@/api/queryCategories";
import { useStore } from "@/context/store";

interface AppInitializerProps {
  children: ReactNode;
}

export const AppInitializer = ({ children }: AppInitializerProps) => {
  const initializeUser = useStore((state) => state.initializeUser);
  const isUserLoading = useStore((state) => state.isLoading);
  const setIsUserLoading = useStore((state) => state.setLoading);

  const { isLoading: isBusinessesLoading } = useBusinesses();
  const { isLoading: isCategoriesLoading } = useCategories();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await initializeUser();
      } catch {
        toast("Failed to initialize app");
      } finally {
        setIsUserLoading(false);
      }
    };
    initializeApp();
  }, [initializeUser, setIsUserLoading]);

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
