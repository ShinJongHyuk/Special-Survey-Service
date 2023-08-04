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
    genderselected?: string;
    ageselected?: any[];
    setTitleText: (value: string)=> void;
    setTitleContent: (value: string) => void;
    setConditionText: (value: string) => void;
    setConditionContent: (value: string) => void;
    setHeadcount: (value: string) => void;
    setStartsurvey: (value: any) => void;
    setEndsurvey: (value: any) => void;
    setSelectedbutton: (value: string) => void;
    setGenderselected: (value: any) => void;
    setAgeSelected: (value: any) => void;
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
  genderselected: '',
  ageselected: [],
  setTitleText: (value) => set({ titleText: value }),
  setTitleContent: (value) => set({ titleContent: value }),
  setConditionText: (value) => set({ conditionText: value }),
  setConditionContent: (value) => set({ conditionContent: value }),
  setHeadcount: (value) => set({ headcount: value }),
  setStartsurvey: (value) => set({ startsurvey: value }),
  setEndsurvey: (value) => set({ endsurvey: value }),
  setSelectedbutton: (value) => set({ selectedbutton: value }),
  setGenderselected: (value) => set({ genderselected: value }),
  setAgeSelected: (value) => set({ ageselected: value }),
}));

export default useMakeSurveyApiStore;