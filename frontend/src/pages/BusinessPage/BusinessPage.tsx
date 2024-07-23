import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./BusinessPage.module.scss";
import { BUSINESS_QUERY_KEY } from "@/api/queryKeys";
import { IBusiness } from "@/types/business";
import { CardBusinessMainPage } from "@/components/CardBusinessMainPage/CardBusinessMainPage";
import { FaUser, FaClock } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { CardBusinessPageSimple } from "@/components/CardBusinessPageSimple/CardBusinessPageSimple";
import { Button } from "@/components/Button/Button";
import { SlNotebook } from "react-icons/sl";
import { useState } from "react";
import { Modal } from "@/components/modal/modal";
// import { DateAndTimePicker } from "@/components/DateAndTimePicker/DateAndTimePicker";
import { useStore } from "@/context/store";
import { toast } from "react-toastify";

export const BusinessPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const user = useStore((state) => state.user);

  const businesses = queryClient.getQueryData<IBusiness[]>([BUSINESS_QUERY_KEY]);

  const business = businesses?.find((b) => b.id === id);
  const similarBusinesses = businesses?.filter(
    (b) => b.id !== id && b.category === business?.category,
  );

  const handleBookAppointmentClick = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
      toast.error("Please log in to book an appointment.");
    }
  };

  if (!business) return <div>Business Not Found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <CardBusinessMainPage {...business} />
        <div className={styles.representativeInfo}>
          <button>
            <IoShareOutline size={"2.5rem"} className={styles.shareIcon} />
          </button>

          <div className={styles.representative}>
            <FaUser className={styles.icon} />
            <span>{business.representative}</span>
          </div>
          <div className={styles.availability}>
            <FaClock className={styles.icon} />
            <span>Available 8:00 AM to 10:PM</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.bottomLeft}>
          <h2>Description</h2>
          <p>
            {business.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            animi quasi deleniti dolorem eveniet accusamus, quia nostrum tempore rerum consequuntur
            necessitatibus a vitae et atque at porro facilis ducimus illum veniam quisquam placeat
            minus illo esse. Tempore quaerat recusandae quisquam, deleniti assumenda aliquid
            mollitia totam odio quis iusto eos id.
          </p>
        </div>
        <div className={styles.bottomRight}>
          <Button
            onClick={handleBookAppointmentClick}
            variant="primary"
            className={styles.bookAppointmentButton}
          >
            <SlNotebook className={styles.bookingIcon} /> Book Appointment
          </Button>
          <h2>Similar Business</h2>
          <div className={styles.similarBusiness}>
            {similarBusinesses && similarBusinesses.length > 0 ? (
              similarBusinesses.map((sb) => (
                <CardBusinessPageSimple
                  key={sb.id}
                  photoUrl={sb.photoUrl}
                  companyName={sb.companyName}
                  representative={sb.representative}
                  address={sb.address}
                  id={sb.id}
                />
              ))
            ) : (
              <p>No similar business found.</p>
            )}
          </div>
        </div>
      </div>
      {/* {isModalOpen && id && (
        <>
          <Modal closeModal={() => setIsModalOpen(false)}>
            <DateAndTimePicker setIsModalOpen={() => setIsModalOpen(false)} id={id} />
          </Modal>
        </>
      )} */}
    </div>
  );
};
