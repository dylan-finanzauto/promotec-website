import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/modules/website/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: ["normal", "italic"],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="es">
    <body
      className={`${inter.variable} antialiased`}
    >
      {children}

      <CookieConsent />
    </body>
  </html>
);

export default RootLayout;
