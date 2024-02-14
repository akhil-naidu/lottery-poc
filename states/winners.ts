import { create } from "zustand";

export const useWinners = create((set) => ({
  winners: [],
  addToWinners: (winner: any) => {
    set((state: { winners: any }) => {
      return { winners: [...state.winners, winner] };
    });
  },
}));
