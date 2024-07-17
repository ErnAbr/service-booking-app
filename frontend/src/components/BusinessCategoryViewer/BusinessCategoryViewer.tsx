import { Categories } from "../Categories/Categories";
import { BusinessCardGrid } from "../BusinessCardGrid/BusinessCardGrid";
import Pagination from "@mui/material/Pagination";
import styles from "./BusinessCategoryViewer.module.scss";

interface SearchCategoryProps {
  category: string;
}

export const BusinessCategoryViewer = ({ category }: SearchCategoryProps) => {
  return (
    <div className={styles.searchCategoryContainer}>
      <div className={styles.categoryContainer}>
        <Categories iconSize="2em" />
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
