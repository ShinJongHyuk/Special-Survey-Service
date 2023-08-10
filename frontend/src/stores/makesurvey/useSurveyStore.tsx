import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface SurveyStore {
  surveyComponents: any[];
  setSurveyComponents: (components: any) => void;
}

const useSurveyStore = create<SurveyStore>()(
  persist(
    (set) => ({
      surveyComponents: [], 
      setSurveyComponents: (components) => set({ surveyComponents: components }),
    }),
    {
      name: 'surveyStore',
      getStorage: () => localStorage,
    }
  )
);

export default useSurveyStore;