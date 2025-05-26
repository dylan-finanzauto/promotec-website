import Header from "@/modules/cliente/components/Header";
import WebsiteProviders from "@/modules/shared/providers/WebsiteProviders";
import Footer from "@/modules/website/components/Footer";
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
      <div className="grid grid-cols-1 grid-rows-[96px_1fr] min-h-screen bg-gray-3">

        <div className="col-span-2">
          <Header />
        </div>

        {children}
      </div>
      <Footer />
      <Attention />
    </WebsiteProviders>
  );
}
