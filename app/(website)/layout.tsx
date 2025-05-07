import type { Metadata } from "next";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";

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
    <>
      <div className="sticky inset-0 z-40">
        <Header />
        <Navigation />
      </div>

      {/* <Footer /> */}

      {children}
    </>
  );
}
