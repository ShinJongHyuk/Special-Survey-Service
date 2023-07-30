import create from 'zustand';

export interface SurveyStore {
  surveyComponents: any[];
  setSurveyComponents: (components: any) => void;
}

const useSurveyStore = create<SurveyStore>((set) => ({
  surveyComponents: [], 
  setSurveyComponents: (components) => set({ surveyComponents: components }),
}));

export default useSurveyStore;