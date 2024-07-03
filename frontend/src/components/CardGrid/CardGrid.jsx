import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import { cardProps } from "../../constants/cardData";
import styles from "./CardGrid.module.scss";
import useLocalStorage from "../../hooks/useLocalStorage";

export const CardGrid = ({ category }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const toggleFavorite = (cardId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(cardId)
        ? prevFavorites.filter((id) => id !== cardId)
        : [...prevFavorites, cardId];
      return updatedFavorites;
    });
  };

  const filteredItems = category
    ? cardProps.filter((props) => props.serviceCategory.toLowerCase() === category.toLowerCase())
    : cardProps;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Popular Business</h3>
      <div className={styles.grid}>
        {filteredItems.map((props) => (
          <Card
            key={props.cardId}
            isFavorite={favorites.includes(props.cardId)}
            toggleFavorite={() => toggleFavorite(props.cardId)}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

CardGrid.propTypes = {
  category: PropTypes.string,
  cardId: PropTypes.number,
  image: PropTypes.string,
  serviceCategory: PropTypes.string,
  serviceType: PropTypes.string,
  servicePersonName: PropTypes.string,
  serviceAddress: PropTypes.string,
};
