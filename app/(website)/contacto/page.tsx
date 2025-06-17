'use client';
import Wrapper from "@/modules/shared/ui/Wrapper";
import Select from "@/modules/shared/components/Select";
import TextareaField from "@/modules/shared/components/TextareaField";
import { InputField } from "@/modules/shared/components/InputField";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import Banner from "@/modules/website/ui/Banner";
import { useState } from "react";
import Link from "next/link";
import { MailIcon, PhoneIcon, WhatsappIcon, XIcon } from "@/modules/shared/components/SVGIcons";
import { getAssetPath } from "@/modules/shared/utils/paths";
import CheckboxField from "@/modules/shared/components/CheckboxField";
import CardDialog, { CardBodyDialog, CardFooterDialog, CardHeaderDialog } from "@/modules/shared/ui/CardDialog";
import Image from "next/image";
import { useAlert } from "@/modules/shared/hooks/useAlert";
import { contactStore } from "@/modules/shared/store/contact";

const formSchema = z.object({
  tipoDocumento: z.number().min(0),
  documento: z.string().nonempty(),
  nombre: z.string().nonempty(),
  email: z.string().email().nonempty(),
  telefono: z.string().nonempty(),
  tipoProducto: z.number().min(0),
  mensaje: z.string().nonempty(),
  terms: z.literal(true)
})

const ContactForm: React.FC = () => {

  const { addAlert } = useAlert()
  // const { typeDocuments } = tdStore()

  const form = useForm({
    defaultValues: {
      tipoDocumento: -1,
      documento: '',
      nombre: '',
      email: '',
      telefono: '',
      tipoProducto: -1,
      mensaje: '',
      terms: false
    },
    validators: {
      onChange: formSchema
    },
    onSubmitInvalid: ({ }) => {
      addAlert(
        'error',
        'Campos inválidos',
        'Por favor, diligencia los campos subrayados para continuar con la operación.',
      );
    },

    onSubmit: ({ formApi }) => {
      addAlert("success", "¡Nos contactaremos contigo!", "El mensaje fue enviado exitosamente, uno de nuestros asesores se comunicará contigo lo más pronto posible. Recuerda que nuestro horario de atención comercial es de Lunes a Viernes de 8:00 a.m. - 5:30 p.m. y Sábados de 8:00 a.m. - 12:00 p. m.");
      formApi.reset()
    }
  })

  // const tdItems = useMemo(() => typeDocuments.map(t => ({
  //   key: t.name,
  //   value: t.id
  // })), [typeDocuments])

  const tdItems = [
    {
      key: "cédula de ciudadanía",
      value: 1
    },
    {
      key: "cédula de extranjería",
      value: 2
    },
    {
      key: "NIT",
      value: 3
    },
    {
      key: "pasaporte",
      value: 4
    },
  ]

  const tpItems = [
    {
      key: "Seguro de automóviles",
      value: 1
    },
    {
      key: "Seguro de bicicletas",
      value: 2
    },
    {
      key: "Seguro corporativo",
      value: 3
    },
    {
      key: "Seguro de hogar",
      value: 4
    },
    {
      key: "Seguro de mascotas",
      value: 5
    },
    {
      key: "Seguro de salud",
      value: 6
    },
    {
      key: "Seguro de viajes",
      value: 7
    },
    {
      key: "Seguro de vida",
      value: 8
    },
    {
      key: "otro",
      value: 9
    },
  ]

  return (

    <form onSubmit={(e) => {
      e.preventDefault()
      e.stopPropagation()
      form.handleSubmit()
    }}>
      <div className="grid md:grid-cols-2 gap-5">
        <form.Field
          name="tipoDocumento"
        >
          {(field) => (
            <div className="space-y-4">
              <label htmlFor={field.name} className="text-sm font-medium">Tipo de documento</label>
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
          name="documento"
        >
          {(field) => (
            <div className="space-y-4">
              <label htmlFor={field.name} className="text-sm font-medium">Número de identificación</label>
              <InputField
                type="text"
                inputMode="numeric"
                id={field.name}
                name={field.name}
                error={field.state.meta.errors.length > 0}
                value={field.state.value}
                maxLength={20}
                onBlur={field.handleBlur}
                onChange={(e) => {
                  const value = e.target.value
                  if (/^\d+$/.test(value)) {
                    field.handleChange(value);
                  }
                }}
              />
            </div>
          )}
        </form.Field>
        <form.Field
          name="nombre"
        >
          {(field) => (
            <div className="space-y-4">
              <label htmlFor={field.name} className="text-sm font-medium">Nombre completo</label>
              <InputField
                type="text"
                id={field.name}
                name={field.name}
                error={field.state.meta.errors.length > 0}
                value={field.state.value}
                maxLength={100}
                onBlur={field.handleBlur}
                onChange={(e) => {
                  const value = e.target.value
                  const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]*$/;


                  if (value === '' || nameRegex.test(value)) {
                    field.handleChange(value);
                  }

                }}
              />
            </div>
          )}
        </form.Field>
        <form.Field
          name="email"
        >
          {(field) => (
            <div className="space-y-4">
              <label htmlFor={field.name} className="text-sm font-medium">Correo electrónico</label>
              <InputField
                type="text"
                id={field.name}
                name={field.name}
                error={field.state.meta.errors.length > 0}
                value={field.state.value}
                onBlur={field.handleBlur}
                maxLength={200}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>
        <form.Field
          name="telefono"
        >
          {(field) => (
            <div className="space-y-4">
              <label htmlFor={field.name} className="text-sm font-medium">Teléfono celular</label>
              <InputField
                type="text"
                inputMode="numeric"
                id={field.name}
                name={field.name}
                error={field.state.meta.errors.length > 0}
                value={field.state.value}
                maxLength={10}
                onBlur={field.handleBlur}
                onChange={(e) => {
                  const value = e.target.value
                  if (/^\d+$/.test(value)) {
                    field.handleChange(value);
                  }
                }}
              />
            </div>
          )}
        </form.Field>
        <form.Field
          name="tipoProducto"
        >
          {(field) => (
            <div className="space-y-4">
              <label htmlFor={field.name} className="text-sm font-medium">Tipo de produco</label>
              <Select
                items={tpItems}
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
          name="mensaje"
        >
          {(field) => (
            <div className="space-y-4 md:col-span-2">
              <label htmlFor={field.name} className="text-sm font-medium">Mensaje</label>
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
      </div>

      <form.Field name="terms">
        {(field) => (
          <div className="pt-4 pb-5 flex items-center gap-2">
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

      <div className="flex justify-center">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button type="submit" className="px-20 py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary disabled:bg-yellow-primary/50 hover:bg-yellow-primary-hover text-white transition-all cursor-pointer disabled:cursor-default" disabled={!canSubmit || isSubmitting}>Enviar</button>
          )}
        </form.Subscribe>
      </div>

    </form>
  )
}

const RadicarPQRS: React.FC<{
  onClose?: () => void
}> = ({ onClose }) => {

  const form = useForm({
    defaultValues: {
      fullname: '',
      document: '',
      email: '',
      category: -1,
      type: -1,
      terms: false
    },
  })

  return (
    <CardDialog state="success">
      <CardHeaderDialog>
        <div className="relative space-y-4 w-full">
          <h2 className="text-3xl text-blue-primary font-bold">Realiza un PQR</h2>
          <div className="text-text-4">Ingresa los datos solicitados:</div>
          <div className="absolute right-0 top-0">
            <XIcon className="size-4 text-gray-5 cursor-pointer" onClick={() => onClose && onClose()} />
          </div>
        </div>
      </CardHeaderDialog>
      <CardBodyDialog>
        <form>
          <div className="space-y-5 py-[30px] px-8">
            <form.Field name="fullname">
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm" htmlFor={field.name}>Nombre completo</label>
                  <InputField
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="document">
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm" htmlFor={field.name}>Número de documento</label>
                  <InputField
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="email">
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm" htmlFor={field.name}>Correo electrónico</label>
                  <InputField
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="category">
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm" htmlFor={field.name}>Categoría</label>
                  <Select
                    name={field.name}
                    value={field.state.value}
                    items={[]}
                    error={field.state.meta.errors.length > 0}
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="category">
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm" htmlFor={field.name}>Tipo</label>
                  <Select
                    name={field.name}
                    value={field.state.value}
                    items={[]}
                    error={field.state.meta.errors.length > 0}
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="terms">
              {(field) => (
                <div className="p-2 flex items-center gap-2">
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
        </form>
      </CardBodyDialog>
      <CardFooterDialog>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button className="h-10 w-[250px] rounded-[10px] bg-yellow-primary text-white cursor-pointer" disabled={isSubmitting || !canSubmit} onClick={() => form.handleSubmit()}>Crear</button>
          )}
        </form.Subscribe>
      </CardFooterDialog>
    </CardDialog>
  )
}

const ConsultarPQRS: React.FC<{
  onClose?: () => void
}> = ({ onClose }) => {

  const form = useForm({
    defaultValues: {
      document: '',
      number: '',
      email: '',
      terms: false
    },
  })

  return (
    <CardDialog state="success">
      <CardHeaderDialog>
        <div className="relative space-y-4 w-full">
          <h2 className="text-3xl text-blue-primary font-bold">Consulta tu PQRS</h2>
          <div className="text-text-4">Ingresa los datos para consultar el estado de tu PQRS.</div>
          <div className="absolute right-0 top-0">
            <XIcon className="size-4 text-gray-5 cursor-pointer" onClick={() => onClose && onClose()} />
          </div>
        </div>
      </CardHeaderDialog>
      <CardBodyDialog>
        <form>
          <div className="space-y-5 py-[30px] px-8">
            <form.Field name="document">
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm" htmlFor={field.name}>Número de documento</label>
                  <InputField
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="number">
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm" htmlFor={field.name}>Número de radicado</label>
                  <InputField
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="email">
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm" htmlFor={field.name}>Correo electrónico</label>
                  <InputField
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.length > 0}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="terms">
              {(field) => (
                <div className="p-2 flex items-center gap-2">
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
        </form>
      </CardBodyDialog>
      <CardFooterDialog>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button className="h-10 w-[250px] rounded-[10px] bg-yellow-primary text-white cursor-pointer" disabled={isSubmitting || !canSubmit} onClick={() => form.handleSubmit()}>Consultar</button>
          )}
        </form.Subscribe>
      </CardFooterDialog>
    </CardDialog>
  )
}

const Contact: React.FC = () => {

  const { contact } = contactStore();

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showQueryDialog, setShowQueryDialog] = useState(false);

  return (
    <>
      <Banner
        titleTop="Comunícate"
        titleBottom="con nosotros"
        img={getAssetPath("/images/contact/banner.png")}
      />

      <section className="bg-gray-3 overflow-hidden">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Image
              src={getAssetPath("/images/contact/p.png")}
              alt=""
              width={822}
              height={874}
              className="fade-left"
            />

            <div className="">
              <div className="space-y-[30px]">
                <h2 className="text-[40px] text-center lg:text-left text-blue-primary font-bold">Nuestros canales de atención</h2>
                <p className="text-[20px] text-center lg:text-left text-text-3 font-medium">Si tienes preguntas, necesitas ayuda o deseas más información sobre nuestros productos y servicios, no dudes en comunicarte con nosotros.</p>
              </div>
              <ul className="flex flex-col items-center md:items-start space-y-[30px] mt-[100px]">
                <li className="">
                  <div className="zoom-in inline-flex flex-col md:flex-row items-center gap-5">
                    <div className="size-16 rounded-full bg-blue-terciary grid place-items-center">
                      <PhoneIcon className="size-6 text-blue-primary" />
                    </div>
                    <div className="space-y-1">
                      <h6 className="text-center md:text-start">Línea nacional:</h6>
                      <h5 className="text-[20px] text-center text-blue-primary font-bold">{contact?.localLine}</h5>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="zoom-in inline-flex flex-col md:flex-row items-center gap-5">
                    <div className="size-16 rounded-full bg-blue-terciary grid place-items-center">
                      <WhatsappIcon className="size-6 text-blue-primary" />
                    </div>
                    <div className="space-y-1">
                      <h6 className="text-center md:text-start">Chat en línea:</h6>
                      <h5 className="text-[20px] text-center text-blue-primary font-bold">{contact?.chatLine}</h5>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="zoom-in inline-flex flex-col md:flex-row items-center gap-5">
                    <div className="size-16 rounded-full bg-blue-terciary grid place-items-center">
                      <MailIcon className="size-6 text-blue-primary" />
                    </div>
                    <div className="space-y-1">
                      <h6 className="text-center md:text-start">Correo electrónico:</h6>
                      <h5 className="text-[20px] text-center text-blue-primary font-bold">{contact?.email}</h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[70px]">
        <Wrapper>
          <div className="space-y-[70px]">

            <div className="fade-up py-10 px-8 rounded-[30px] bg-blue-secondary space-y-8">
              <h2 className="text-4xl text-center text-white font-extrabold">¿Necesitas acompañamiento en tu proceso de indemnización?</h2>
              <div className="flex justify-center">
                <Link
                  href={"/indemnizaciones"}
                >
                  <button className="px-20 py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Ver más</button>
                </Link>
              </div>
            </div>
            <div className="p-10 md:py-16 md:px-28 rounded-[30px] bg-gray-1">
              <div className="space-y-8 mb-10">
                <h3 className="text-[30px] text-text-4 text-center font-bold">¿Quieres adquirir una póliza de seguros?</h3>
                <p className="text-[20px] text-text-3 text-center font-medium">Déjanos tus datos y uno de nuestros asesores comerciales se pondrá en contacto contigo:</p>
                <ContactForm />
              </div>
            </div>

          </div>
        </Wrapper>
      </section>

      <section className="py-[100px] bg-blue-terciary">
        <Wrapper>
          <div className="space-y-10">
            <div className="space-y-[30px] w-10/12 mx-auto">
              <h3 className="text-3xl text-center text-blue-primary font-bold">Tu opinión es muy importante para nosotros</h3>
              <p className="text-[20px] text-center text-text-3 font-medium">En caso de una emergencia, contacta directamente al equipo de asistencia inmediata de cada aseguradora, disponible las 24 horas del día, los 7 días de la semana.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 auto-rows-[432px]">
              <div className="zoom-in relative group rounded-[30px] overflow-hidden">
                <Image className="absolute top-0 left-0 w-full h-full object-center object-cover group-hover:scale-110 transition-all" src={getAssetPath("/images/contact/b1.jpg")} alt="" width={200} height={200} />
                <div className="absolute w-full h-full top-0 left-0 bg-blue-secondary/80 flex flex-col justify-center gap-12 p-10 md:px-32">
                  <h4 className="text-[40px] text-blue-terciary leading-none font-semibold ">
                    <div className="">Radica</div>
                    <div className="text-white">una PQRS</div>
                  </h4>
                  <div className="flex justify-center">
                    <button className="py-3 w-[260px] flex justify-center rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary-hover text-white cursor-pointer" onClick={() => setShowCreateDialog(true)}>Crear</button>
                  </div>
                </div>
              </div>

              <div className="zoom-in relative group rounded-[30px] overflow-hidden">
                <Image className="absolute top-0 left-0 w-full h-full object-center object-cover group-hover:scale-110 transition-all" src={getAssetPath("/images/contact/b2.jpg")} alt="" width={200} height={200} />
                <div className="absolute w-full h-full top-0 left-0 bg-blue-secondary/80 flex flex-col justify-center gap-12 p-10 md:px-32">
                  <h4 className="text-[40px] text-blue-terciary leading-none font-semibold ">
                    <div className="">Consulta</div>
                    <div className="text-white">una PQRS</div>
                  </h4>
                  <div className="flex justify-center">
                    <button className="py-3 w-[260px] flex justify-center rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary-hover text-white cursor-pointer" onClick={() => setShowQueryDialog(true)}>Crear</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Wrapper>
      </section>

      {showCreateDialog && <RadicarPQRS onClose={() => setShowCreateDialog(false)} />}

      {showQueryDialog && <ConsultarPQRS onClose={() => setShowQueryDialog(false)} />}

    </>
  )
}

export default Contact;
