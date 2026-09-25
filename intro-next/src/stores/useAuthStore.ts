import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthStore {
  username: string;
  email: string;
  setAuth: (username: string, email: string) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      username: '',
      email: '',

      setAuth: (username, email) =>
        set({
          username,
          email,
        }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
