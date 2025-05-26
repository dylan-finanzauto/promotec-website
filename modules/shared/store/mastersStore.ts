import { create } from "zustand";
import { Master } from "../types/master";

interface ITdStore {
  typeDocuments: Master[],
  updateTypeDocuments: (typeDocuments: Master[]) => void
}

interface ITpStore {
  typeProducts: Master[],
  updateTypeProducts: (typeProducts: Master[]) => void
}

export const tdStore = create<ITdStore>((set) => ({
  typeDocuments: [],
  updateTypeDocuments: (typeDocuments: Master[]) => set({ typeDocuments })
}))

export const tpStore = create<ITpStore>((set) => ({
  typeProducts: [],
  updateTypeProducts: (typeProducts: Master[]) => set({ typeProducts })
}))
