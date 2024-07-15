import { create } from "zustand";
import { routes } from "../navigation/routes/routes";
import { ICategory } from "src/types/category";
import { IBusiness } from "src/types/business";
import { toast } from "react-toastify";
import api from "src/api/api";

const USER_STORAGE_KEY = import.meta.env.VITE_USER_STORAGE_KEY;

interface StoreState {
  user: string | null;
  setUser: (user: string) => void;
  logOutUser: (setMenuOpen: (open: boolean) => void, navigate: (path: string) => void) => void;
  initializeUser: () => void;
  categories: ICategory[] | null;
  setCategories: (categories: ICategory[]) => void;
  businesses: IBusiness[] | null;
  setBusinesses: (businesses: IBusiness[]) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
    localStorage.setItem(USER_STORAGE_KEY, user);
  },
  logOutUser: async (setMenuOpen, navigate) => {
    try {
      await api.User.logout();
      navigate(routes.HOME);
      setMenuOpen(false);
      set({ user: null });
      toast.success("Successfully logged out");
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch (error) {
      toast.error("Logout failed");
    }
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
  businesses: null,
  setBusinesses: (businesses) => {
    set({ businesses });
  },
  isLoading: false,
  setLoading: (loading) => {
    set({ isLoading: loading });
  },
}));
