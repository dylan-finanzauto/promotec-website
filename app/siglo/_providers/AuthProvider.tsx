'use client'
import React, { useEffect, useState } from "react"
import { AuthToken, Role, Token } from "../_types/entities/Auth";
import { AuthContext } from "../_context/AuthContext";
import { refresh } from "../_services/authentication";

const initialState = {
  accessToken: "",
  refreshToken: "",
  expirationDate: "",
  expiresIn: 0,
  role: "SGL-Promotec",
  // role: "SGL-Tecnologia",
  isAuthenticated: false,
  expired: false,
} as AuthToken

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [token, setToken] = useState<AuthToken>(initialState);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      loadToken(JSON.parse(token))
    }
  }, [])

  const loadToken = async (token: Token) => {
    onLogin(token)
  }

  const onLogin = (token: Token) => {
    console.log("Token loaded: ", token)
    localStorage.setItem('token', JSON.stringify(token))
    setToken({
      ...token,
      isAuthenticated: true,
      expired: false,
    })

    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(async () => {
      console.log("Current token: ", token)
      try {
        const tokenRefreshed = await refresh({ accessToken: token.accessToken, refreshToken: token.refreshToken })
        onLogin({
          ...tokenRefreshed,
          role: tokenRefreshed.roles.find(r => r.descripcion.startsWith('SGL'))?.descripcion as Role || 'SGL-Promotec'
        })
        console.log("Token refreshed: ", tokenRefreshed);
      } catch (e) {
        expireSession()
      }
    }, (token.expiresIn - 5) * 60 * 1000)

    setTimeoutId(id);
  }

  const expireSession = () => {
    if (timeoutId) clearTimeout(timeoutId);
    localStorage.removeItem('token')
    setToken({
      ...initialState,
      isAuthenticated: false,
      expired: true
    })
  }

  const onLogOut = () => {
    if (timeoutId) clearTimeout(timeoutId);
    localStorage.removeItem('token')
    setToken(initialState)
  }

  return (
    <AuthContext.Provider value={{ token, onLogin, onLogOut, expireSession }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
