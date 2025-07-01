import Breadcrumb from "@/modules/shared/components/Breadcrumb";
import RichText from "@/modules/shared/components/RichText";
import { POutlinedIcon } from "@/modules/shared/components/SVGIcons";
import Accordion from "@/modules/shared/ui/Accordion";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { BenefitCard } from "@/modules/website/ui/Benefits";
import CoverageCard from "@/modules/website/ui/CoverageCard";
import Insurers from "@/modules/website/ui/Insurers";
import PlanCard from "@/modules/website/ui/PlanCard";
import Image from "next/image";
import Link from "next/link";

const coverages = [
  {
    title: "**Muerte por cualquier causa:** Si falleces por una enfermedad o accidente, se pagará el monto acordado a los beneficiarios.",
    img: "/images/products/life/coverages/1.jpg"
  },
  {
    title: "**Muerte accidental:** Cobertura adicional que duplica el respaldo económico ante cualquier tipo de accidente.",
    img: "/images/products/life/coverages/2.jpg"
  },
  {
    title: "**Invalidez por enfermedad o accidente:** Respaldo financiero para ti y tu familia en caso de sufrir una pérdida de funcionalidad superior al 50%.",
    img: "/images/products/life/coverages/3.jpg"
  },
]

const plans1 = [
  {
    title: "Plan",
    subtitle: "Básico",
    coverages: ["Muerte por accidente o enfermedad.", "Incapacidad, desmembración o invalidez por enfermedad o accidente."]
  },
  {
    title: "Coberturas",
    subtitle: "Opcionales",
    coverages: ["Auxilio funerario.", "Enfermedades graves.", "Muerte accidental.", "Renta diaria por hospitalización.", "Renta diaria por hospitalización.", "Renta diaria por incapacidad temporal."]
  },
  {
    title: "Asistencias",
    subtitle: "Opcionales",
    coverages: ["Bienestar y salud.", "Asistencia multifamiliar."]
  },
]

const plans2 = [
  {
    title: "Plan",
    subtitle: "Básico",
    coverages: ["Fallecimiento por cualquier causa.", "Incapacidad total o permanente."]
  },
  {
    title: "Cobertura",
    subtitle: "Opcional",
    coverages: ["Enfermedades graves."]
  },
]

const benefits = [
  {
    title: 'Seguro personalizado',
    text: 'Nuestro equipo de asesores especializados está a tu disposición para ayudarte a encontrar tu póliza de seguro ideal.',
    img: '/images/products/bike/benefits/1.png'
  },
  {
    title: 'Proceso 100% multicanal',
    text: '¡Simplificamos nuestro proceso!\n Todos nuestros canales se encuentran integrados y disponibles para que adquieras tu póliza de seguro.',
    img: '/images/products/bike/benefits/2.png'
  },
  {
    title: 'Atención personalizada',
    text: 'Nuestro equipo de asesores especializados te brindará el acompañamiento que mereces.',
    img: '/images/products/bike/benefits/3.png'
  },
  {
    title: 'Renovación digital',
    text: 'Facilitamos la renovación de tu Póliza de Bicicleta, renuévala sin salir de tu casa.',
    img: '/images/products/bike/benefits/4.png'
  },
]

const faqs = [
  {
    question: "¿Qué es y cómo funciona un seguro de vida?",
    answer: "Un seguro de vida es un contrato con el cual una compañía aseguradora se compromete a pagar a los beneficiarios designados o a los herederos legales en caso de fallecimiento del asegurado. Existen seguros que brindan cobertura para diversas causas de muerte, como la natural causada por enfermedad o vejez, así como la accidental, que te protege en caso de accidentes. Además, es común que el seguro de vida incluya protecciones adicionales por invalidez total y permanente. Estas coberturas adicionales proporcionan seguridad adicional al asegurado y a sus seres queridos en situaciones imprevistas."
  },
  {
    question: "¿Por qué es importante contar con un seguro de vida?",
    answer: "Una póliza de vida te brinda protección económica frente a eventos que puedan afectar tu salud y resultar en fallecimiento o invalidez. Tanto tú como tus familiares, e incluso tus beneficiarios, pueden contar con respaldo económico en caso de tu ausencia."
  },
  {
    question: "¿Cómo hago para cambiar los beneficiarios de mi seguro de vida?",
    answer: "Por medio de un documento en el cual informes a tu aseguradora que deseas cambiar los beneficiarios de tu póliza de vida, detallando el parentesco y porcentaje asignado a cada beneficiario."
  },
  {
    question: "¿Quién puede realizar el proceso de afectación de la póliza de vida?",
    answer: "Únicamente los beneficiarios designados por el asegurado al momento del siniestro que figuren dentro de la carátula del seguro de vida."
  },
  {
    question: "¿Cuál es la edad mínima para adquirir una póliza de vida?",
    answer: "Para adquirir un seguro de vida individual o seguro de vida deudor, la edad mínima de ingreso es de 18 años."
  },
  {
    question: "¿Si voy a adquirir un crédito o si tengo uno vigente es obligatorio tener un seguro de vida deudor?",
    answer: "Toda persona natural con obligaciones financieras debe contar con una póliza de vida para deudores, que respalda tu deuda en caso de muerte, incapacidad total o permanente."
  },
  {
    question: "¿Cuál es la vigencia del Seguro de Vida Deudor?",
    answer: "La vigencia es de 1 año y debe ser renovada automáticamente hasta que se finalice con la obligación financiera."
  },
  {
    question: "¿Puedo cancelar mi seguro de vida y contratar con otra compañía?",
    answer: "Sí, de acuerdo con la voluntad del asegurado puede contratar con la aseguradora de tu preferencia."
  },
];

const Life: React.FC = () => {
  return (
    <>
      <div className="h-[448px] relative bg-blue-terciary">
        <Image className="fade-left hidden md:block absolute right-0 top-0 h-full w-full object-cover object-center" width={200} height={200} src="/images/products/vehicle/banner.png" alt="" />
        <div className="h-56 min-w-0 w-2/5 absolute top-1/2 -translate-y-1/2 left-0 rounded-e-[40px] bg-blue-primary"></div>
        <Wrapper>
          <div className="absolute top-0 mt-10">
            <Breadcrumb items={[{ label: 'Productos', href: '../productos' }, { label: 'Póliza de Vida' }]} />
          </div>
          <h1 className="h-56 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center leading-none text-4xl md:text-[50px] text-blue-terciary">
            <RichText text="Tu futuro, **seguro y**\n **protegido**" />
          </h1>
        </Wrapper>
      </div>

      <section className="py-11 bg-gray-1 flex flex-col items-center gap-6">
        <h3 className="text-xl font-bold text-text-4">¿Quieres cotizar tu Seguro de Vida?</h3>
        <Link
          href={"/productos/vida/cotizar"}
        >
          <button className="px-20 py-4 rounded-[10px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Cotiza aquí</button>
        </Link>
      </section>

      <section className="py-10 bg-blue-terciary">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="relative min-w-0 max-w-[576px] h-[576px] w-full overflow-hidden md:overflow-visible">
              <div
                className="fade-left w-full h-full bg-cover bg-center mask-no-repeat mask-center mask-size-contain"
                style={{
                  backgroundImage: `url(/images/products/life/p.png)`,
                  maskImage: `url(/icons/p.svg)`
                }}
              />
              <POutlinedIcon className="w-full h-full absolute top-0 left-0 -ml-6 rotate-12" />
            </div>

            <div className="overflow-hidden">
              <div className="space-y-[50px]">
                <h2 className="text-[50px] text-text-4 font-bold">Conoce el Seguro de Vida</h2>
                <p className="text-[20px] text-text-4 font-medium">
                  <RichText text="Tu familia es tu mayor prioridad. El seguro de vida te brinda una protección integral con beneficios como respaldo financiero, auxilio exequial y cobertura para tus créditos, garantizando tu bienestar en todo momento." />
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[70px]">
        <Wrapper>
          <div className="space-y-10">
            <h2 className="text-3xl text-center text-blue-primary font-bold">Conoce algunas coberturas</h2>
            <p className="text-xl text-center text-text-3 font-medium">Dependiendo del plan que elijas, el  Seguro de Vida puede brindar protección en los siguientes casos:</p>
            <div className="grid grid-cols-3 auto-rows-[368px] overflow-x-auto gap-4">
              {coverages.map((c, i) => (
                <CoverageCard
                  key={i}
                  title={c.title}
                  img={c.img}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[80px] bg-gray-3">
        <Wrapper>
          <div className="space-y-10">
            <h4 className="text-[40px] text-center font-bold">Seguro de Vida Individual</h4>
            <div className="grid justify-center grid-cols-[repeat(3,464px)] gap-6">
              {plans1.map((p, i) => (
                <PlanCard
                  key={i}
                  title={p.title}
                  subtitle={p.subtitle}
                  coverages={p.coverages}
                />
              ))}
            </div>
            <h4 className="text-[40px] text-center font-bold">Seguro de Vida Deudor</h4>
            <div className="grid justify-center grid-cols-[repeat(2,464px)] gap-6">
              {plans2.map((p, i) => (
                <PlanCard
                  key={i}
                  title={p.title}
                  subtitle={p.subtitle}
                  coverages={p.coverages}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      <Insurers />

      <section className="py-[100px] bg-blue-terciary">
        <Wrapper>
          <div className="space-y-[30px] w-10/12 mx-auto">
            <h4 className="text-[40px] text-text-4 text-center font-bold">Conoce los beneficios de Asegurar tu Bicicleta con Promotec</h4>
            <p className="text-[20px] text-center text-text-3 font-medium">Encuentra el mejor Seguro para Bici, protege tu bicicleta contra robo, daño y mucho más.</p>
            <div className="grid md:grid-cols-2 auto-rows-auto gap-5">
              {benefits.map((b, i) => <BenefitCard key={i} title={b.title} text={b.text} img={b.img} />)}
            </div>
            <div className="flex justify-center">
              <Link
                href={"/productos/vehiculo/cotizar"}
              >
                <button className="px-20 py-4 rounded-[10px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Cotizar</button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[100px] bg-white">
        <Wrapper>
          <div className="space-y-10">
            <h4 className="text-[40px] text-center font-bold">Preguntas frecuentes</h4>
            <div className="space-y-[10px]">
              {faqs.map((f, i) => <Accordion key={i} title={f.question} content={f.answer} />)}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default Life;
