import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Button } from "../Button/Button";
import { useStore } from "src/context/store";
import { toast } from "react-toastify";
import { generateTimeSlots } from "./helpers/generateTimeSlots";
import { ApiError } from "src/types/error";
import api from "src/api/api";
import { handleApiError } from "src/utils/handleApiErrors";
import { format } from "date-fns";
import styles from "./DateAndTimePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";

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

    const bookingData = {
      companyId: id,
      orderDateTime: orderDateTime,
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
              disabled={bookedSlots.includes(time)}
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
