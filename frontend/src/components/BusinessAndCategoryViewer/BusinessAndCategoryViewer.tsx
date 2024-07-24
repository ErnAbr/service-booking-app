import { Categories } from "../Categories/Categories";
import { GridBusinessCard } from "../GridBusinessCard/GridBusinessCard";
import Pagination from "@mui/material/Pagination";
import styles from "./BusinessAndCategoryViewer.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { constants } from "@/constants";
import { IBusiness } from "@/types/business";

interface SearchCategoryProps {
  searchCategoryFilter: string;
  businesses: IBusiness[];
}

export const BusinessAndCategoryViewer = ({
  searchCategoryFilter,
  businesses,
}: SearchCategoryProps) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = parseInt(constants.ITEMS_PER_PAGE) || 8;

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [searchCategoryFilter]);

  const filteredItems = searchCategoryFilter
    ? businesses?.filter(
        (props) => props.category.toLowerCase() === searchCategoryFilter.toLowerCase(),
      )
    : businesses;

  const pageCount = Math.ceil((filteredItems?.length || 1) / itemsPerPage);

  return (
    <div className={styles.searchCategoryContainer}>
      <div className={styles.categoryContainer}>
        <Categories iconSize="2em" />
      </div>
      <div>
        <GridBusinessCard filteredItems={filteredItems} page={page} itemsPerPage={itemsPerPage} />
        <div className={styles.paginationContainer}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};
