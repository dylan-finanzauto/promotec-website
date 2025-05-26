'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useAnimations } from "../hooks/useAnimations";
import { tdStore, tpStore } from "../store/mastersStore";
import { useEffect } from "react";
import { typeDocuments, typeProducts } from "../services/master";

const queryClient = new QueryClient()

type Props = {
  children: React.ReactNode
}

const WebsiteProviders: React.FC<Props> = ({ children }) => {

  const { updateTypeDocuments } = tdStore()
  const { updateTypeProducts } = tpStore()

  useEffect(() => {
    typeDocuments().then(res => updateTypeDocuments(res))
    typeProducts().then(res => updateTypeProducts(res))
  }, [])

  useAnimations()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default WebsiteProviders;
