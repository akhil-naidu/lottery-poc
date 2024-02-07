import { create } from "zustand";

export const useTokens = create((set) => ({
  tokens: [],

  addToToken: (tokens) => {
    set((state) => {
      tokens: [...state.tokens, tokens];
    });
  },

  manoj: "hello",
}));
