import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
    localStorage.setItem("user", user);
  },
  logOutUser: () => {
    set({ user: null });
    localStorage.removeItem("user");
  },
  initializeUser: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      set({ user: storedUser });
    }
  },
}));
