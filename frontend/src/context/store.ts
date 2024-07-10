import { create } from "zustand";
import { routes } from "../navigation/routes";
import { USER_STORAGE_KEY } from "../constants/constants";

interface StoreState {
  user: string | null;
  setUser: (user: string) => void;
  logOutUser: (setMenuOpen: (open: boolean) => void, navigate: (path: string) => void) => void;
  initializeUser: () => void;
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
}));
