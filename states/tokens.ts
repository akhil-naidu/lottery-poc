import { create } from "zustand";

export const useTokens = create((set) => ({
  tokens: [],

  addToToken: (tokens: any) => {
    set((state: { tokens: any }) => {
      return { tokens: [...state.tokens, tokens] };
    });
  },
}));
