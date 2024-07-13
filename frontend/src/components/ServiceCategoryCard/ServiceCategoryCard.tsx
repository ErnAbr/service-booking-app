import styles from "./ServiceCategoryCard.module.scss";
import { FaHeart } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

interface ServiceCategoryCardProps {
  photoUrl: string;
  category: string;
  companyName: string;
  representative: string;
  address: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

export const ServiceCategoryCard = ({
  photoUrl,
  category,
  companyName,
  representative,
  address,
  isFavorite,
  toggleFavorite,
}: ServiceCategoryCardProps) => {
  return (
    <Card
      image={`${photoUrl}`}
      category={category}
      title={companyName}
      subtitle={representative}
      description={address}
      cardBody={styles.cardBody}
      cardClass={styles.card}
      imgClass={styles.imgStyle}
      categoryClass={styles.category}
      titleClass={styles.title}
      subtitleClass={styles.subtitle}
      descriptionClass={styles.description}
      bottomClass={styles.cardBottom}
    >
      <Button variant="primary">Book Now</Button>
      <div onClick={toggleFavorite}>
        <FaHeart size="2em" className={isFavorite ? styles.favCard : styles.heartIcon} />
      </div>
    </Card>
  );
};
