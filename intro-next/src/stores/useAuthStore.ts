import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthStore {
  username: string;
  email: string;
  token: string; 
  setAuth: (username: string, email: string, token: string) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      username: '',
      email: '',
      token: '', 

      setAuth: (username, email, token) =>
        set({
          username,
          email,
          token
        }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({token: state?.token})
    },
  ),
);
