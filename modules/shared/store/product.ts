import { create } from "zustand";
import { Product } from "../types/product";

interface IProductStore {
    products: Product[],
    updateProducts: (products: Product[]) => void
}

export const useProductStore = create<IProductStore>((set) => ({
    products: [],
    updateProducts: (products: Product[]) => set({ products })
}))
