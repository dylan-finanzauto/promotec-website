'use client'
import useAuth from "@/app/_hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login: React.FC<{ children: React.ReactNode }> = ({ }) => {

  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    if (token?.isAuthenticated) {
      router.replace('/siglo/dashboard')
    } else {
      router.replace('/siglo/login');
    }
  }, [token, router]);

  return <p>Loading...</p>
};

export default Login;
