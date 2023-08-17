import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseMakeSurveyApiState {
  surveyState?: string;
  selectedOption?: string;
  checked?: boolean;
  headerText?: string;
  headerDetailText?: string;
  content?: string;
  multipleChoices?: any[];
  componentKey?: string;
}

interface SurveyStore extends UseMakeSurveyApiState {
  surveyList: { [key: string]: UseMakeSurveyApiState };
  uploadFileName: string;
  setSurveyList: (componentKey: string, data: UseMakeSurveyApiState) => void;
  removeSurveyItem: (componentKey: string) => void;
  setMultipleChoices: (componentKey: string, multipleChoices: any[]) => void;
  setCheckBox: (componentKey: string, checkBox: any[]) => void;
  reset: () => void;
  setUploadFileName: (filename: string) => void;
}

const useMakeSurveyApiStore = create<SurveyStore>()(
  persist(
    (set) => ({
      surveyList: {},
      uploadFileName: "",
      setSurveyList: (componentKey: string, data: UseMakeSurveyApiState) =>
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
      reset: () =>
        set(() => ({
          surveyList: {},
        })),
      setUploadFileName: (filename: string) =>
        set(() => ({
          uploadFileName: filename,
        })),
    }),
    {
      name: "makeSurveyApiStore",
    },
  ),
);

export default useMakeSurveyApiStore;
