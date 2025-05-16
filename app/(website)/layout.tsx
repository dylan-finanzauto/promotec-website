import WebsiteProviders from "@/modules/shared/providers/WebsiteProviders";
import Footer from "@/modules/website/components/Footer";
import Header from "@/modules/website/components/Header";
import Navigation from "@/modules/website/components/Navigation";
import Attention from "@/modules/website/ui/Attention";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotec | Personas",
  description: "Promotec ofrece seguros personalizados en automóviles, hogar, salud, vida, empresariales y de viaje, con asesoramiento experto y gestión eficiente de siniestros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WebsiteProviders>
      <div className="sticky inset-0 z-40">
        <Header />
        <Navigation />
      </div>

      {children}

      <Footer />
      <Attention />
    </WebsiteProviders>
  );
}
