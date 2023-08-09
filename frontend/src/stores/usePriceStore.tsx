import create from 'zustand';

interface PriceStore {
    price: number;
    increment: (value: number) => void;
    decrement: (value: number) => void;
}

const usePriceStore = create<PriceStore>((set) => ({
    price: 0,
    increment: (value) => set((state) => ({ price: state.price + value })),
    decrement: (value) => set((state) => ({ price: Math.max(0, state.price - value) })),
}));

export default usePriceStore;