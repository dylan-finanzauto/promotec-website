import { create } from "zustand";
import { QuotBike } from "../types/quot";

interface IQuotBikeStore {
    quotBike: QuotBike | null,
    updateQuotBike: (quotBike: QuotBike | null) => void
}

export const useQuotBikeStore = create<IQuotBikeStore>((set) => ({
    quotBike: null,
    updateQuotBike: (quotBike: QuotBike | null) => set({ quotBike })
}))
