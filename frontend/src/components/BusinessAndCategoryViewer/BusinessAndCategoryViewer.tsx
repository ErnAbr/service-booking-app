import { Categories } from "../Categories/Categories";
import { GridBusinessCard } from "../GridBusinessCard/GridBusinessCard";
import Pagination from "@mui/material/Pagination";
import styles from "./BusinessAndCategoryViewer.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { BUSINESS_QUERY_KEY } from "src/api/queryKeys";
import { IBusiness } from "src/types/business";
import { useQueryClient } from "@tanstack/react-query";

interface SearchCategoryProps {
  category: string;
}

export const BusinessAndCategoryViewer = ({ category }: SearchCategoryProps) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = parseInt(import.meta.env.VITE_ITEMS_PER_PAGE);
  const queryClient = useQueryClient();
  const businesses = queryClient.getQueryData<IBusiness[]>([BUSINESS_QUERY_KEY]);

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [category]);

  const filteredItems = category
    ? businesses?.filter((props) => props.category.toLowerCase() === category.toLowerCase())
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
