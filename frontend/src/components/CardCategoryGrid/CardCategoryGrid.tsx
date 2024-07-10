import { useLocalStorage } from "../../hooks/useLocalStorage";
import { cardProps } from "../../constants/cardData";
import { ServiceCategoryCard } from "../ServiceCategoryCard/ServiceCategoryCard";
import { Grid } from "../Grid/Grid";
import styles from "./CardCategoryGrid.module.scss";

interface CardCategoryGridProps {
  category: string;
}interface CardCategoryGridProps {
  category: string;
}

export const CardCategoryGrid = ({ category }: CardCategoryGridProps) => {
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);

  const toggleFavorite = (cardId: number) => {
    setFavorites((prevFavorites: number[]) => {
      const updatedFavorites = prevFavorites.includes(cardId)
        ? prevFavorites.filter((id: number) => id !== cardId)
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
