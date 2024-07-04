import { Search } from "../components/Search/Search";
import { SearchCategory } from "../components/SearchCategory/SearchCategory";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  return (
    <>
      <Search />
      <SearchCategory category={category} />
    </>
  );
};
