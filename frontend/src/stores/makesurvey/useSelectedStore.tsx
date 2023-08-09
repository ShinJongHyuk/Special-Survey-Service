import create from 'zustand';

export interface SelectedType {
  selected: string;
  setSelected: (value: any) => void;
}

const useSelectedStore = create<SelectedType>((set) => ({
  selected: 'question',
  setSelected: (value) => set({ selected: value }),
}));

export default useSelectedStore;