import { create } from "zustand";

interface FilterState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useProductFilter = create<FilterState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
