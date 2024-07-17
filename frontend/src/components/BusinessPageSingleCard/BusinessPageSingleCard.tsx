import styles from "./BusinessPageSingleCard.module.scss";
import { Card } from "../Card/Card";
import { IBusiness } from "src/types/business";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

type ServicePageCardProps = IBusiness;

export const BusinessPageSingleCard = ({
  photoUrl,
  category,
  companyName,
  address,
  email,
}: ServicePageCardProps) => {
  return (
    <Card
      image={`${photoUrl}`}
      category={category}
      title={companyName}
      subtitle={
        <div>
          <div className={styles.info}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>{address}</span>
          </div>
          <div className={styles.info}>
            <FaEnvelope className={styles.icon} />
            <span>{email}</span>
          </div>
        </div>
      }
      description=""
      cardBody={styles.cardBody}
      cardClass={styles.card}
      imgClass={styles.imgStyle}
      categoryClass={styles.category}
      titleClass={styles.title}
      subtitleClass={styles.subtitle}
      descriptionClass={styles.description}
      bottomClass={styles.cardBottom}
    />
  );
};
