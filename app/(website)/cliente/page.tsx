'use client';
import { InputField } from "@/modules/shared/components/InputField";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";
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
        >
          {(field) => (
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
        </form.Field>
        <form.Field
          name="password"
        >
          {(field) => (
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
        </form.Field>
        <div className="flex justify-end">
          <a className="text-blue-primary underline" href="#">Olvidé mi contraseña</a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href={"/cliente/polizas"}
        >
          <button className="h-10 w-full rounded-[10px] bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer flex justify-center items-center">Iniciar sesión</button>
        </Link>
        <Link
          href={"/cliente/cuenta"}
        >
          <button className="h-10 w-full rounded-[10px] border border-yellow-primary text-yellow-primary cursor-pointer flex justify-center items-center">Crear cuenta</button>
        </Link>
      </div>
    </form>
  )
}

const Cliente: React.FC = () => {
  return (
    <main className="bg-blue-terciary">
      <Wrapper className="relative">
        <Image
          className="fade-right absolute right-0 bottom-0"
          src="/images/client/banner.png"
          alt=""
          width={1138}
          height={652}
          style={{ height: '100%' }}
        />
        <div className="w-10/12 mx-auto relative py-28">
          <div className="w-[400px] space-y-10">
            <div className="space-y-[30px]">
              <h1 className="text-5xl text-center text-blue-primary font-bold">Ingreso cliente</h1>
              <p className="text-2xl text-center text-text-3">Bienvenido, digita tus credenciales para acceder a la plataforma.</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default Cliente;
