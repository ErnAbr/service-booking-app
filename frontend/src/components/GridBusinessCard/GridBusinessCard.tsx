import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CardBusiness } from "../CardBusiness/CardBusiness";
import { Grid } from "../Grid/Grid";
import styles from "./GridBusinessCard.module.scss";
import { IBusiness } from "@/types/business";

interface CardCategoryGridProps {
  filteredItems: IBusiness[] | undefined;
  page: number;
  itemsPerPage: number;
}

export const GridBusinessCard = ({ filteredItems, page, itemsPerPage }: CardCategoryGridProps) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  const toggleFavorite = (cardId: string) => {
    setFavorites((prevFavorites: string[]) => {
      const updatedFavorites = prevFavorites.includes(cardId)
        ? prevFavorites.filter((id: string) => id !== cardId)
        : [...prevFavorites, cardId];
      return updatedFavorites;
    });
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems?.slice(startIndex, endIndex) || [];

  return (
    <Grid
      heading="Popular Businesses"
      gridContainerClass={styles.container}
      headingClass={styles.heading}
      gridClass={styles.grid}
    >
      {paginatedItems.length > 0 ? (
        paginatedItems.map((props) => (
          <CardBusiness
            key={props.id}
            isFavorite={favorites.includes(props.id)}
            toggleFavorite={() => toggleFavorite(props.id)}
            {...props}
          />
        ))
      ) : (
        <div>No businesses to display</div>
      )}
    </Grid>
  );
};
