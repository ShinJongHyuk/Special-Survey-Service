import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SurveyFocusStore {
  selectedSurvey: any;
  prevSelectedSurvey: any;
  setSelectedSurvey: (survey: any) => void;
}

const useSurveyFocus = create<SurveyFocusStore>()(
  persist(
    (set) => ({
      selectedSurvey: 1,
      prevSelectedSurvey: 0,
      setSelectedSurvey: (survey: any) =>
        set((state: any) => ({
          selectedSurvey: survey,
          prevSelectedSurvey: state.selectedSurvey,
        })),
    }),
    {
      name: 'survey-focus-store',
    }
  )
);

export default useSurveyFocus;