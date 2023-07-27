import { create } from 'zustand';

const useStayStore = create((set) => ({
  selectedSurvey: 1,
  prevSelectedSurvey: null,
  setSelectedSurvey: (survey : any) =>
    set((state : any) => ({
      selectedSurvey: survey,
      prevSelectedSurvey: state.selectedSurvey,
      showToolbar: true,
    })),

}));

export default useStayStore;