import create from 'zustand';

interface UseMakeSurveyApiState {
  surveyState?: string;
  selectedOption?: string;
  checked?: boolean;
  headerText?: string;
  headerDetailText?: string;
  listOption?: boolean;
  multipleChoices?: any[]; 
  checkBox?: any[]; 
  dropDown?: any[]; 

}

interface SurveyStore {
  surveyList: { [key: string]: UseMakeSurveyApiState };
  setSurveyList: (componentKey : string, data: UseMakeSurveyApiState) => void;
  removeSurveyItem: (componentKey: string) => void;
  setMultipleChoices: (componentKey: string, multipleChoices: any[]) => void;
  setCheckBox: (componentKey: string, checkBox: any[]) => void;
  setDropDown: (componentKey: string, dropDown: any[]) => void;
}

const useMakeSurveyApiStore = create<SurveyStore>((set) => ({
  surveyList: {},
  setSurveyList: (componentKey: string , data: UseMakeSurveyApiState) =>
    set((state) => ({
      surveyList: {
        ...state.surveyList,
        [componentKey]: data,
      },
    })),
  removeSurveyItem: (componentKey: string) =>
  set((state) => {
    const updatedSurveyList = { ...state.surveyList };
    delete updatedSurveyList[componentKey];
    return { surveyList: updatedSurveyList };
    }),
    setMultipleChoices: (componentKey: string, multipleChoices: any[]) =>
    set((state) => ({
      surveyList: {
        ...state.surveyList,
        [componentKey]: {
          ...state.surveyList[componentKey],
          multipleChoices,
        },
      },
    })),
    setCheckBox: (componentKey: string, checkBox: any[]) =>
    set((state) => ({
      surveyList: {
        ...state.surveyList,
        [componentKey]: {
          ...state.surveyList[componentKey],
          checkBox,
        },
      },
    })),
    setDropDown: (componentKey: string, dropDown: any[]) =>
    set((state) => ({
      surveyList: {
        ...state.surveyList,
        [componentKey]: {
          ...state.surveyList[componentKey],
          dropDown,
        },
      },
    })),
}));

export default useMakeSurveyApiStore;