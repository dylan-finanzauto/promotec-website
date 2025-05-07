'use client'
import { createContext } from "react";
import { AuthToken, Token } from "../_types/entities/Auth";

export type AuthContextType = {
  token: AuthToken,
  onLogin: (token: Token) => void,
  onLogOut: () => void,
  expireSession: () => void,
}

export const AuthContext = createContext<AuthContextType>({
  token: {
    accessToken: "",
    refreshToken: "",
    expirationDate: "",
    expiresIn: 0,
    isAuthenticated: false,
    role: "SGL-Tecnologia",
    expired: false
  },
  onLogin: () => { },
  onLogOut: () => { },
  expireSession: () => { },
})
