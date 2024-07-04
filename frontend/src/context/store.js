import { create } from "zustand";
import { routes } from "../navigation/routes";
import { USER_STORAGE_KEY } from "../constants/constants";

export const useStore = create((set) => ({
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
