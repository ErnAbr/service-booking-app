import axios, { AxiosResponse } from "axios";
import { IBusiness } from "src/types/business";
import { ICategory } from "src/types/category";
import { IUser } from "src/types/user";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const handleError = (error: any) => {
  console.error("API call failed. ", error);
  throw error;
};

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody).catch(handleError),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody).catch(handleError),
};

const Categories = {
  getCategories: () => requests.get<ICategory[]>("categories"),
};

const Businesses = {
  getCompanies: () => requests.get<IBusiness[]>("businesses"),
};

const User = {
  login: (body: { email: string; password: string }) => requests.post<IUser>("auth/login", body),
  register: (body: { userName: string; email: string; password: string }) =>
    requests.post<IUser>("auth/register", body),
};

const api = {
  Categories,
  Businesses,
  User,
};

export default api;
