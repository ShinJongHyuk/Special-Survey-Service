import { create } from "zustand";
import { MypageType } from "./mypageStore.type";

export const useMypageStore = create<MypageType>((set) => ({
  selectBtn: "1",
  setSelectBtn: (button) => set({ selectBtn: button }),
}));
