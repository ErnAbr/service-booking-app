import { Search } from "../components/Search/Search";
import { BusinessAndCategoryViewer } from "../components/BusinessAndCategoryViewer/BusinessAndCategoryViewer";
import { useLocation } from "react-router-dom";
import { useBusinesses } from "@/api/queryBusinesses";
import { useState } from "react";

export const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchCount, setSearchCount] = useState<number | null>(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchCategoryFilter = params.get("category") || "";

  const { data: businesses, isLoading: loadingBusinesses } = useBusinesses();

  if (loadingBusinesses) return <div>Loading Businesses...</div>;

  return (
    <>
      <Search searchText={searchText} setSearchText={setSearchText} searchCount={searchCount} />
      <BusinessAndCategoryViewer
        searchText={searchText}
        setSearchCount={setSearchCount}
        businesses={businesses!}
        searchCategoryFilter={searchCategoryFilter}
      />
    </>
  );
};
