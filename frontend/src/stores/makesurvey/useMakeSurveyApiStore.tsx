import create, { SetState } from 'zustand';

interface UseMakeSurveyApiState {
  surveyState?: string;
  selectedOption?: string;
  checked?: boolean;
  headerText?: string;
  headerDetailText?: string;
  listOption?: boolean;
}

interface SurveyStore {
  surveyList: { [key: number]: UseMakeSurveyApiState };
  setSurveyList: (Index: number, data: UseMakeSurveyApiState) => void;
}

const useMakeSurveyApiStore = create<SurveyStore>((set: SetState<SurveyStore>) => ({
  surveyList: {},
  setSurveyList: (Index: number , data: UseMakeSurveyApiState) =>
    set((state) => ({
      surveyList: {
        ...state.surveyList,
        [Index]: data,
      },
    })),
}));

export default useMakeSurveyApiStore;