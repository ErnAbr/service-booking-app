import { toast } from "react-toastify";
import { ApiError } from "../types/error";

export const handleApiError = (error: ApiError) => {
  const errorMessage = error.response?.data?.message || "An unexpected error occurred";
  toast.error(errorMessage);
};
