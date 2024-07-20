import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useStore } from "src/context/store";
import { IBooking, IBookingResponse } from "src/types/booking";
import { IBusiness } from "src/types/business";
import { ICategory } from "src/types/category";
import {
  IUserLogin,
  IUserLoginResponse,
  IUserRegister,
  IUserRegisterResponse,
  IUserUpdate,
} from "src/types/user";

interface CustomAxiosError extends AxiosError {
  handled?: boolean;
}

interface ErrorResponse {
  message: string;
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => response,
  (error: CustomAxiosError) => {
    if (error.response?.status === 401) {
      const errorMessage =
        (error.response?.data as ErrorResponse).message || "Session expired. Please log in again.";
      const store = useStore.getState();
      store.sessionLogOutUser();
      toast.error(errorMessage);
      error.handled = true;
    }
    return Promise.reject(error);
  },
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object) => axios.put<T>(url, body).then(responseBody),
};

const Categories = {
  getCategories: () => requests.get<ICategory[]>("categories"),
};

const Businesses = {
  getBusinesses: () => requests.get<IBusiness[]>("businesses"),
  getBusinessById: (id: string) => requests.get<IBusiness>(`businesses/${id}`),
  getBusinessBookingsByDate: (id: string, date: string) =>
    requests.get<string[]>(`businesses/${id}/bookings/date/${date}`),
};

const User = {
  login: (body: IUserLogin) => requests.post<IUserLoginResponse>("auth/login", body),
  register: (body: IUserRegister) => requests.post<IUserRegisterResponse>("auth/register", body),
  update: (body: IUserUpdate) => requests.put<IUserLoginResponse>("auth/update", body),
  logout: () => requests.post("auth/logout", {}),
};

const Bookings = {
  makeBooking: (body: IBooking) => requests.post<IBookingResponse>("bookings", body),
};

const api = {
  Categories,
  Businesses,
  User,
  Bookings,
};

export default api;
