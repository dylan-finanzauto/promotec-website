import type React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AuthProvider from "./AuthProvider"
import { AlertProvider } from "../../_providers/AlertProvider"
import InjectProvider from "../../_providers/InjectProvider"
import AlertContainer from "@/app/_containers/AlertContainer"

const queryClient = new QueryClient()

type Props = {
  children: React.ReactNode
}

const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <InjectProvider>
          <AlertProvider>
            {children}
            <AlertContainer />
          </AlertProvider>
        </InjectProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default AppProviders;
