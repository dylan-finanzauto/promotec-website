'use client'
import React from "react";
import AppProviders from "../_providers/AppProviders";
import Guard from "./guard";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <AppProviders>
    <Guard>
      {children}
    </Guard>
  </AppProviders>
);

export default DashboardLayout;
