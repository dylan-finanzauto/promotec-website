'use client';
import { InputField } from "@/modules/shared/components/InputField";
import Select from "@/modules/shared/components/Select";
import Stepper from "@/modules/website/components/Stepper";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";
import { useState } from "react";

const Process: React.FC = () => {

  const [step, setStep] = useState(0)

  const form = useForm({
    defaultValues: {
      documentType: 0,
      document: "",
      name: "",
      lastName: "",
      birth: "",
      gender: 0,
      address: "",
      city: 0,
      phone: "",
      email: "",
      maritalStatus: 0,
      profession: "",
      occupation: ""
    }
  })

  return (
    <div className="w-full bg-gray-1 rounded-[30px] overflow-hidden mb-[70px]">
      <div className="h-[220px]">
        <Image className="w-full object-center object-cover h-full" src="/images/products/vehicle/quot/banner.jpg" alt="" width={1200} height={1000} />
      </div>

      <div className="pt-[30px] pb-10 max-w-[1200px] min-w-0 w-full mx-auto space-y-[30px]">
        <h4 className="text-[30px] text-center text-blue-primary font-bold">Información personal</h4>
        <Stepper steps={[1, 2, 3]} currentStep={step} />
        <div className="grid grid-cols-4 gap-4">
          <form.Field
            name="documentType"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Tipo de documento</label>
                <Select
                  items={[]}
                  name={field.name}
                  value={field.state.value}
                  error={field.state.meta.errors.length > 0}
                  onChange={field.handleChange}
                  onBlur={field.handleBlur}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="document"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Número de documento</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={6}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="name"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Nombres o Razón social</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={200}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="lastName"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Apellidos</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={100}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="birth"
          >
            {(field) => (
              <div className="space-y-[6px]">
                <label className="text-sm font-medium" htmlFor={field.name}>Fecha de nacimiento</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={100}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="gender"
          >
            {(field) => (
              <div className="space-y-[6px]">
                <label className="text-sm font-medium" htmlFor={field.name}>Género</label>
                <Select
                  items={[]}
                  name={field.name}
                  value={field.state.value}
                  error={field.state.meta.errors.length > 0}
                  onChange={field.handleChange}
                  onBlur={field.handleBlur}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="address"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Dirección</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={100}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="city"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Ciudad de residencia</label>
                <Select
                  items={[]}
                  name={field.name}
                  value={field.state.value}
                  error={field.state.meta.errors.length > 0}
                  onChange={field.handleChange}
                  onBlur={field.handleBlur}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="phone"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Teléfono celular</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={20}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="email"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Correo electrónico</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={200}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="maritalStatus"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Estado civil</label>
                <Select
                  items={[]}
                  name={field.name}
                  value={field.state.value}
                  error={field.state.meta.errors.length > 0}
                  onChange={field.handleChange}
                  onBlur={field.handleBlur}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="profession"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Profesión</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={100}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="occupation"
          >
            {(field) => (
              <div className="space-y-[6px] col-span-2">
                <label className="text-sm font-medium" htmlFor={field.name}>Ocupación</label>
                <InputField
                  type="text"
                  id={field.name}
                  name={field.name}
                  error={field.state.meta.errors.length > 0}
                  value={field.state.value}
                  maxLength={100}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="h-10 w-[187px] text-yellow-primary border border-yellow-primary rounded-[10px] bg-transparent transition-all duration-500 cursor-pointer font-medium"
            onClick={() => setStep(curr => curr - 1)}
          >
            Atrás
          </button>
          <button
            className="h-10 w-[187px] bg-yellow-primary text-white rounded-[10px] cursor-pointer font-medium transition-all duration-500 hover:bg-yellow-primary-hover"
            onClick={() => setStep(curr => curr + 1)}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Process;
