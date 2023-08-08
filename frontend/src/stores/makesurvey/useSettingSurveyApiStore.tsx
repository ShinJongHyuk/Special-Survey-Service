import create from 'zustand';

export interface SettingSurveyApiState {
    title?: string;
    titleContent?: string;
    conditionText?: string;
    conditionContent?: string;
    conditionVisible?: boolean;
    closedHeadCount?: number;
    startTime?: any;
    endTime?: any;
    type?: string;
    surveyTarget?: any[];
    surveyState? : string;
    selectionOption? : string;
    checked ?: boolean;
    headerText ?: string;
    headerDetailText ?: string;
    listOption ?: boolean;
    img ?: string;
    
    setTitle: (value: string)=> void;
    setTitleContent: (value: string) => void;
    setConditionText: (value: string) => void;
    setConditionContent: (value: string) => void;
    setClosedHeadCount: (value: string) => void;
    setStartTime: (value: any) => void;
    setEndTime: (value: any) => void;
    setType: (value: string) => void;
    setSurveyTarget: (value: any) => void;
    setImg: (value: any) => void;
  };

const useSettingSurveyApiStore = create<SettingSurveyApiState>((set) => ({
  title: '',
  titleContent: '',
  conditionText: '',
  conditionContent: '',
  closedHeadCount: 0,
  startTime: '',
  endTime: '',
  type: '',
  img : '',
  surveyTarget: [],
  setTitle: (value) => set({ title: value }),
  setTitleContent: (value) => set({ titleContent: value }),
  setConditionText: (value) => set({ conditionText: value }),
  setConditionContent: (value) => set({ conditionContent: value }),
  setClosedHeadCount: (value) => set({ closedHeadCount: parseInt(value) }),
  setStartTime: (value) => set({ startTime: value }),
  setEndTime: (value) => set({ endTime: value }),
  setType: (value) => set({ type: value }),
  setImg: (value) => set({ img : value }),
  setSurveyTarget: (value) => {
    set((state : any) => {
      const index = state.surveyTarget.indexOf(value);
      if (index !== -1) {
        const updatedsurveyTarget = state.surveyTarget.filter((category : string) => category !== value);
        return { surveyTarget: updatedsurveyTarget };
      } else {
        const updatedsurveyTarget = [...state.surveyTarget, value];
        return { surveyTarget: updatedsurveyTarget };
      }
    });
  },
}));

export default useSettingSurveyApiStore;