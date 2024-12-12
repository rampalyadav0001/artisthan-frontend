import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserStore = {
  hasFinishedOnboarding: boolean;
  isLoggedIn: boolean;
  toggleHadOnboarding: () => void;
  productId:number;
  setProductId:(id:number)=>void; 
  login: () => void;
  logout: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasFinishedOnboarding: false,
      isLoggedIn: false,
      userRegion: "",
      userReligion: "",

      toggleHadOnboarding: () =>
        set((state) => ({
          ...state,
          hasFinishedOnboarding: !state.hasFinishedOnboarding,
        })),


      login: () => set((state) => ({ ...state, isLoggedIn: true })),

      logout: () => set((state) => ({ ...state, isLoggedIn: false })),
      productId:0,
      setProductId:(id:number)=>set((state)=>({...state,productId:id})),
    }),
    {
      name: "artisthan-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
