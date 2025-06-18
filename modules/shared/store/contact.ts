import { create } from "zustand";
import { Contact } from "../types/about";

interface IContactStore {
    contact: Contact | null,
    updateContact: (contact: Contact | null) => void
}

export const useContactStore = create<IContactStore>((set) => ({
    contact: null,
    updateContact: (contact: Contact | null) => set({ contact })
}))
