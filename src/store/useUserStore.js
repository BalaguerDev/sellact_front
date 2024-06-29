import { create } from "zustand";
import { getUserData } from '../service/userService';

const useUserStore = create((set) => ({
  userData: null,
  isLoading: false,
  error: null,
  fetchUserData: async () => {
    set({ isLoading: true });
    try {
      const userData = await getUserData();
      set({ userData, isLoading: false, error: null });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export { useUserStore };
