'use client';
import CheckboxField from "@/modules/shared/components/CheckboxField";
import { InputField } from "@/modules/shared/components/InputField";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";
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
        >
          {(field) => (
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
        </form.Field>
        <div className="pt-4 pb-5 flex items-center">
          <CheckboxField label="" />
          <p className="text-sm">He leído y acepto las finalidades descritas en la política de protección de datos de Promotec conforme a la ley 1581 de 2012 y el Decreto 1074 de 2015.</p>
        </div>
      </div>
      <Link
        href={"/pagos/inicio"}
      >
        <button className="h-10 w-full rounded-[10px] bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer flex justify-center items-center">Consultar</button>
      </Link>
    </form>
  )
}

const Payments: React.FC = () => {
  return (
    <main className="bg-blue-terciary">
      <Wrapper className="relative">
        <Image
          className="fade-right absolute right-0 bottom-0"
          src="/images/payments/banner.png"
          alt=""
          width={1138}
          height={652}
          style={{ height: '100%' }}
        />
        <div className="w-10/12 mx-auto relative py-28">
          <div className="w-[400px] space-y-10">
            <div className="space-y-[30px]">
              <h1 className="text-5xl text-center text-blue-primary font-bold">Paga tu póliza</h1>
              <p className="text-2xl text-center text-text-3">Ingresa el número de identificación del tomador de la póliza:</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default Payments;
