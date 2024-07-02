import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import styles from "./Card.module.scss";
import { FaHeart } from "react-icons/fa";

export const Card = ({
  image,
  serviceCategory,
  serviceType,
  servicePersonName,
  serviceAddress,
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.imgStyle} src={image} alt="card-image" />
      <div className={styles.cardBody}>
        <div>
          <div className={styles.serviceCategory}>{serviceCategory}</div>
        </div>
        <h4>{serviceType}</h4>
        <div>
          <div className={styles.servicePersonName}>{servicePersonName}</div>
          <p>{serviceAddress}</p>
        </div>
        <div className={styles.cardBottom}>
          <Button buttonType="primary">Book Now</Button>
          <div onClick={toggleFavorite}>
            <FaHeart size="2em" className={isFavorite ? styles.favCard : styles.heartIcon} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  serviceCategory: PropTypes.string.isRequired,
  serviceType: PropTypes.string.isRequired,
  servicePersonName: PropTypes.string.isRequired,
  serviceAddress: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};
