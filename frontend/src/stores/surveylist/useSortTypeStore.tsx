import { create } from "zustand";
import { SortType } from "./sortTypeStore.type";

export const useSortTypeStore = create<SortType>((set) => ({
    sortType: 'recommend',
    setSortType: (newType) => set({ sortType: newType }),
}));
