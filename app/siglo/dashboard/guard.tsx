'use client'
import useAuth from "@/app/_hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const roleRoutes: Record<string, string> = {
  'SGL-Promotec': 'tickets',
  'SGL-Tecnologia': 'users',
  'SGL-Concesionario': 'tickets',
};

const Guard: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    if (token?.isAuthenticated) {
      const redirectTo = roleRoutes[token.role];
      if (redirectTo) {
        router.replace(`dashboard/${redirectTo}`);
        return;
      }
    } else {
      router.replace('/siglo/login');
    }
  }, [token, router]);

  return children;
};

export default Guard;
