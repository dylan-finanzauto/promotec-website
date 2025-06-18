'use client';
import { useForm } from "@tanstack/react-form";
import Select from '../../../../modules/shared/components/Select'
import { z } from 'zod';
import React, { useMemo, useState } from 'react';
import { useTdStore } from '@/modules/shared/store/master';
import TextareaField from '@/modules/shared/components/TextareaField';
import DateField from '@/modules/shared/components/DateField';
import { InputField } from '@/modules/shared/components/InputField';
import RadioField from '@/modules/shared/components/RadioField';
import CheckboxField from '@/modules/shared/components/CheckboxField';
import { InfoIcon } from '@/modules/shared/components/SVGIcons';
import Breadcrumb from "@/modules/shared/components/Breadcrumb";

const formSchema = z.object({
    tipoReporte: z.number().min(0),
    descripcionReporte: z.string().nonempty(),
    departamento: z.number().min(0),
    ciudad: z.number().min(0),
    fecha: z.date().nullable(),
    involucrados: z.array(
        z.object({
            nombreCompleto: z.string().nonempty(),
            cargo: z.string().nonempty(),
            area: z.string().nonempty(),
            informacionAdicional: z.string().optional(),
        })
    ).min(1, "Agrega al menos un involucrado"),
    anonimo: z.enum(["si", "no"], {
        required_error: "Selecciona si deseas que el reporte sea anónimo",
    }),
    tipoDenunciante: z.number().min(0),
    aceptaPolitica: z.literal(true, {
        errorMap: () => ({
            message: "Debes aceptar la política de protección de datos",
        }),
    }),
});

const FormLineaEtica: React.FC = () => {
    const { typeDocuments } = useTdStore()
    const forceRender = useState(0)[1];

    const form = useForm({
        defaultValues: {
            tipoReporte: -1,
            descripcionReporte: "",
            departamento: -1,
            ciudad: -1,
            fecha: new Date(),
            involucrados: [
                {
                    nombreCompleto: "",
                    cargo: "",
                    area: "",
                    informacionAdicional: ""
                }
            ],
            anonimo: "no",
            tipoDenunciante: -1,
            aceptaPolitica: true
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

    const involucrados = form.getFieldValue("involucrados") || [];

    return (
        <div className="bg-[linear-gradient(to_bottom,_#D5E4F6_40%,_white_60%)] lg:bg-[linear-gradient(to_bottom,_#D5E4F6_68%,_white_32%)]">
            <div className="gap-y-2.5 min-w-0 mx-auto py-5 lg:flex-row justify-between w-[75%] lg:w-[73%]">
                <Breadcrumb items={[{ label: "Línea ética", href: "../linea-etica" }, { label: "Radicar novedad" }]} />
                <div className="flex flex-col items-center bg-[#f4f4f4] rounded-4xl p-4 lg:p-0">
                    <div>
                        <p className="text-[#041C3C] text-center font-bold text-[16px] mt-2 lg:mt-[75px] lg:text-[36px]">
                            Formulario línea ética
                        </p>
                        <p className="mt-5 lg:mt-[40px] text-[#4D4D4D] text-center">
                            Diligencia el siguiente formulario y nos comunicaremos contigo:
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-6 lg:self-start lg:items-start lg:pl-24 lg:pr-24 lg:mt-[64px] w-full ">
                        <p className="text-[20px] text-[#466DA0] font-bold mb-[25px]">
                            Datos correspondientes
                        </p>
                        <form.Field
                            name='tipoReporte'
                        >
                            {(field) => (
                                <div className='w-full lg:w-[50%]'>
                                    <label htmlFor="" className="text-sm font-medium">Tipo de reporte</label>
                                    <Select
                                        className='w-full'
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
                            name='descripcionReporte'
                        >
                            {(field) => (
                                <div className="space-y-4 col-span-2 mt-4 w-full">
                                    <label htmlFor="" className="text-sm font-medium">Descripción del reporte</label>
                                    <TextareaField
                                        placeholder='Ingrese aquí su comentario'
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
                        <p className="text-[18px] lg:text-[20px] text-[#466DA0] font-bold mt-[20px] mb-[20px]">
                            Lugar y fecha del incidente
                        </p>
                        <div className='w-full lg:grid lg:grid-cols-3 lg:gap-4 '>
                            <form.Field
                                name='departamento'
                            >
                                {(field) => (
                                    <div>
                                        <label htmlFor="" className="text-sm font-medium">Departamento</label>
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
                                name='ciudad'
                            >
                                {(field) => (
                                    <div>
                                        <label htmlFor="" className="text-sm font-medium">Ciudad</label>
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
                                name='fecha'
                            >
                                {(field) => (
                                    <div>
                                        <label htmlFor="" className="text-sm font-medium">Fecha</label>
                                        <DateField
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
                        <div className='bg-[#EFEFEF] rounded-xl pl-2 pr-2 mt-[20px] w-full'>
                            <div className='ml-[20px] mr-[20px]'>
                                <div className="lg:flex justify-between items-center  gap-4 mt-[30px]">
                                    <p className='text-[#041C3C] font-bold text-[15px] text-center mb-5 lg:mb-0 lg:items-center lg:text-[20px]'>
                                        Información de los involucrados
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const involucradosActuales = form.getFieldValue("involucrados") || [];
                                            const involucradosNuevos = [
                                                {
                                                    nombreCompleto: "",
                                                    cargo: "",
                                                    area: "",
                                                    informacionAdicional: "",
                                                },
                                                ...involucradosActuales,
                                            ];
                                            forceRender((n) => n + 1);
                                            form.setFieldValue("involucrados", involucradosNuevos);
                                        }}
                                        className="bg-white border border-[#FF9302] rounded-md px-6 py-2 text-[#FF9302] hover cursor-pointer hover:border-[#747474] hover:text-[#747474] hover:bg-[#EFEFEF]"
                                    >
                                        Agregar otro
                                    </button>
                                </div>
                                <div className='mt-[30px]'>
                                    {[...involucrados].map((_, i, arr) => {
                                        const index = arr.length - 1 - i;
                                        const primerInvolucrado = index === 0;
                                        return (
                                            <React.Fragment key={index}>
                                                <div className="flex">
                                                    <p className='text-[16px] text-[#466DA0] font-bold my-1'>
                                                        Involucrado {index + 1}
                                                    </p>
                                                    {!primerInvolucrado && (
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const actuales = form.getFieldValue("involucrados") || [];
                                                                const actualizados = [...actuales];
                                                                actualizados.splice(index, 1);
                                                                form.setFieldValue("involucrados", actualizados);
                                                                forceRender((n) => n + 1);
                                                            }}
                                                            className="border-2 border-[#dee5ed] rounded-md w-8 h-8 mx-5 cursor-pointer"
                                                            title="Eliminar"
                                                        >
                                                            -
                                                        </button>
                                                    )}
                                                </div>
                                                <div className='lg:grid lg:grid-cols-3 mt-[25px] gap-3'>
                                                    <form.Field
                                                        name={`involucrados[${index}].nombreCompleto`}
                                                    >
                                                        {(field) => (
                                                            <div className="flex flex-col gap-1">
                                                                <label htmlFor="" className="text-sm font-medium">Nombre completo</label>
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
                                                        name={`involucrados[${index}].cargo`}
                                                    >
                                                        {(field) => (
                                                            <div className="flex flex-col gap-1">
                                                                <label htmlFor="" className="text-sm font-medium">Cargo</label>
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
                                                        name={`involucrados[${index}].area`}
                                                    >
                                                        {(field) => (
                                                            <div className="flex flex-col gap-1">
                                                                <label htmlFor="" className="text-sm font-medium">Área</label>
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
                                                <div className='mt-[25px] mb-[20px]'>
                                                    <form.Field
                                                        name={`involucrados[${index}].informacionAdicional`}>
                                                        {(field) => (
                                                            <div className="flex flex-col gap-1 mt-2">
                                                                <label className="text-[13px] lg:text-sm font-medium">Información adicional (opcional)</label>
                                                                <InputField
                                                                    type="text"
                                                                    id={field.name}
                                                                    placeholder='Ingrese aquí su comentario'
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
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#E5EAF8] rounded-xl lg:mt-[30px] w-full p-3 flex items-center gap-3'>
                            <InfoIcon className="flex-shrink-0 -mt-6" />
                            <p className='text-[#345BB0] text-[10px] lg:text-[15px]'>
                                <strong>
                                    ¡Recuerda que la Línea de Transparencia es un canal anónimo y confidencial, por lo que no estás obligado a suministrar ninguno de tus datos de contacto.
                                </strong>
                                <br />
                                <span>
                                    En caso de querer ser contactado, por favor diligencie la siguiente información.
                                </span>
                            </p>
                        </div>

                        <div className="mt-[20px] lg:grid lg:grid-cols-3 w-full">
                            <form.Field name='anonimo'>
                                {(field) => (
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium">¿Deseas que tu reporte sea anónimo?</label>
                                        <div className="flex gap-5 mb-5 lg:mb-0">
                                            <RadioField
                                                name={field.name}
                                                className='text-blue-secondary'
                                                label="Sí"
                                                value="true"
                                            />
                                            <RadioField
                                                name={field.name}
                                                className='text-blue-secondary'
                                                label="No"
                                                value="false"
                                            />
                                        </div>
                                    </div>
                                )}
                            </form.Field>
                            <form.Field
                                name='tipoDenunciante'
                            >
                                {(field) => (
                                    <div>
                                        <label htmlFor="" className="text-sm font-medium">Tipo de denunciante</label>
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
                        <div className="pt-4 pb-5 flex items-center mt-5 lg:mt-0">
                            <CheckboxField label="" />
                            <p className="text-sm">He leído y acepto las finalidades descritas en la política de protección de datos de Promotec conforme a la ley 1581 de 2012 y el Decreto 1074 de 2015.</p>
                        </div>
                    </div>
                    <div className='lg:flex items-center gap-2 mb-[40px]'>
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
export default FormLineaEtica