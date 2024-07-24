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
  searchText: string;
  setSearchCount: (searchCount: number) => void;
}

export const BusinessAndCategoryViewer = ({
  searchCategoryFilter,
  businesses,
  searchText,
  setSearchCount,
}: SearchCategoryProps) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = parseInt(constants.ITEMS_PER_PAGE);

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [searchCategoryFilter]);

  const filteredItems = businesses?.filter((props) => {
    const text = searchText.toLowerCase();

    const matchesSearchText =
      props.address.toLowerCase().includes(text) ||
      props.category.toLowerCase().includes(text) ||
      props.companyName.toLowerCase().includes(text) ||
      props.email.toLowerCase().includes(text) ||
      props.representative.toLowerCase().includes(text);

    const matchesCategory =
      !searchCategoryFilter || props.category.toLowerCase() === searchCategoryFilter.toLowerCase();

    return matchesSearchText && matchesCategory;
  });

  useEffect(() => {
    setSearchCount(filteredItems.length);
  }, [filteredItems, setSearchCount]);

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
