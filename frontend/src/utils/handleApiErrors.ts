import { toast } from "react-toastify";
import { ApiError } from "../types/error";

export const handleApiError = (error: ApiError) => {
  if (error.handled) return; 

  const errorMessage = error.response?.data?.message || "An unexpected error occurred";
  toast.error(errorMessage);
};
