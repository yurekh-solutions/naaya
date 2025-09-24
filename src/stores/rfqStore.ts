import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface RFQItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  material: string;
  quantity: number;
  image: string;
}

interface RFQStore {
  items: RFQItem[];
  addItem: (item: RFQItem) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

export const useRFQStore = create<RFQStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => ({
        items: [...state.items, item]
      })),
      
      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),
      
      updateItemQuantity: (id, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      })),
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'rfq-storage',
    }
  )
);