'use client';
import { InputField } from "@/modules/shared/components/InputField";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";

const LoginForm: React.FC = () => {

  const form = useForm({
    defaultValues: {
      document: ''
    }
  })

  return (
    <form action="" className="space-y-[30px]">
      <div className="space-y-4">
        <form.Field
          name="document"
          children={(field) => (
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-medium">Número de documento</label>
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
        <div className="pt-4 pb-5 flex items-center">
          <input type="checkbox" name="" id="" className="shrink-0 appearance-none size-4 m-2 border-2 border-gray-400 rounded-md checked:bg-secn-blue checked:border-transparent focus:outline-none cursor-pointer" />
          <p className="text-sm">He leído y acepto las finalidades descritas en la política de protección de datos de Promotec conforme a la ley 1581 de 2012 y el Decreto 1074 de 2015.</p>
        </div>
      </div>
      <Link
        href={"/pagos/inicio"}
      >
        <button className="h-10 w-full rounded-[10px] bg-tirth hover:bg-tirth/80 text-white cursor-pointer flex justify-center items-center">Consultar</button>
      </Link>
    </form>
  )
}

const Payments: React.FC = () => {
  return (
    <main className="bg-princ-blue">
      <Wrapper className="relative">
        <img className="fade-right absolute right-0 bottom-0 h-full" src={"/Promotec.Website.Client/images/banner-payments.png"} alt="" />
        <div className="w-10/12 mx-auto relative py-28">
          <div className="w-[400px] space-y-10">
            <div className="space-y-[30px]">
              <h1 className="text-5xl text-center text-secn-blue font-bold">Paga tu póliza</h1>
              <p className="text-2xl text-center text-text4">Ingresa el número de identificación del tomador de la póliza:</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default Payments;
