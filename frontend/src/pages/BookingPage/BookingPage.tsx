import styles from "./BookingPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useBookings } from "src/api/queryBookings";
import { toast } from "react-toastify";
import { routes } from "src/navigation/routes/routes";
import { useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";

export const BookingPage = () => {
  const { email } = useParams<{ email: string }>();
  const { data: bookings, error, isLoading } = useBookings(email!);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error("Error Loading Bookings");
      navigate(routes.HOME);
    }
  }, [error, navigate]);

  console.log(bookings);

  return (
    <div>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <CircularProgress color="secondary" />
          <Typography variant="h6" mt={1}>
            Loading Bookings...
          </Typography>
        </div>
      )}
    </div>
  );
};
