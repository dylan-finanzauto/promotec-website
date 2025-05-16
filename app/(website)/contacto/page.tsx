'use client';
import Wrapper from "@/modules/shared/ui/Wrapper";
import MailIcon from "@/modules/shared/components/icons/MailIcon";
import PhoneIcon from "@/modules/shared/components/icons/PhoneIcon";
import POutlinedIcon from "@/modules/shared/components/icons/POutlinedIcon";
import WhatsappIcon from "@/modules/shared/components/icons/WhatsappIcon";
import Select from "@/modules/shared/components/Select";
import TextareaField from "@/modules/shared/components/TextareaField";
import { InputField } from "@/modules/shared/components/InputField";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

const formSchema = z.object({
  tipoDocumento: z.string().nonempty(),
  documento: z.string().nonempty(),
  nombre: z.string().nonempty(),
  email: z.string().nonempty(),
  telefono: z.string().nonempty(),
  tipoProducto: z.string().nonempty(),
  mensaje: z.string().nonempty(),
})

const ContactForm: React.FC = () => {

  const form = useForm({
    defaultValues: {
      tipoDocumento: '',
      documento: '',
      nombre: '',
      email: '',
      telefono: '',
      tipoProducto: '',
      mensaje: ''
    },
    validators: {
      onChange: formSchema
    }
  })

  return (

    <form>
      <div className="grid grid-cols-2 gap-5">
        <form.Field
          name="tipoDocumento"
          children={(field) => (
            <div className="space-y-4">
              <label htmlFor="" className="text-sm font-medium">Tipo de documento</label>
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
        />
        <form.Field
          name="documento"
          children={(field) => (
            <div className="space-y-4">
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
        />
        <form.Field
          name="nombre"
          children={(field) => (
            <div className="space-y-4">
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
        />
        <form.Field
          name="nombre"
          children={(field) => (
            <div className="space-y-4">
              <label htmlFor="" className="text-sm font-medium">Correo electrónico</label>
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
        <form.Field
          name="nombre"
          children={(field) => (
            <div className="space-y-4">
              <label htmlFor="" className="text-sm font-medium">Teléfono celular</label>
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
        <form.Field
          name="nombre"
          children={(field) => (
            <div className="space-y-4">
              <label htmlFor="" className="text-sm font-medium">Tipo de produco</label>
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
        />
        <form.Field
          name="nombre"
          children={(field) => (
            <div className="space-y-4 col-span-2">
              <label htmlFor="" className="text-sm font-medium">Mensaje</label>
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
        />
      </div>

      <div className="pt-4 pb-5 flex items-center">
        <input type="checkbox" name="" id="" className="appearance-none size-4 m-2 border-2 border-gray-400 rounded-md checked:bg-secn-blue checked:border-transparent focus:outline-none cursor-pointer" />
        <p className="text-sm">He leído y acepto las finalidades descritas en la política de protección de datos de Promotec conforme a la ley 1581 de 2012 y el Decreto 1074 de 2015.</p>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="px-20 py-3 rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Enviar</button>
      </div>

    </form>
  )
}

const Contact: React.FC = () => {

  return (
    <>
      <header className="h-[500px] bg-princ-blue"></header>

      <section className="py-28 bg-gray1">
        <Wrapper>
          <div className="flex gap-10">
            <div className="relative">
              <div className="size-[576px] bg-[url('/promotec.portal/images/young-happy-couple.jpg')] bg-cover bg-center mask-[url('/promotec.portal/icons/p.svg')] mask-no-repeat mask-center mask-size-contain">
              </div>
              <POutlinedIcon className="size-[576px] absolute top-0 left-0 -ml-6 rotate-12" />
            </div>

            <div className="">
              <div className="space-y-[30px]">
                <h2 className="text-[40px] text-secn-blue font-bold">Nuestros canales de atención</h2>
                <p className="text-[20px] text-text4 font-medium">Si tienes preguntas, necesitas ayuda o deseas más información sobre nuestros productos y servicios, no dudes en comunicarte con nosotros.</p>
              </div>
              <ul className="space-y-[30px] mt-[100px]">
                <li className="flex items-center gap-5">
                  <div className="size-16 rounded-full bg-princ-blue grid place-items-center">
                    <PhoneIcon className="size-6 text-secn-blue" />
                  </div>
                  <div className="space-y-1">
                    <h6 className="">Línea nacional:</h6>
                    <h5 className="text-[20px] text-secn-blue font-bold">(601) 742 3700</h5>
                  </div>
                </li>
                <li className="flex items-center gap-5">
                  <div className="size-16 rounded-full bg-princ-blue grid place-items-center">
                    <WhatsappIcon className="size-6 text-secn-blue" />
                  </div>
                  <div className="space-y-1">
                    <h6 className="">Chat en línea:</h6>
                    <h5 className="text-[20px] text-secn-blue font-bold">+ 57 310 851 5340</h5>
                  </div>
                </li>
                <li className="flex items-center gap-5">
                  <div className="size-16 rounded-full bg-princ-blue grid place-items-center">
                    <MailIcon className="size-6 text-secn-blue" />
                  </div>
                  <div className="space-y-1">
                    <h6 className="">Correo electrónico:</h6>
                    <h5 className="text-[20px] text-secn-blue font-bold">servicioalcliente@promotec.com.co</h5>
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

            <div className="py-10 px-8 rounded-[30px] bg-text2 space-y-8">
              <h2 className="text-4xl text-center text-white font-extrabold">¿Necesitas acompañamiento en tu proceso de indemnización?</h2>
              <div className="flex justify-center">
                <button className="px-20 py-3 rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Ver más</button>
              </div>
            </div>
            <div className="py-16 px-28 rounded-[30px] bg-white2">
              <div className="space-y-8 mb-10">
                <h3 className="text-[30px] text-text text-center font-bold">¿Quieres adquirir una póliza de seguros?</h3>
                <p className="text-[20px] text-text4 text-center font-medium">Déjanos tus datos y uno de nuestros asesores comerciales se pondrá en contacto contigo:</p>
                <ContactForm />
              </div>
            </div>

          </div>
        </Wrapper>
      </section>

      <section className="py-[100px] bg-princ-blue">
        <Wrapper>
          <div className="space-y-10">
            <div className="space-y-[30px] w-10/12 mx-auto">
              <h3 className="text-3xl text-center text-secn-blue font-bold">Tu opinión es muy importante para nosotros</h3>
              <p className="text-[20px] text-center text-text4 font-medium">En caso de una emergencia, contacta directamente al equipo de asistencia inmediata de cada aseguradora, disponible las 24 horas del día, los 7 días de la semana.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[448px]">
              <div className="relative flex flex-col justify-center gap-12 px-32 rounded-[30px] bg-text2">
                <h4 className="text-[40px] text-princ-blue leading-none font-semibold">
                  <div className="">Radica</div>
                  <div className="text-white">una PQRS</div>
                </h4>
                <div className="flex justify-center">
                  <button className="py-3 w-[260px] flex justify-center rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Crear</button>
                </div>
              </div>
              <div className="relative flex flex-col justify-center gap-12 px-32 rounded-[30px] bg-text2">
                <h4 className="text-[40px] text-princ-blue leading-none font-semibold">
                  <div className="">Consulta</div>
                  <div className="text-white">una PQRS</div>
                </h4>
                <div className="flex justify-center">
                  <button className="py-3 w-[260px] flex justify-center rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Consultar</button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default Contact;
