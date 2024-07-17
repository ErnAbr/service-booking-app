import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import styles from "./BusinessPageSimpleCard.module.scss";

interface BusinessSimpleCardProps {
  id: string;
  photoUrl: string;
  companyName: string;
  representative: string;
  address: string;
}

export const BusinessPageSimpleCard = ({
  photoUrl,
  companyName,
  representative,
  address,
  id,
}: BusinessSimpleCardProps) => {
  return (
    <Link to={`/businesses/${id}`} className={styles.link}>
      <Card
        image={photoUrl}
        category={companyName}
        title={representative}
        subtitle={address}
        description=""
        cardClass={styles.card}
        imgClass={styles.img}
        categoryClass={styles.category}
        titleClass={styles.title}
        subtitleClass={styles.subtitle}
        descriptionClass={styles.description}
        bottomClass={styles.bottom}
      />
    </Link>
  );
};
