import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserStore = {
  hasFinishedOnboarding: boolean;
  isLoggedIn: boolean;
  productId: number;
  setProductId: (id: number) => void;
  toggleHadOnboarding: () => void;
  login: () => void;
  logout: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasFinishedOnboarding: false,
      isLoggedIn: false,
      toggleHadOnboarding: () =>
        set((state) => ({
          ...state,
          hasFinishedOnboarding: !state.hasFinishedOnboarding,
        })),
      login: () => set((state) => ({ ...state, isLoggedIn: true })),
      logout: () => set((state) => ({ ...state, isLoggedIn: false })),
      productId: 0,
      setProductId: (id) => set((state) => ({ ...state, productId: id })),
    }),
    {
      name: 'artisthan-user-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
