import { create } from "zustand";
import { About } from "../types/about";

interface IAboutStore {
    about: About | null,
    updateAbout: (about: About | null) => void
}

export const useAboutStore = create<IAboutStore>((set) => ({
    about: null,
    updateAbout: (about: About | null) => set({ about })
}))
