import { create } from 'zustand';

interface StayStore {
  selectedSurvey: any;
  prevSelectedSurvey: any;
  setSelectedSurvey: (survey: any) => void;
}

const useStayStore = create<StayStore>((set) => ({
  selectedSurvey: 1,
  prevSelectedSurvey: 0,
  setSelectedSurvey: (survey : any) =>
    set((state : any) => ({
      selectedSurvey: survey,
      prevSelectedSurvey: state.selectedSurvey,
    })),
  

}));

export default useStayStore;