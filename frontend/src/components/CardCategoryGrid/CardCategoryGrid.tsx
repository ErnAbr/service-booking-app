import { useLocalStorage } from "../../hooks/useLocalStorage";
import { companies } from "../../constants/cardData";
import { ServiceCategoryCard } from "../ServiceCategoryCard/ServiceCategoryCard";
import { Grid } from "../Grid/Grid";
import styles from "./CardCategoryGrid.module.scss";

interface CardCategoryGridProps {
  category: string;
}
interface CardCategoryGridProps {
  category: string;
}

export const CardCategoryGrid = ({ category }: CardCategoryGridProps) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  const toggleFavorite = (cardId: string) => {
    setFavorites((prevFavorites: string[]) => {
      const updatedFavorites = prevFavorites.includes(cardId)
        ? prevFavorites.filter((id: string) => id !== cardId)
        : [...prevFavorites, cardId];
      return updatedFavorites;
    });
  };

  const filteredItems = category
    ? companies.filter((props) => props.category.toLowerCase() === category.toLowerCase())
    : companies;

  return (
    <Grid
      heading="Popular Businesses"
      gridContainerClass={styles.container}
      headingClass={styles.heading}
      gridClass={styles.grid}
    >
      {filteredItems.map((props) => (
        <ServiceCategoryCard
          key={props.id}
          isFavorite={favorites.includes(props.id)}
          toggleFavorite={() => toggleFavorite(props.id)}
          {...props}
        />
      ))}
    </Grid>
  );
};
