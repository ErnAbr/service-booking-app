import styles from "./CardMyBookings.module.scss";
import { IBooking } from "@/types/booking";
import { IBusiness } from "@/types/business";
import { Card } from "@/components/Card/Card";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { FaUser, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

interface CardMyBookingsProps {
  booking: IBooking;
  business: IBusiness;
}

export const CardMyBookings = ({ booking, business }: CardMyBookingsProps) => {
  const timeZone = "UTC";

  const formattedDate = format(
    toZonedTime(new Date(booking.orderDateTime), timeZone),
    "dd-MMM-yyyy",
  );
  const formattedTime = format(toZonedTime(new Date(booking.orderDateTime), timeZone), "HH:mm");

  return (
    <Card
      key={booking.id}
      image={business.photoUrl}
      category={business.category}
      title={
        <>
          <FaUser className={styles.icon} /> {business.representative}
        </>
      }
      subtitle={
        <>
          <FaMapMarkerAlt className={styles.icon} /> {business.address}
        </>
      }
      description={
        <>
          <div>
            <FaCalendarAlt className={styles.icon} />
            <span>Service on: {formattedDate}</span>
          </div>
          <div>
            <FaClock className={styles.icon} />
            <span>Service at: {formattedTime}</span>
          </div>
        </>
      }
      cardClass={styles.card}
      imgClass={styles.img}
      categoryClass={styles.category}
      titleClass={styles.title}
      subtitleClass={styles.subtitle}
      descriptionClass={styles.description}
      cardBody={styles.cardBody}
      bottomClass={styles.bottom}
    />
  );
};
