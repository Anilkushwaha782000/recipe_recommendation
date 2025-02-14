import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  
  login: (userdata, token) => set({ user: userdata, token }),
  
  logout: () => set({ user: null, token: null }) 
}));

export default useAuthStore;
