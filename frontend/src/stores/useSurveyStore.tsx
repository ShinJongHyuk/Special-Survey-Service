import SurveyComponent from '@/components/survey';
import create from 'zustand';

type SurveyComponentData = {
  componentKey: string;
  surveyState: string;
  selectedOption: string;
  checked: boolean;
  // Add any other necessary data fields here
};

type SurveyStore = {
  surveyComponents: SurveyComponentData[];
  addSurveyComponent: (componentData: SurveyComponentData) => void;
  removeSurveyComponent: (componentKey: string) => void;
};

const useSurveyStore = create<SurveyStore>((set) => ({
  surveyComponents: [],
  addSurveyComponent: (componentData) =>
    set((state) => ({ surveyComponents: [...state.surveyComponents, componentData] })),
  removeSurveyComponent: (componentKey) =>
    set((state) => ({
      surveyComponents: state.surveyComponents.filter((component) => component.componentKey !== componentKey),
    })),
}));

export default useSurveyStore;