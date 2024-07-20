import api from "./api";
import { useQuery } from "@tanstack/react-query";
import { BOOKING_QUERY_KEY } from "./queryKeys";
import { IBooking } from "src/types/booking";

const fetchBookings = async (email: string): Promise<IBooking[]> => {
  const response = await api.Bookings.getUserBookings(email);
  return response;
};

export const useBookings = (email: string) => {
  return useQuery<IBooking[], Error>({
    queryKey: [BOOKING_QUERY_KEY, email],
    queryFn: () => fetchBookings(email),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
