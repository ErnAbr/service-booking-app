import styles from "./BookingPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useBookings } from "src/api/queryBookings";
import { toast } from "react-toastify";
import { routes } from "src/navigation/routes/routes";
import { useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { BUSINESS_QUERY_KEY } from "src/api/queryKeys";
import { IBusiness } from "src/types/business";
import { MyBookingsTab } from "src/components/MyBookingsTab/MyBookingsTab";

export const BookingPage = () => {
  const { email } = useParams<{ email: string }>();
  const queryClient = useQueryClient();
  const businesses = queryClient.getQueryData<IBusiness[]>([BUSINESS_QUERY_KEY]);
  const { data: bookings, error, isLoading } = useBookings(email!);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error("Error Loading Bookings");
      navigate(routes.HOME);
    }
  }, [error, navigate]);

  return (
    <>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <CircularProgress color="secondary" />
          <Typography variant="h6" mt={1}>
            Loading Bookings...
          </Typography>
        </div>
      )}
      {bookings && businesses && <MyBookingsTab bookings={bookings} businesses={businesses} />}
    </>
  );
};
