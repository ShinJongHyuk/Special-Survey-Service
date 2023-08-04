import create from 'zustand';

export interface MakeSurveyApiState {
    titleText?: string;
    titleContent?: string;
    conditionText?: string;
    conditionContent?: string;
    conditionVisible?: boolean;
    headcount?: string;
    startsurvey?: any;
    endsurvey?: any;
    selectedbutton?: string;
    targetselected?: any[];
    setTitleText: (value: string)=> void;
    setTitleContent: (value: string) => void;
    setConditionText: (value: string) => void;
    setConditionContent: (value: string) => void;
    setHeadcount: (value: string) => void;
    setStartsurvey: (value: any) => void;
    setEndsurvey: (value: any) => void;
    setSelectedbutton: (value: string) => void;
    setTargetSelected: (value: any) => void;
  };

const useMakeSurveyApiStore = create<MakeSurveyApiState>((set) => ({
  titleText: '',
  titleContent: '',
  conditionText: '',
  conditionContent: '',
  headcount: '',
  startsurvey: '',
  endsurvey: '',
  selectedbutton: '',
  targetselected: [],
  setTitleText: (value) => set({ titleText: value }),
  setTitleContent: (value) => set({ titleContent: value }),
  setConditionText: (value) => set({ conditionText: value }),
  setConditionContent: (value) => set({ conditionContent: value }),
  setHeadcount: (value) => set({ headcount: value }),
  setStartsurvey: (value) => set({ startsurvey: value }),
  setEndsurvey: (value) => set({ endsurvey: value }),
  setSelectedbutton: (value) => set({ selectedbutton: value }),
  setTargetSelected: (value) => {
    set((state : any) => {
      const index = state.targetselected.indexOf(value);
      if (index !== -1) {
        const updatedTargetSelected = state.targetselected.filter((category : string) => category !== value);
        return { targetselected: updatedTargetSelected };
      } else {
        const updatedTargetSelected = [...state.targetselected, value];
        return { targetselected: updatedTargetSelected };
      }
    });
  },
}));

export default useMakeSurveyApiStore;