import { ICategory } from "src/types/category";
import { api } from "./api";
import { useQuery } from "@tanstack/react-query";
import { CATEGORY_QUERY_KEY } from "./queryKeys";

const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await api.Categories.getCategories();

  return response;
};

export const useCategories = () => {
  return useQuery({
    queryKey: [CATEGORY_QUERY_KEY],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
