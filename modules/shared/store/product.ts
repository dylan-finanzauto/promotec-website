import { create } from "zustand";
import { Product } from "../types/product";

interface ProductStore {
    products: Product[],
    updateProducts: (products: Product[]) => void
}

export const productStore = create<ProductStore>((set) => ({
    products: [],
    updateProducts: (products: Product[]) => set({ products })
}))
