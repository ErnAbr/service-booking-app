import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Button } from "../Button/Button";
import { useStore } from "@/context/store";
import { toast } from "react-toastify";
import { generateTimeSlots } from "./helpers/generateTimeSlots";
import { ApiError } from "@/types/error";
import { api } from "@/api/api";
import { handleApiError } from "@/utils/handleApiErrors";
import { format, isAfter, isSameDay } from "date-fns";
import styles from "./DateAndTimePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { toZonedTime } from "date-fns-tz";

interface DateAndTimePickerProps {
  id: string;
  setIsModalOpen: () => void;
}

export const DateAndTimePicker = ({ id, setIsModalOpen }: DateAndTimePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const timeSlots = generateTimeSlots();
  const user = useStore((state) => state.user);

  useEffect(() => {
    const fetchBookingSlots = async () => {
      try {
        if (!selectedDate) return;
        const dateStr = format(selectedDate, "yyyy-MM-dd");
        const response = await api.Businesses.getBusinessBookingsByDate(id, dateStr);
        setBookedSlots(response);
      } catch (error) {
        handleApiError(error as ApiError);
      }
    };

    fetchBookingSlots();
  }, [selectedDate, id]);

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !user) {
      toast.error("Please select a date and time");
      return;
    }

    const [hours, minutes] = selectedTime.split(":").map(Number);
    const orderDateTime = new Date(selectedDate);
    orderDateTime.setHours(hours);
    orderDateTime.setMinutes(minutes);

    const formattedDateTime = toZonedTime(orderDateTime, "Europe/Helsinki");

    const bookingData = {
      id: id,
      companyId: id,
      orderDateTime: formattedDateTime,
      userEmail: user.email,
      userName: user.userName,
    };

    try {
      const response = await api.Bookings.makeBooking(bookingData);
      toast.success(response.message);
      setIsModalOpen();
    } catch (error) {
      handleApiError(error as ApiError);
    }
  };

  const isTimeSlotDisabled = (time: string) => {
    if (!selectedDate) return false;
    const [hours, minutes] = time.split(":").map(Number);
    const now = new Date();
    const slotTime = new Date(selectedDate.setHours(hours, minutes));
    return isSameDay(selectedDate, now) && isAfter(now, slotTime);
  };

  return (
    <div className={styles.dateAndTimePicker}>
      <h2>Book a Service</h2>
      <p>Select Date and Time slot to book a service</p>
      <div className={styles.datePicker}>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          inline
          minDate={new Date()}
        />
      </div>
      <div className={styles.timeSlots}>
        <label>Select Time Slot</label>
        <div className={styles.timeSlotButtons}>
          {timeSlots.map((time, index) => (
            <button
              key={index}
              className={`${styles.timeSlotButton} ${selectedTime === time ? styles.selected : ""}`}
              onClick={() => setSelectedTime(time)}
              disabled={bookedSlots.includes(time) || isTimeSlotDisabled(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <Button className={styles.bookingButton} variant="primary" onClick={handleBooking}>
        Book Now
      </Button>
    </div>
  );
};
