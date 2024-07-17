import { useLocalStorage } from "../../hooks/useLocalStorage";
import { BusinessCard } from "../BusinessCard/BusinessCard";
import { Grid } from "../Grid/Grid";
import styles from "./BusinessCardGrid.module.scss";
import { useBusinesses } from "src/api/queryBusinesses";

interface CardCategoryGridProps {
  category: string;
}

export const BusinessCardGrid = ({ category }: CardCategoryGridProps) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);
  const { data: businesses } = useBusinesses();

  const toggleFavorite = (cardId: string) => {
    setFavorites((prevFavorites: string[]) => {
      const updatedFavorites = prevFavorites.includes(cardId)
        ? prevFavorites.filter((id: string) => id !== cardId)
        : [...prevFavorites, cardId];
      return updatedFavorites;
    });
  };

  const filteredItems = category
    ? businesses?.filter((props) => props.category.toLowerCase() === category.toLowerCase())
    : businesses;

  return (
    <Grid
      heading="Popular Businesses"
      gridContainerClass={styles.container}
      headingClass={styles.heading}
      gridClass={styles.grid}
    >
      {filteredItems?.map((props) => (
        <BusinessCard
          key={props.id}
          isFavorite={favorites.includes(props.id)}
          toggleFavorite={() => toggleFavorite(props.id)}
          {...props}
        />
      ))}
    </Grid>
  );
};
