import { create } from "zustand";
import { routes } from "../navigation/routes/routes";
import { toast } from "react-toastify";
import api from "src/api/api";

const USER_STORAGE_KEY = import.meta.env.VITE_USER_STORAGE_KEY;

interface StoreState {
  user: string | null;
  setUser: (user: string) => void;
  logOutUser: (setMenuOpen: (open: boolean) => void, navigate: (path: string) => void) => void;
  initializeUser: () => Promise<void>;
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
      navigate(routes.HOME);
      setMenuOpen(false);
      set({ user: null });
      await api.User.logout();
      toast.success("Successfully logged out");
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch {
      toast.error("Logout failed");
    }
  },
  initializeUser: async () => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      set({ user: storedUser });
    }
  },
  isLoading: true,
  setLoading: (loading) => {
    set({ isLoading: loading });
  },
}));
