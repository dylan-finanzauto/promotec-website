import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Cookies from "@/modules/website/components/Cookies";

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

      <Cookies />
    </body>
  </html>
);

export default RootLayout;
