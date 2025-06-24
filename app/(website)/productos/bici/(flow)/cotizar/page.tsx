'use client'
import CheckboxField from "@/modules/shared/components/CheckboxField";
import { InputField } from "@/modules/shared/components/InputField";
import Select from "@/modules/shared/components/Select";
import { useTdStore } from "@/modules/shared/store/master";
import { useQuotBikeStore } from "@/modules/shared/store/quot";
import { getAssetPath } from "@/modules/shared/utils/paths";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";

const Quot: React.FC = () => {

  const { typeDocuments } = useTdStore()
  const { updateQuotBike } = useQuotBikeStore()

  const form = useForm({
    defaultValues: {
      name: "",
      documentType: "",
      document: "",
      phone: "",
      email: "",
      terms: false
    },
    onSubmit: ({ value }) => {
      const { terms, ...person } = value
      if (!terms) return
      updateQuotBike({ person: person })
    }
  })

  return (
    <>
      <div className="max-w-[1230px] min-w-0 w-full flex bg-gray-1 rounded-[30px] mx-auto mb-[150px] overflow-hidden">
        <div className="w-2/5">
          <Image className="max-w-full object-center object-cover h-full" src={getAssetPath("/images/products/bike/quot/picture.jpg")} alt="" width={515} height={686} />
        </div>
        <div className="py-10 flex justify-center grow">
          <form className="max-w-[520px] min-w-0 w-full" onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}>
            <h3 className="mb-8 text-[30px] text-center text-blue-primary font-bold">Cotiza tu póliza</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <form.Field
                  name="name"
                >
                  {(field) => (
                    <div className="md:col-span-2 space-y-[6px]">
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
                  name="documentType"
                >
                  {(field) => (
                    <div className="space-y-[6px]">
                      <label className="text-sm font-medium" htmlFor={field.name}>Tipo de documento</label>
                      <Select
                        items={typeDocuments.map(td => ({ key: td.name, value: td.name }))}
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
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                >
                  {([canSubmit, isSubmitting]) => (
                    <button type="submit" className="w-[260px] py-4 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary-hover text-white transition-all cursor-pointer" disabled={!canSubmit || isSubmitting}>Cotizar</button>
                  )}
                </form.Subscribe>
              </div>

            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Quot;
