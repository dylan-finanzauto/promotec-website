import React from "react";
import { Metadata } from "next";

type SigloLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Promotec | SIGLO",
  description: "Promotec ofrece seguros personalizados en automóviles, hogar, salud, vida, empresariales y de viaje, con asesoramiento experto y gestión eficiente de siniestros.",
};

const SigloLayout: React.FC<SigloLayoutProps> = ({ children }) => children

export default SigloLayout;
