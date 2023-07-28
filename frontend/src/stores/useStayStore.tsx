import { create } from 'zustand';

interface SurveyStore {
  surveyLength : any;
  selectedSurvey: any;
  prevSelectedSurvey: any;
  setSelectedSurvey: (survey: any) => void;
}

const useStayStore = create<SurveyStore>((set) => ({
  surveyLength : 1,
  selectedSurvey: 1,
  prevSelectedSurvey: 0,
  setSelectedSurvey: (survey : any) =>
    set((state : any) => ({
      selectedSurvey: survey,
      prevSelectedSurvey: state.selectedSurvey,
    })),
  

}));

export default useStayStore;