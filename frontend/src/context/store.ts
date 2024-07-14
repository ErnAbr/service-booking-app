import { create } from "zustand";
import { routes } from "../navigation/routes";
import { ICategory } from "src/types/category";
import { IBusiness } from "src/types/business";

const USER_STORAGE_KEY = import.meta.env.VITE_USER_STORAGE_KEY;

interface StoreState {
  user: string | null;
  setUser: (user: string) => void;
  logOutUser: (setMenuOpen: (open: boolean) => void, navigate: (path: string) => void) => void;
  initializeUser: () => void;
  categories: ICategory[] | null;
  setCategories: (categories: ICategory[]) => void;
  isCategoriesLoading: boolean;
  setCategoriesLoading: (loading: boolean) => void;
  businesses: IBusiness[] | null;
  setBusinesses: (businesses: IBusiness[]) => void;
  isBusinessesLoading: boolean;
  setBusinessesLoading: (loading: boolean) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
    localStorage.setItem(USER_STORAGE_KEY, user);
  },
  logOutUser: (setMenuOpen, navigate) => {
    set({ user: null });
    localStorage.removeItem(USER_STORAGE_KEY);
    setMenuOpen(false);
    navigate(routes.HOME);
  },
  initializeUser: () => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      set({ user: storedUser });
    }
  },
  categories: null,
  setCategories: (categories) => {
    set({ categories });
  },
  isCategoriesLoading: false,
  setCategoriesLoading: (loading) => {
    set({ isCategoriesLoading: loading });
  },
  businesses: null,
  setBusinesses: (businesses) => {
    set({ businesses });
  },
  isBusinessesLoading: false,
  setBusinessesLoading: (loading) => {
    set({ isBusinessesLoading: loading });
  },
  isLoading: false,
  setLoading: (loading) => {
    set({ isLoading: loading });
  },
}));
