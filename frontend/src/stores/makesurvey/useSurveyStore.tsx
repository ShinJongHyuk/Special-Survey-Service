import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface SurveyStore {
  surveyComponents: any[];
  setSurveyComponents: (components: any) => void;
  resetSurveyComponents: () => void;
}

const useSurveyStore = create<SurveyStore>()(
  persist(
    (set) => ({
      surveyComponents: [],
      setSurveyComponents: (components) => set({ surveyComponents: components }),
      resetSurveyComponents: () => set({ surveyComponents: [] }),
    }),
    {
      name: "surveyStore",
      // getStorage: () => localStorage,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSurveyStore;
