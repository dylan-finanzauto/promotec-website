'use client'
import React from "react";
import AppProviders from "../_providers/AppProviders";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <AppProviders>
    {children}
  </AppProviders>
);

export default AuthLayout;
