import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface SelectedType {
  selected: string;
  setSelected: (value: any) => void;
}

const useSelectedStore = create<SelectedType>()(
  persist(
    (set) => ({
      selected: 'question',
      setSelected: (value) => set({ selected: value }),
    }),
    {
      name: 'selected-type-store',
    }
  )
);

export default useSelectedStore;