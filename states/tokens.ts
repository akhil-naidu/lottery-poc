import { create } from "zustand";

export const useTokens = create((set) => ({
  tokens: [],
  addToToken: (token: any) => {
    set((state: { tokens: any }) => {
      return { tokens: [...state.tokens, token] };
    });
  },
}));
