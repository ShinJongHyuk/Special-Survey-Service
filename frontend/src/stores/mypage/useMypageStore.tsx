import { create } from "zustand";
import { MypageType } from "./mypageStore.type";

export const useMypageStore = create<MypageType>((set) => ({
  selectbtn: "1",
  setselectbtn: (button) => set({ selectbtn: button }),
}));
