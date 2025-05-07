'use client'
import { createContext } from "react";

export type InjectContextType = {
  inject: Record<string, any> | null,
  changeInjection: (inject: Record<string, any> | null) => void
}

export const InjectContext = createContext<InjectContextType>({
  inject: null,
  changeInjection: () => { }
})
