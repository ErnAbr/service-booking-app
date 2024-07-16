import axios, { AxiosResponse } from "axios";
import { IBusiness } from "src/types/business";
import { ICategory } from "src/types/category";
import {
  IUser,
  IUserLogin,
  IUserLoginResponse,
  IUserRegister,
  IUserRegisterResponse,
  IUserUpdate,
} from "src/types/user";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

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
};

const User = {
  login: (body: IUserLogin) => requests.post<IUserLoginResponse>("auth/login", body),
  register: (body: IUserRegister) => requests.post<IUserRegisterResponse>("auth/register", body),
  update: (body: IUserUpdate) => requests.put<IUserLoginResponse>("auth/update", body),
  logout: () => requests.post("auth/logout", {}),
};

const api = {
  Categories,
  Businesses,
  User,
};

export default api;
