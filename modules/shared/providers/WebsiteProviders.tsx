'use client';
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query"
import { useAnimations } from "../hooks/useAnimations";
import { product } from "../services/product";
import { useEffect } from "react";
import { productStore } from "../store/product";
import { insurersStore, tdStore } from "../store/master";
import { typeDocument } from "../services/master";
import { aboutStore } from "../store/about";
import { about, contact } from "../services/about";
import { contactStore } from "../store/contact";
import { insurer } from "../services/insurer";
import { AlertProvider } from "./AlertProvider";
import AlertContainer from "../ui/AlertContainer";

const queryClient = new QueryClient()

type Props = {
  children: React.ReactNode
}

const WebsiteProviders: React.FC<Props> = ({ children }) => {

  useAnimations()

  return (
    <QueryClientProvider client={queryClient}>
      <InitMutations>
        <AlertProvider>
          {children}
          <AlertContainer />
        </AlertProvider>
      </InitMutations>
    </QueryClientProvider>
  )
}

const InitMutations: React.FC<{
  children: React.ReactNode
}> = ({
  children
}) => {
    const { updateTypeDocuments } = tdStore()
    const { updateInsurers } = insurersStore()
    const { updateProducts } = productStore()
    const { updateAbout } = aboutStore()
    const { updateContact } = contactStore()

    const typeDocumentsMutation = useMutation({
      mutationFn: typeDocument,
      onSuccess: (data) => {
        console.log("Type documents data:", data)
        updateTypeDocuments(data)
      }
    })
    const insurersMutation = useMutation({
      mutationFn: async () => insurer(),
      onSuccess: (data) => updateInsurers(data)
    })
    const productMutation = useMutation({
      mutationFn: product,
      onSuccess: (data) => updateProducts(data)
    })
    const aboutMutation = useMutation({
      mutationFn: async () => about().then((list) => list.at(0) || null),
      onSuccess: (data) => updateAbout(data),
    });
    const contactMutation = useMutation({
      mutationFn: async () => contact().then((list) => list.at(0) || null),
      onSuccess: (data) => updateContact(data),
    });

    useEffect(() => {
      typeDocumentsMutation.mutate()
      insurersMutation.mutate()
      productMutation.mutate()
      aboutMutation.mutate()
      contactMutation.mutate()
    }, [])

    return children;
  }


export default WebsiteProviders;
