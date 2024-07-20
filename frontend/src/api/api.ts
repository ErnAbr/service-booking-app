import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useStore } from "src/context/store";
import { routes } from "src/navigation/routes/routes";
import { IBooking, BookingResponse } from "src/types/booking";
import { IBusiness } from "src/types/business";
import { ICategory } from "src/types/category";
import {
  IUserLogin,
  UserLoginResponse,
  IUserRegister,
  UserRegisterResponse,
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
      const errorMessage = (error.response?.data as ErrorResponse).message;
      const store = useStore.getState();
      store.invalidTokenLogout();
      toast.error(errorMessage);
      error.handled = true;
    }
    if (error.response?.status === 403) {
      const errorMessage = (error.response?.data as ErrorResponse).message;
      window.location.replace(routes.HOME);
      toast.error(errorMessage);
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
  login: (body: IUserLogin) => requests.post<UserLoginResponse>("auth/login", body),
  register: (body: IUserRegister) => requests.post<UserRegisterResponse>("auth/register", body),
  update: (body: IUserUpdate) => requests.put<UserLoginResponse>("auth/update", body),
  logout: () => requests.post("auth/logout", {}),
};

const Bookings = {
  makeBooking: (body: IBooking) => requests.post<BookingResponse>("bookings", body),
  getUserBookings: (email: string) => requests.get<IBooking[]>(`bookings/user/${email}`),
};

const api = {
  Categories,
  Businesses,
  User,
  Bookings,
};

export default api;
