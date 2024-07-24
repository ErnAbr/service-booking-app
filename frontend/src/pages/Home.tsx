import { Search } from "../components/Search/Search";
import { BusinessAndCategoryViewer } from "../components/BusinessAndCategoryViewer/BusinessAndCategoryViewer";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchCategoryFilter = params.get("category") || "";

  return (
    <>
      <Search />
      <BusinessAndCategoryViewer searchCategoryFilter={searchCategoryFilter} />
    </>
  );
};
