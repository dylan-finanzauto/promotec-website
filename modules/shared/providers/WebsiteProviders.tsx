'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useAnimations } from "../hooks/useAnimations";

const queryClient = new QueryClient()

type Props = {
  children: React.ReactNode
}

const WebsiteProviders: React.FC<Props> = ({ children }) => {

  useAnimations()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default WebsiteProviders;
