import styles from "./Search.module.scss";
import { Button } from "../Button/Button";
import { HiSearch } from "react-icons/hi";
import { IconContext } from "react-icons";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

interface SearchProps {
  searchText: string;
  searchCount: number | null;
  setSearchText: (text: string) => void;
}

export const Search = ({ searchText, setSearchText, searchCount }: SearchProps) => {
  const [isSearchButtonActive, setIsSearchButtonActive] = useState<boolean>(true);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onClick = () => {
    toast.success(`Found ${searchCount} businesses`);
    setIsSearchButtonActive(false);
    setTimeout(() => {
      setIsSearchButtonActive(true);
    }, 5000);
  };

  return (
    <div className={styles.greetingText}>
      <h1>
        Find Home <span className={styles.serviceRepair}>Service/Repair</span>
        <div className={styles.nearYou}>Near You</div>
      </h1>
      <p>Explore Best Home Services & Repair near you</p>
      <div className={styles.searchInput}>
        <input
          className={styles.input}
          id="searchText"
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <Button variant="search" onClick={onClick} disabled={!isSearchButtonActive}>
          <IconContext.Provider value={{ color: "white", size: "0.5em" }}>
            <HiSearch />
          </IconContext.Provider>
        </Button>
      </div>
    </div>
  );
};
