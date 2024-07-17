import { Category } from "../Category/Category";
import { BusinessCardGrid } from "../BusinessCardGrid/BusinessCardGrid";
import Pagination from "@mui/material/Pagination";
import styles from "./SearchCategory.module.scss";

interface SearchCategoryProps {
  category: string;
}

export const SearchCategory = ({ category }: SearchCategoryProps) => {
  return (
    <div className={styles.searchCategoryContainer}>
      <div className={styles.categoryContainer}>
        <Category iconSize="2em" />
      </div>
      <div>
        <BusinessCardGrid category={category} />
        <div className={styles.paginationContainer}>
          <Pagination count={3} variant="outlined" shape="rounded" size="large" />
        </div>
      </div>
    </div>
  );
};
