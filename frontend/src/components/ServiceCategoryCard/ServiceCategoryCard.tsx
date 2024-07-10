import styles from "./ServiceCategoryCard.module.scss";
import { FaHeart } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

interface ServiceCategoryCardProps {
  image: string;
  serviceCategory: string;
  serviceType: string;
  servicePersonName: string;
  serviceAddress: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

export const ServiceCategoryCard = ({
  image,
  serviceCategory,
  serviceType,
  servicePersonName,
  serviceAddress,
  isFavorite,
  toggleFavorite,
}: ServiceCategoryCardProps) => {
  return (
    <Card
      image={image}
      category={serviceCategory}
      title={serviceType}
      subtitle={servicePersonName}
      description={serviceAddress}
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
