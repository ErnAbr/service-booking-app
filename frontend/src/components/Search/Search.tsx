import styles from "./Search.module.scss";
import { Button } from "../Button/Button";
import { HiSearch } from "react-icons/hi";
import { IconContext } from "react-icons";
import { ChangeEvent, useState } from "react";

export const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onClick = () => {
    console.log(searchText);
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
        <Button variant="search" onClick={onClick}>
          <IconContext.Provider value={{ color: "white", size: "0.5em" }}>
            <HiSearch />
          </IconContext.Provider>
        </Button>
      </div>
    </div>
  );
};
