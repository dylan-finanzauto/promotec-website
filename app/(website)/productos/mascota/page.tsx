import Breadcrumb from "@/modules/shared/components/Breadcrumb";
import RichText from "@/modules/shared/components/RichText";
import Accordion from "@/modules/shared/ui/Accordion";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { ProductBanner } from "@/modules/website/ui/Banner";
import { BenefitCard } from "@/modules/website/ui/Benefits";
import Insurers from "@/modules/website/ui/Insurers";
import PlanCard from "@/modules/website/ui/PlanCard";
import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    title: "Todas las",
    subtitle: "Coberturas",
    coverages: ["Daños a terceros.", "Muerte accidental.", "Reembolso funerario por accidente.", "Guardería.", "Reembolso por gastos médicos.", "Refuerzo de vacunas.", "Pipeta anti pulgas.", "Ayuda en localización por hurto o extravío de la mascota."]
  },
  {
    title: "Todas las",
    subtitle: "Asistencias",
    coverages: ["Asistencia por indigestión de cuerpos extraños.", "Asistencia estética.", "Asistencia educativa.", "Asistencia servicio de paseo.", "Asistencia de ambulancia.", "Teleorientación Veterinaria."]
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
    question: "¿Quién debe asumir el pago del seguro?",
    answer: "El pago del seguro está a tu cargo como propietario de la vivienda."
  },
  {
    question: "¿Qué documentación se requiere para expedir el seguro?",
    answer: "La documentación que se requiere para expedir póliza es Sarlaft Persona Natural y/o, Persona Jurídica, formulario de solicitud de seguro, Copia documento de identidad, certificado laboral original, desprendibles de pago. Entre otros."
  },
  {
    question: "¿Qué es el SARLAFT y en qué momento lo debo diligenciar?",
    answer: "El SARLAFT es un documento de control que nos exige la Superintendencia Financiera para prevenir el lavado de activos y financiación del terrorismo. Lo debes diligenciar cuando vas a contratar la póliza por primera vez o cuando la compañía aseguradora lo solicite."
  },
  {
    question: "¿Cuál es el costo aproximado del seguro de arrendamiento?",
    answer: "Corresponde aproximadamente al 50% del canon de arrendamiento mensual, más cuota de administración, cuota aproximada de servicios públicos. Sí aplica."
  },
  {
    question: "¿Cuánto tiempo de vigencia tiene el seguro de arrendamiento?",
    answer: "El seguro de arredramiento, se rige según el contrato o solicitud de asegurabilidad que se haya firmado y haya sido consensuado por ambas partes."
  },
  {
    question: "¿Qué hacer si tengo un siniestro o necesito una asistencia?",
    answer: "Comunícate al numeral de tu Aseguradora.\\nPara resolver cualquier duda, solicitud o inquietud, comunícate con nosotros a nuestra área de siniestros al (601) 7423700 opción 1-6-1 o al correo electrónico: analista.indemnizaciones@promotec.com.co"
  },
  {
    question: "¿Qué valor agregado me ofrece Promotec?",
    answer: "Te permite comparar entre diversas aseguradoras y encontrar la póliza ideal para ti.\\nTe brindamos asesoría personalizada en todo el proceso de compra."
  },
];

const Pet: React.FC = () => {
  return (
    <>
      <ProductBanner
        title="Protege a tu peludo ante"
        subtitle="cualquier eventualidad"
        background="/images/products/vehicle/banner.png"
        breadcrumbItems={[{ label: 'Productos', href: '../productos' }, { label: 'Póliza de Mascotas' }]}
      />

      <section className="py-11 bg-gray-1 flex flex-col items-center gap-6">
        <h3 className="text-xl font-bold text-text-4">¿Quieres cotizar tu Seguro de Mascotas?</h3>
        <Link
          href={"/productos/mascota/cotizar"}
        >
          <button className="px-20 py-4 rounded-[10px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Cotiza aquí</button>
        </Link>
      </section>

      <section className="py-10 bg-blue-terciary">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Image
              className="relative min-w-0 max-w-[576px] h-[576px] w-full overflow-hidden md:overflow-visible"
              src="/images/products/pet/p.png"
              alt=""
              width={576}
              height={576}
            />

            <div className="overflow-hidden">
              <div className="space-y-[50px]">
                <h2 className="text-[50px] text-text-4 font-bold">Conoce el Seguro de mascotas</h2>
                <p className="text-[20px] text-text-4 font-medium">
                  <RichText text="Tu mascota es parte esencial de tu familia y su bienestar es nuestra prioridad. La póliza te brinda tranquilidad los 365 días del año con asistencias veterinarias disponibles las 24 horas, para que siempre reciban el cuidado que merecen." />
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[80px] bg-gray-3">
        <Wrapper>
          <div className="space-y-10">
            <h4 className="text-[40px] text-center font-bold">Amparos</h4>
            <div className="grid justify-center grid-cols-[repeat(2,464px)] gap-6">
              {plans.map((p, i) => (
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
            <h4 className="text-[40px] text-text-4 text-center font-bold">Conoce los beneficios de contratar tu póliza de Mascotas con Promotec</h4>
            <p className="text-[20px] text-center text-text-3 font-medium">Encuentra el mejor Seguro de mascotas, con coberturas que brindan la tranquilidad que tú y tu mejor amigo merecen.</p>
            <div className="grid md:grid-cols-2 auto-rows-auto gap-5">
              {benefits.map((b, i) => <BenefitCard key={i} title={b.title} text={b.text} img={b.img} />)}
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

export default Pet;
