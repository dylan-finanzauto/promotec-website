'use client';
import { InputField } from "@/modules/shared/components/InputField";
import RadioField from "@/modules/shared/components/RadioField";
import Select from "@/modules/shared/components/Select";
import { getAssetPath } from "@/modules/shared/utils/paths";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";
import { useState } from "react";

const Process: React.FC = () => {

  const form = useForm({
    defaultValues: {
      bikeType: -1,
      brand: "",
      city: "",
      cost: "",
      purchaseDate: "",
      isProfessional: false
    }
  })

  return (
    <div className="w-full bg-gray-1 rounded-[30px] overflow-hidden mb-[70px]">
      <div className="h-[220px]">
        <Image className="w-full object-center object-cover h-full" src={getAssetPath("/images/products/bike/quot/banner.jpg")} alt="" width={1200} height={1000} />
      </div>

      <div className="pt-[30px] pb-10 max-w-[1200px] min-w-0 w-full mx-auto space-y-[30px]">
        <h4 className="text-[30px] text-center text-blue-primary font-bold">Información bicicleta</h4>
        <div className="grid lg:grid-cols-4 gap-4">
          <form.Field
            name="bikeType"
          >
            {(field) => (
              <div className="lg:col-span-2 space-y-[6px]">
                <label className="text-sm font-medium" htmlFor={field.name}>Tipo de bicicleta</label>
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
            name="brand"
          >
            {(field) => (
              <div className="lg:col-span-2 space-y-[6px]">
                <label className="text-sm font-medium" htmlFor={field.name}>Marca de bicicleta</label>
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
            name="city"
          >
            {(field) => (
              <div className="lg:col-span-2 space-y-[6px]">
                <label className="text-sm font-medium" htmlFor={field.name}>Ciudad de circulación</label>
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
            name="cost"
          >
            {(field) => (
              <div className="lg:col-span-2 space-y-[6px]">
                <label className="text-sm font-medium" htmlFor={field.name}>Costo de bicicleta</label>
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
            name="purchaseDate"
          >
            {(field) => (
              <div className="space-y-[6px]">
                <label className="text-sm font-medium" htmlFor={field.name}>Fecha de la compra</label>
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
            name="isProfessional"
          >
            {(field) => (
              <div className="space-y-[6px]">
                <label className="text-sm font-medium" htmlFor={field.name}>¿La bicicleta es de uso profesional?</label>
                <span className="flex gap-4 items-center">
                  <RadioField
                    name={field.name}
                    label="Si"
                  />
                  <RadioField
                    name={field.name}
                    label="No"
                  />
                </span>
              </div>
            )}
          </form.Field>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="h-10 w-[187px] text-yellow-primary border border-yellow-primary rounded-[10px] bg-transparent transition-all duration-500 cursor-pointer font-medium"
            onClick={() => { }}
          >
            Atrás
          </button>
          <button
            className="h-10 w-[187px] bg-yellow-primary text-white rounded-[10px] cursor-pointer font-medium transition-all duration-500 hover:bg-yellow-primary-hover"
            onClick={() => { }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Process;
