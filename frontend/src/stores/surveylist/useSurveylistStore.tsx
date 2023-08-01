import { create } from "zustand";
import { SurveylistType } from "./surveylistStore.type";

export const useSurveylistStore = create<SurveylistType>((set) => ({
  selectBtn: "1",
  setSelectBtn: (button) => set({ selectBtn: button }),
}));
