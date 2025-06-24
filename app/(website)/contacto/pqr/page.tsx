'use client';
import { useForm } from "@tanstack/react-form";
import Select from '../../../../modules/shared/components/Select'
import { z } from 'zod';
import React, { useMemo } from 'react';
import TextareaField from '@/modules/shared/components/TextareaField';
import { InputField } from '@/modules/shared/components/InputField';
import CheckboxField from '@/modules/shared/components/CheckboxField';
import { DropZone } from "@/modules/website/ui/DropZone";
import { useTdStore } from "@/modules/shared/store/master";

const formSchema = z.object({
  nombresCompletos: z.string().nonempty(),
  apellidosCompletos: z.string().nonempty(),
  tipoDocumento: z.number().min(0),
  numeroDeIdentificacion: z.string().nonempty(),
  departamentoResidencia: z.number().min(0),
  ciudadRecidencia: z.number().min(0),
  barrio: z.string().nonempty(),
  direccion: z.string().nonempty(),
  numeroTelefono: z.string().nonempty(),
  numeroCelular: z.string().nonempty(),
  correoElectronico: z.string().nonempty().email(),
  confirmarCorreoElectronico: z.string().nonempty().email(),
  formaRespuesta: z.number().min(0),
  producto: z.number().min(0),
  numeroPoliza: z.number().min(0),
  detalleCaso: z.string().nonempty(),
  uploadFile: z.instanceof(File).refine(file => file.size <= 3 * 1024 * 1024, {
    message: "El archivo debe ser menor a 3MB"
  })
    .refine(file => ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type), {
      message: "Formato no permitido. Solo .pdf, .doc, .docx",
    }).optional()
});

const FormPqr: React.FC = () => {
  const { typeDocuments } = useTdStore()
  const form = useForm({
    defaultValues: {
      nombresCompletos: "",
      apellidosCompletos: "",
      tipoDocumento: -1,
      numeroDeIdentificacion: "",
      departamentoResidencia: -1,
      ciudadRecidencia: -1,
      barrio: "",
      direccion: "",
      numeroTelefono: "",
      numeroCelular: "",
      correoElectronico: "",
      confirmarCorreoElectronico: "",
      formaRespuesta: -1,
      producto: -1,
      numeroPoliza: -1,
      detalleCaso: "",
      uploadFile: undefined
    } as z.input<typeof formSchema>,
    validators: {
      onChange: formSchema
    },
    onSubmit: ({ }) => {
    }
  })

  const tdItems = useMemo(() => typeDocuments.map(t => ({
    key: t.name,
    value: t.id
  })), [typeDocuments])

  return (
    <div className="bg-[linear-gradient(to_bottom,_#D5E4F6_40%,_white_60%)] lg:bg-[linear-gradient(to_bottom,_#D5E4F6_68%,_white_32%)]">
      <div className="gap-y-2.5 min-w-0 mx-auto py-5 lg:flex-row justify-between w-[75%] lg:w-[73%]">
        <div className="bg-[#f4f4f4] rounded-4xl p-4 lg:p-0 items-center mt-6 lg:self-start lg:items-start lg:pl-24 lg:pr-24 lg:mt-[64px] w-full">
          <p className="text-[#4066b7] text-center font-bold text-[16px] pt-2 lg:pt-[55px] lg:text-[36px]">
            Información de PQR
          </p>
          <p className="mt-5 lg:mt-[30px] text-[#4D4D4D] text-center">
            Para radicar una PQR te invitamos a diligenciar el siguiente formulario, un asesor se comunicará contigo.
          </p>
          <div className="mt-10 flex items-center">
            <p className="text-[20px] text-[#466DA0] font-bold mb-[25px]">
              Datos Personales
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            <form.Field
              name='nombresCompletos'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Nombres completos</label>
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
              name='apellidosCompletos'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Apellidos completos</label>
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
              name='tipoDocumento'
            >
              {(field) => (
                <div>
                  <label htmlFor="" className="text-sm font-medium">Tipo de documento</label>
                  <Select
                    items={tdItems}
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
              name='numeroDeIdentificacion'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Número de identificación</label>
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
              name='departamentoResidencia'
            >
              {(field) => (
                <div>
                  <label htmlFor="" className="text-sm font-medium">Departamento de residencia</label>
                  <Select
                    items={tdItems}
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
              name='ciudadRecidencia'
            >
              {(field) => (
                <div>
                  <label htmlFor="" className="text-sm font-medium">Ciudad de residencia</label>
                  <Select
                    items={tdItems}
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
              name='barrio'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Barrio</label>
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
              name='direccion'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Dirección</label>
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
              name='numeroTelefono'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Número de teléfono</label>
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
              name='numeroCelular'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Número de celular</label>
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
              name='correoElectronico'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Correo Electroníco</label>
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
              name='confirmarCorreoElectronico'
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">Confirmar correo electroníco</label>
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
          </div>
          <p className="text-[18px] lg:text-[20px] text-[#466DA0] font-bold mt-[40px] mb-[20px]">
            Medio de respuesta
          </p>
          <div className='w-full lg:grid lg:grid-cols-2 gap-5'>
            <form.Field
              name='formaRespuesta'
            >
              {(field) => (
                <div>
                  <label htmlFor="" className="text-sm font-medium">Forma de respuesta</label>
                  <Select
                    items={tdItems}
                    name={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
          </div>
          <p className="text-[18px] lg:text-[20px] text-[#466DA0] font-bold mt-[40px] mb-[20px]">
            Datos de la póliza
          </p>
          <div className='lg:grid lg:grid-cols-2 gap-5'>
            <form.Field
              name='producto'
            >
              {(field) => (
                <div>
                  <label htmlFor="" className="text-sm font-medium">Producto</label>
                  <Select
                    items={tdItems}
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
              name='numeroPoliza'
            >
              {(field) => (
                <div>
                  <label htmlFor="" className="text-sm font-medium">No. Póliza</label>
                  <Select
                    items={tdItems}
                    name={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
          </div>
          <p className="text-[18px] lg:text-[20px] text-[#466DA0] font-bold mt-[40px] mb-[20px]">
            Detalle del caso
          </p>
          <div className='w-full flex flex-col '>
            <form.Field
              name='detalleCaso'
            >
              {(field) => (
                <div>
                  <label htmlFor="" className="text-sm font-medium">Describa en detalle su incomodidad</label>
                  <TextareaField
                    name={field.name}
                    maxLength={500}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="uploadFile">
              {(field) => (
                <DropZone
                  title="Arrastre para subir"
                  description="Suelte en esta área su contenido, puede adjuntar un archivo Word .doc/.docx ó .pdf (máximo 3MB)"
                  value={field.state.value}
                  error={field.state.meta.errors?.[0]?.message}
                  onFileDrop={field.handleChange}
                />
              )}
            </form.Field>

          </div>
          <div className="flex items-center pb-7 pt-8 lg:mt-0">
            <CheckboxField label="" />
            <p className="text-sm mx-2">He leído y acepto las finalidades descritas en la política de protección de datos de Promotec conforme a la ley 1581 de 2012 y el Decreto 1074 de 2015.</p>
          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-2 pb-16'>
            <button className='bg-white border border-[#FF9302] rounded-md px-[100px] py-2 text-[#FF9302] hover cursor-pointer mb-2 lg:mb-0 hover:border-[#747474] hover:text-[#747474] hover:bg-[#EFEFEF]'>
              Cancelar
            </button>
            <button className='bg-[#FF9302] border border-[#FF9302] rounded-md px-[106px] py-2 text-white hover cursor-pointer hover:border-[#dc8c25] hover:bg-[#dc8c25]'>
              Radicar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormPqr
