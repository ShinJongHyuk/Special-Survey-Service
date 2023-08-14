import { create } from "zustand";
import { SurveylistType } from "./surveylistStore.type";

export const useSurveylistStore = create<SurveylistType>((set) => ({
  selectbtn: "1",
  setselectbtn: (button) => set({ selectbtn: button }),
}));
