'use client'
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthForm from "../_ui/AuthForm";
import useAuth from "@/app/_hooks/useAuth";
import { useAlert } from "@/app/_hooks/useAlert";
import { LoginResponse } from "../../_types/api/Authentication";
import { login } from "../../_services/authentication";
import Loader from "../_ui/Loader";
import { Role } from "../../_types/entities/Auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Form = {
  username: string,
  password: string
}

type Props = {}

const Auth: React.FC<Props> = () => {

  const { onLogin } = useAuth();
  const { addAlert } = useAlert();
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);
  const [loginData, setLoginData] = useState<LoginResponse | null>(null);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setLoginData(data)
      console.log("Login data: ", data)
      setTimeout(() => {
        console.log("timeout")
        setShowLoader(true);
      }, 500);
    },
    onError: () => {
      addAlert("error", "Error", "Usuario inválido")
    },
  });

  const handleLogin = (user: Form): Promise<void> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(user, {
        onSuccess: () => resolve(),
        onError: (error) => reject(error),
      });
    });
  };

  return (
    <>
      <div className="md:h-screen bg-princ-blue overflow-hidden flex justify-center p-4">
        <div className={`bg-white rounded-2xl md:rounded-[40px] w-7xl min-w-0 grid md:grid-cols-2 p-2 ${loginData !== null ? "animate-slide-down" : ""}`}>
          <div className="flex justify-center items-center overflow-hidden">
            <div className="w-sm min-w-0 py-10">
              <AuthForm onLogin={handleLogin} />
            </div>
          </div>

          <div className="relative overflow-hidden">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/picture.png`} alt="picture" width={620} height={784} className="w-full h-full" />
            <h2 className="absolute top-0 left-0 mt-[15%] ml-[15%] sm:text-3xl font-bold text-white w-1/3">Sistema de información gerencial logístico</h2>
          </div>
        </div>
      </div>

      {showLoader && <Loader onAnimationEnd={() => {
        if (loginData) {
          onLogin({
            accessToken: loginData.accessToken,
            refreshToken: loginData.refreshToken,
            expirationDate: '',
            expiresIn: loginData.expiresIn,
            role: loginData.roles.find(r => r.descripcion.startsWith('SGL'))?.descripcion as Role
          });
          router.replace('/siglo/dashboard');
        }
      }} />}
    </>
  );
};

export default Auth;
