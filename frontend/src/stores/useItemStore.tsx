import create from 'zustand';

export interface ItemType {
  items: {
    id: string;
    text?: string;
    imageUrl?: string;
    linkNumber?: number;
  }[];
  setItems: (newItems: {
    id: string;
    text?: string;
    imageUrl?: string;
    linkNumber?: number;
  }[]) => void;
}

const useItemStore = (componentKey: string) =>
  create<ItemType>((set) => ({
    items: [
      { id: `${componentKey}_1`, text: '', imageUrl: '', linkNumber: 0 },
      { id: `${componentKey}_2`, text: '', imageUrl: '', linkNumber: 0 },
    ],
    setItems: (newItems) => set({ items: newItems }),
  }));

export default useItemStore;


