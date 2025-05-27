import { create } from "zustand";
import { About } from "../types/about";

interface AboutStore {
    about: About | null,
    updateAbout: (about: About | null) => void
}

export const aboutStore = create<AboutStore>((set) => ({
    about: null,
    updateAbout: (about: About | null) => set({ about })
}))
