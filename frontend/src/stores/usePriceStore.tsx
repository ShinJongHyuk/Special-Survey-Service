import create from 'zustand';
import { persist } from 'zustand/middleware';

interface PriceStore {
    price: number;
    increment: (value: number) => void;
    decrement: (value: number) => void;
}

const usePriceStore = create<PriceStore>()(
    persist(
        (set) => ({
            price: 0,
            increment: (value) => set((state) => ({ price: state.price + value })),
            decrement: (value) => set((state) => ({ price: Math.max(0, state.price - value) })),
        }),
        {
            name: 'price-store', 
        }
    )
);

export default usePriceStore;