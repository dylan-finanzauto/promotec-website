'use client';
import { InputField } from "@/modules/shared/components/InputField";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";

const LoginForm: React.FC = () => {

  const form = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  return (
    <form action="" className="space-y-[30px]">
      <div className="space-y-4">
        <form.Field
          name="username"
          children={(field) => (
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-medium">Usuario</label>
              <InputField
                type="text"
                id={field.name}
                name={field.name}
                error={field.state.meta.errors.length > 0}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="password"
          children={(field) => (
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-medium">Contraseña</label>
              <InputField
                type="password"
                id={field.name}
                name={field.name}
                error={field.state.meta.errors.length > 0}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <div className="flex justify-end">
          <a className="text-secn-blue underline" href="#">Olvidé mi contraseña</a>
        </div>
      </div>
      <Link
        href={"/pagos/inicio"}
      >
        <button className="h-10 w-full rounded-[10px] bg-tirth hover:bg-tirth/80 text-white cursor-pointer flex justify-center items-center">Iniciar sesión</button>
      </Link>
    </form>
  )
}

const Cliente: React.FC = () => {
  return (
    <main className="bg-princ-blue">
      <Wrapper className="relative">
        <img className="fade-right absolute right-0 bottom-0 h-full" src={"/Promotec.Website.Client/images/banner-client.png"} alt="" />
        <div className="w-10/12 mx-auto relative py-28">
          <div className="w-[400px] space-y-10">
            <div className="space-y-[30px]">
              <h1 className="text-5xl text-center text-secn-blue font-bold">Ingreso cliente</h1>
              <p className="text-2xl text-center text-text4">Bienvenido, digita tus credenciales para acceder a la plataforma.</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default Cliente;
