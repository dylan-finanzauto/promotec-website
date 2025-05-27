import { create } from "zustand";
import { Insurer, Master } from "../types/master";

interface ITdStore {
  typeDocuments: Master[],
  updateTypeDocuments: (typeDocuments: Master[]) => void
}

interface IInsurersStore {
  insurers: Insurer[],
  updateInsurers: (insurers: Insurer[]) => void
}

export const tdStore = create<ITdStore>((set) => ({
  typeDocuments: [],
  updateTypeDocuments: (typeDocuments: Master[]) => set({ typeDocuments })
}))

export const insurersStore = create<IInsurersStore>((set) => ({
  insurers: [],
  updateInsurers: (insurers: Insurer[]) => set({ insurers })
}))