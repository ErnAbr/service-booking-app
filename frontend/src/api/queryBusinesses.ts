import api from "./api";
import { useQuery } from "@tanstack/react-query";
import { BUSINESS_QUERY_KEY } from "./queryKeys";
import { IBusiness } from "src/types/business";

const fetchBusinesses = async (): Promise<IBusiness[]> => {
  const response = await api.Businesses.getBusinesses();

  return response;
};

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_QUERY_KEY],
    queryFn: fetchBusinesses,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
