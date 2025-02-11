import { create } from "zustand";
import { routes } from "../navigation/routes/routes";
import { toast } from "react-toastify";
import { api } from "@/api/api";
import { IUser } from "@/types/user";
import { constants } from "@/constants";

const USER_STORAGE_KEY = constants.USER_STORAGE_KEY;

interface StoreState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  logOutUser: (setMenuOpen: (open: boolean) => void, navigate: (path: string) => void) => void;
  initializeUser: () => Promise<void>;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  invalidTokenLogout: () => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  },
  logOutUser: async (setMenuOpen, navigate) => {
    try {
      navigate(routes.HOME);
      setMenuOpen(false);
      set({ user: null });
      localStorage.removeItem(USER_STORAGE_KEY);
      await api.User.logout();
      toast.success("Successfully logged out");
    } catch {
      toast.error("Logout failed");
    }
  },
  invalidTokenLogout: () => {
    set({ user: null });
    localStorage.removeItem(USER_STORAGE_KEY);
    window.location.replace(routes.LOGIN);
  },
  initializeUser: async () => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      set({ user: JSON.parse(storedUser) });
    }
  },
  isLoading: true,
  setLoading: (loading) => {
    set({ isLoading: loading });
  },
}));
