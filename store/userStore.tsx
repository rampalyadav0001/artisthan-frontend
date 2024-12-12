import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserStore = {
  hasFinishedOnboarding: boolean;
  isLoggedIn: boolean;
  userRegion: string;
  userReligion: string;
  productId: number;
  setProductId: (id: number) => void;
  setUserRegion: (region: string) => void;
  setUserReligion: (religion: string) => void;
  toggleHadOnboarding: () => void;
  login: () => void;
  logout: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasFinishedOnboarding: false,
      isLoggedIn: false,
      userRegion: 'north',
      userReligion: 'hindu',

      toggleHadOnboarding: () =>
        set((state) => ({
          ...state,
          hasFinishedOnboarding: !state.hasFinishedOnboarding,
        })),

      login: () => set((state) => ({ ...state, isLoggedIn: true })),

      logout: () => set((state) => ({ ...state, isLoggedIn: false })),

      setUserRegion: (region) =>
        set((state) => ({
          ...state,
          userRegion: region,
        })),

      setUserReligion: (religion) =>
        set((state) => ({
          ...state,
          userReligion: religion,
        })),
      productId: 0,
      setProductId: (id) => set({ productId: id }),
    }),
    {
      name: 'user-store', // Name of the persisted storage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
