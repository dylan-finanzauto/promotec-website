'use client'
import CheckboxField from "@/modules/shared/components/CheckboxField";
import { InputField } from "@/modules/shared/components/InputField";
import RadioField from "@/modules/shared/components/RadioField";
import Select from "@/modules/shared/components/Select";
import CoverageCard from "@/modules/website/ui/CoverageCard";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";
import Link from "next/link";

const coverages = [
  {
    title: "**Responsabilidad civil extracontractual**",
    img: "/images/products/vehicle/coverages/1.jpg"
  },
  {
    title: "**Asistencia al vehículo**",
    img: "/images/products/vehicle/coverages/2.jpg"
  },
  {
    title: "**Conductor elegido**",
    description: "***Asistencia Plus**",
    img: "/images/products/vehicle/coverages/3.jpg"
  },
  {
    title: "**Pérdida total, daño y/o hurto**",
    img: "/images/products/vehicle/coverages/4.jpg"
  },
  {
    title: "**Pérdida Parcial, daño y/o hurto**",
    img: "/images/products/vehicle/coverages/5.jpg"
  },
  {
    title: "**Vehículo de reemplazo**",
    description: "***Asistencia Plus**",
    img: "/images/products/vehicle/coverages/6.jpg"
  },
]

const Quot: React.FC = () => {

  const form = useForm({
    defaultValues: {
      inAgency: false,
      isPublic: false,
      plate: "",
      personType: 0,
      documentType: 0,
      document: "",
      name: "",
      lastName: "",
      phone: "",
      email: "",
      terms: false
    }
  })

  return (
    <>
      <div className="max-w-[1230px] min-w-0 w-full flex bg-gray-1 rounded-[30px] mx-auto mb-[150px] overflow-hidden">
        <div className="w-2/5">
          <Image className="max-w-full object-center object-cover h-full" src="/images/products/vehicle/quot/picture.jpg" alt="" width={930} height={930} />
        </div>
        <div className="py-10 flex justify-center grow">
          <form className="max-w-[520px] min-w-0 w-full">
            <h3 className="mb-8 text-[30px] text-center text-blue-primary font-bold">Cotiza tu póliza</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <form.Field
                  name="inAgency"
                >
                  {(field) => (
                    <div className="space-y-[6px]">
                      <label className="text-sm font-medium" htmlFor={field.name}>Cotizar vehículo 0 km sin placa</label>
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
                <form.Field
                  name="isPublic"
                >
                  {(field) => (
                    <div className="space-y-[6px]">
                      <label className="text-sm font-medium" htmlFor={field.name}>¿Vehículo de uso público?</label>
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
                <form.Field
                  name="plate"
                >
                  {(field) => (
                    <div className="space-y-[6px]">
                      <label className="text-sm font-medium" htmlFor={field.name}>Placa del vehículo</label>
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
                  name="personType"
                >
                  {(field) => (
                    <div className="space-y-[6px]">
                      <label className="text-sm font-medium" htmlFor={field.name}>Tipo de persona</label>
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
                  name="documentType"
                >
                  {(field) => (
                    <div className="space-y-[6px]">
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
                    <div className="space-y-[6px]">
                      <label className="text-sm font-medium" htmlFor={field.name}>Número de identificación</label>
                      <InputField
                        type="text"
                        id={field.name}
                        name={field.name}
                        error={field.state.meta.errors.length > 0}
                        value={field.state.value}
                        maxLength={10}
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
                    <div className="space-y-[6px]">
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
                    <div className="space-y-[6px]">
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
                  name="phone"
                >
                  {(field) => (
                    <div className="space-y-[6px] md:col-span-2">
                      <label className="text-sm font-medium" htmlFor={field.name}>Teléfono celular</label>
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
                  name="email"
                >
                  {(field) => (
                    <div className="space-y-[6px] md:col-span-2">
                      <label className="text-sm font-medium" htmlFor={field.name}>Correo electrónico</label>
                      <InputField
                        type="text"
                        id={field.name}
                        name={field.name}
                        error={field.state.meta.errors.length > 0}
                        value={field.state.value}
                        maxLength={300}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="terms">
                  {(field) => (
                    <div className="pt-4 pb-5 flex items-center gap-2 col-span-2">
                      <CheckboxField
                        id={field.name}
                        name={field.name}
                        checked={field.state.value}
                        onChange={(e) => field.handleChange(e.target.checked)}
                        error={field.state.meta.errors.length > 0}
                      />
                      <p className="text-sm">He leído y acepto las finalidades descritas en la política de protección de datos de Promotec conforme a la ley 1581 de 2012 y el Decreto 1074 de 2015.</p>
                    </div>
                  )}
                </form.Field>

              </div>

              <div className="flex justify-center">
                {/* <form.Subscribe
                                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                                >
                                    {([canSubmit, isSubmitting]) => (
                                        <button type="submit" className="w-[260px] py-4 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary-hover text-white transition-all cursor-pointer" disabled={!canSubmit || isSubmitting}>Cotizar</button>
                                    )}
                                </form.Subscribe> */}
                <Link href="./process">
                  <button className="w-[260px] py-4 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary-hover text-white transition-all cursor-pointer">Cotizar</button>
                </Link>
              </div>

            </div>

          </form>
        </div>
      </div>

      <div className="space-y-10 mb-[130px]">
        <h2 className="text-3xl text-center text-text-4 font-bold">Algunas coberturas y asistencias que te brinda la póliza de carros</h2>
        <div className="grid grid-cols-6 auto-rows-[368px] overflow-x-auto gap-4">
          {coverages.map((c, i) => (
            <CoverageCard
              key={i}
              title={c.title}
              description={c.description}
              img={c.img}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Quot;
