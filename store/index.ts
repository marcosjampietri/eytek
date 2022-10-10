import { Router } from "next/router";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface AppState {
  // NextJS router
  router: Router | null;
  setRouter: (router: any) => void;

  // Add any types for app-wide state here
  // e.g. game start logic, points/score, etc
  // gameStarted: boolean;
  // points: number;
  NavOn: boolean;
  setNavOn: any;
  Page: number;
  setPage: any;
  Loading: boolean;
  setLoading: any;
}

export const useStore = create<AppState>()(
  devtools(
    // Optional persist
    // This saves Zustand state when you close browser
    // Good in some cases, but not in others, especially prototyping
    // persist(

    (set) => ({
      // We keep the NextJS router in state because it's undefined in most components
      router: null,
      setRouter: (router) =>
        set((state) => ({
          ...state,
          router,
        })),

      // Add any default values for app-wide state here
      // e.g. game start logic, points/score, etc
      // gameStarted: true,
      // points: 100,
      NavOn: false,
      setNavOn: (On: any) => set(() => ({NavOn: On})),
      Page: 1,
      setPage: (Pg: number) => set(() => ({Page: Pg})),
      Loading: true,
      setLoading: (Ldn: boolean) => set(() => ({Loading: Ldn})),
      
    })

    // END: Optional persist
    // )
  )
);

export default useStore;
