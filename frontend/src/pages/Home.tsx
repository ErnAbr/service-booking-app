import { Search } from "../components/Search/Search";
import { BusinessCategoryViewer } from "../components/BusinessCategoryViewer/BusinessCategoryViewer";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "";

  return (
    <>
      <Search />
      <BusinessCategoryViewer category={category} />
    </>
  );
};
