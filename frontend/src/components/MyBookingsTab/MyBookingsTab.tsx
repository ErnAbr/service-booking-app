import { useState } from "react";
import styles from "./MyBookingsTab.module.scss";
import { IBooking } from "@/types/booking";
import { IBusiness } from "@/types/business";
import { CardMyBookings } from "@/components/CardMyBookings/CardMyBookings";
import { compareAsc } from "date-fns";
import { toZonedTime } from "date-fns-tz";

interface MyBookingsProps {
  bookings: IBooking[];
  businesses: IBusiness[];
}

const TIME_ZONE = "Europe/Helsinki";

export const MyBookingsTab = ({ bookings, businesses }: MyBookingsProps) => {
  const [activeTab, setActiveTab] = useState<"booked" | "completed">("booked");

  const now = new Date();

  const bookedBookings = bookings
    .filter((booking) => compareAsc(booking.orderDateTime, now) >= 0)
    .sort((a, b) => compareAsc(a.orderDateTime, b.orderDateTime));

  const completedBookings = bookings
    .filter((booking) => compareAsc(booking.orderDateTime, now) < 0)
    .sort((a, b) => compareAsc(a.orderDateTime, b.orderDateTime));

  return (
    <div>
      <div className={styles.tabContainer}>
        <h2>My Bookings</h2>
        <div>
          <button
            className={activeTab === "booked" ? styles.activeTab : ""}
            onClick={() => setActiveTab("booked")}
          >
            Booked
          </button>
          <button
            className={activeTab === "completed" ? styles.activeTab : ""}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      <div className={styles.bookingsContainer}>
        {activeTab === "booked" &&
          bookedBookings.map((booking, key) => {
            const business = businesses.find((b) => b.id === booking.companyId);
            if (!business) return null;

            const zonedDate = toZonedTime(booking.orderDateTime, TIME_ZONE);

            return (
              <CardMyBookings
                key={key}
                booking={{
                  ...booking,
                  orderDateTime: zonedDate,
                }}
                business={business}
              />
            );
          })}

        {activeTab === "completed" &&
          completedBookings.map((booking) => {
            const business = businesses.find((b) => b.id === booking.companyId);
            if (!business) return null;

            const zonedDate = toZonedTime(booking.orderDateTime, TIME_ZONE);

            return (
              <CardMyBookings
                key={booking.id}
                booking={{
                  ...booking,
                  orderDateTime: zonedDate,
                }}
                business={business}
              />
            );
          })}
      </div>
    </div>
  );
};
