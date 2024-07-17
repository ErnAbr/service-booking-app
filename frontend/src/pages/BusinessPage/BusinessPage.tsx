import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./BusinessPage.module.scss";
import { BUSINESS_QUERY_KEY } from "src/api/queryKeys";
import { IBusiness } from "src/types/business";
import { BusinessPageSingleCard } from "src/components/BusinessPageSingleCard/BusinessPageSingleCard";
import { FaUser, FaClock } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { BusinessSimpleCard } from "src/components/BusinessSimpleCard/BusinessSimpleCard";

export const BusinessPage = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const businesses = queryClient.getQueryData<IBusiness[]>([BUSINESS_QUERY_KEY]);

  const business = businesses?.find((b) => b.id === id);
  const similarBusiness = businesses?.find((b) => b.id !== id && b.category === business?.category);

  if (!business) return <div>Business Not Found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <BusinessPageSingleCard {...business} />
        <div className={styles.representativeInfo}>
          <button>
            <IoShareOutline size={"2.5rem"} className={styles.shareIcon} />
          </button>

          <div className={styles.representative}>
            <FaUser size={"1.5em"} className={styles.icon} />
            <span>{business.representative}</span>
          </div>
          <div className={styles.availability}>
            <FaClock size={"1.5em"} className={styles.icon} />
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
        <div>
          <h2>Similar Business</h2>
          <div className={styles.similarBusiness}>
            {similarBusiness ? (
              <BusinessSimpleCard
                photoUrl={similarBusiness.photoUrl}
                companyName={similarBusiness.companyName}
                representative={similarBusiness.representative}
                address={similarBusiness.address}
                id={similarBusiness.id}
              />
            ) : (
              <p>No similar business found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
