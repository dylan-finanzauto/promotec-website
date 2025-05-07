'use client'
import Image from "next/image";
import { useForm } from "@tanstack/react-form";
import { InputField } from "@/app/_components/InputField";
import SpinnerIcon from "@/app/_components/icons/SpinnerIcon";
import { LoginRequest } from "../../_types/api/Authentication";

type Props = {
  onLogin: (user: LoginRequest) => Promise<void>;
}

const AuthForm: React.FC<Props> = ({ onLogin }) => {

  const form = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    onSubmit: async ({ value }) => {
      await onLogin(value)
    }
  })

  return (
    <>
      <div className="text-center space-y-5 mb-10">
        <h1 className="text-secn-blue text-5xl font-bold">
          Ingreso SIGLO
        </h1>
        <p className="text-text2 text-xl">
          Bienvenido, digita tus credenciales para acceder a
          la plataforma.
        </p>
      </div>
      <form action="" className="space-y-6" onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}>
        <div className="flex flex-col gap-1">
          <form.Field
            name="username"
            validators={{
              onChange: ({ value }) => !value ? 'Usuario requerido' : undefined
            }}
            children={(field) => (
              <>
                <label htmlFor={field.name} className={field.state.meta.errors.length > 0 ? "text-red-500" : ""}>Usuario</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  className="h-[48px]"
                  maxLength={30}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )} />
        </div>

        <div className="flex flex-col gap-1">
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => !value ? "Contraseña requerida" : undefined
            }}
            children={(field) => (
              <>
                <label htmlFor="password" className={field.state.meta.errors.length > 0 ? "text-red-500" : ""}>Contraseña</label>
                <InputField
                  type="password"
                  id={field.name}
                  name={field.name}
                  className="h-[48px]"
                  maxLength={100}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
        </div>

        <div className="pt-14 mx-3">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button
                className="h-10 flex items-center justify-center w-full text-center bg-tirth disabled:bg-tirth/40 text-white rounded-lg cursor-pointer disabled:cursor-auto" disabled={!canSubmit || isSubmitting}>
                {isSubmitting ? (
                  <SpinnerIcon className="animate-spin" />
                ) : (
                  'Iniciar Sesión'
                )}

              </button>
            )}
          />
        </div>
      </form>

      <div className="flex justify-center mt-16">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/promotec.svg`} alt="Logo" width={156} height={44} />
      </div>

    </>
  )
}

export default AuthForm;
