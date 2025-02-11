import { constants } from "@/constants";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useStore } from "@/context/store";
import { routes } from "@/navigation/routes/routes";
import { IBooking, BookingResponse } from "@/types/booking";
import { IBusiness } from "@/types/business";
import { ICategory } from "@/types/category";
import {
  IUserLogin,
  UserLoginResponse,
  IUserRegister,
  UserRegisterResponse,
  IUserUpdate,
} from "@/types/user";

interface CustomAxiosError extends AxiosError {
  handled?: boolean;
}

interface ErrorResponse {
  message: string;
}

axios.defaults.baseURL = constants.API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => response,
  (error: CustomAxiosError) => {
    if (error.response) {
      const store = useStore.getState();
      const errorMessage = (error.response.data as ErrorResponse).message;

      switch (error.response.status) {
        case 401:
          store.invalidTokenLogout();
          toast.error(errorMessage);
          error.handled = true;
          break;
        case 403:
          window.location.replace(routes.HOME);
          toast.error(errorMessage);
          break;
      }
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

export const api = {
  Categories,
  Businesses,
  User,
  Bookings,
};
