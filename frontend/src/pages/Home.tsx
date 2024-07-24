import { Search } from "../components/Search/Search";
import { BusinessAndCategoryViewer } from "../components/BusinessAndCategoryViewer/BusinessAndCategoryViewer";
import { useLocation } from "react-router-dom";
import { useBusinesses } from "@/api/queryBusinesses";

export const Home = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchCategoryFilter = params.get("category") || "";

  const { data: businesses = [], isLoading: loadingBusinesses } = useBusinesses();

  if (loadingBusinesses) return <div>Loading Businesses...</div>;

  return (
    <>
      <Search />
      <BusinessAndCategoryViewer
        businesses={businesses}
        searchCategoryFilter={searchCategoryFilter}
      />
    </>
  );
};
