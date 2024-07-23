import styles from "./BookingPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useBookings } from "@/api/queryBookings";
import { toast } from "react-toastify";
import { routes } from "@/navigation/routes/routes";
import { useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { BUSINESS_QUERY_KEY } from "@/api/queryKeys";
import { IBusiness } from "@/types/business";
import { MyBookingsTab } from "@/components/MyBookingsTab/MyBookingsTab";

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
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <CircularProgress color="secondary" />
          <Typography variant="h6" mt={1}>
            Loading Bookings...
          </Typography>
        </div>
      ) : bookings && bookings.length > 0 && businesses ? (
        <MyBookingsTab bookings={bookings} businesses={businesses} />
      ) : (
        <div className={styles.noBookingsContainer}>
          <Typography variant="h6" mt={1}>
            No bookings found.
          </Typography>
        </div>
      )}
    </>
  );
};
