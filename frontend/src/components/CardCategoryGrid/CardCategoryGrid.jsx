import PropTypes from "prop-types";
import useLocalStorage from "../../hooks/useLocalStorage";
import { cardProps } from "../../constants/cardData";
import { ServiceCategoryCard } from "../ServiceCategoryCard/ServiceCategoryCard";
import { Grid } from "../Grid/Grid";
import styles from "./CardCategoryGrid.module.scss";

export const CardCategoryGrid = ({ category }) => {
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
    <Grid
      heading="Popular Businesses"
      gridContainerClass={styles.container}
      headingClass={styles.heading}
      gridClass={styles.grid}
    >
      {filteredItems.map((props) => (
        <ServiceCategoryCard
          key={props.cardId}
          isFavorite={favorites.includes(props.cardId)}
          toggleFavorite={() => toggleFavorite(props.cardId)}
          {...props}
        />
      ))}
    </Grid>
  );
};

CardCategoryGrid.propTypes = {
  category: PropTypes.string.isRequired,
  cardId: PropTypes.number,
  serviceCategory: PropTypes.string,
};
