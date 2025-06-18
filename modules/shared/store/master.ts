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

interface IBikeTypeStore {
  bikeTypes: string[],
  updateBikeTypes: (bikeTypes: string[]) => void
}

export const useTdStore = create<ITdStore>((set) => ({
  typeDocuments: [
    {
      id: "",
      name: "cédula de ciudadanía"
    },
    {
      id: "",
      name: "cédula de extranjería"
    },
    {
      id: "",
      name: "NIT"
    },
    {
      id: "",
      name: "pasaporte"
    },
  ],
  updateTypeDocuments: (typeDocuments: Master[]) => set({ typeDocuments })
}))

export const useInsurersStore = create<IInsurersStore>((set) => ({
  insurers: [],
  updateInsurers: (insurers: Insurer[]) => set({ insurers })
}))

export const useBikeTypesStore = create<IBikeTypeStore>((set) => ({
  bikeTypes: [
    "eléctricas",
    "gasolina",
    "montaña",
    "plegables",
    "ruta", 
    "todoterreno", 
    "urbana"
  ],
  updateBikeTypes: (bikeTypes: string[]) => set({ bikeTypes })
}))