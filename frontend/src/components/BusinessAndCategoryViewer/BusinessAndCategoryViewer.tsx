import { Categories } from "../Categories/Categories";
import { GridBusinessCard } from "../GridBusinessCard/GridBusinessCard";
import Pagination from "@mui/material/Pagination";
import styles from "./BusinessAndCategoryViewer.module.scss";

interface SearchCategoryProps {
  category: string;
}

export const BusinessAndCategoryViewer = ({ category }: SearchCategoryProps) => {
  return (
    <div className={styles.searchCategoryContainer}>
      <div className={styles.categoryContainer}>
        <Categories iconSize="2em" />
      </div>
      <div>
        <GridBusinessCard category={category} />
        <div className={styles.paginationContainer}>
          <Pagination count={3} variant="outlined" shape="rounded" size="large" />
        </div>
      </div>
    </div>
  );
};
