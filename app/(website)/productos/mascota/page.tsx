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
    text: '¡Simplificamos nuestro proceso!\\n Todos nuestros canales se encuentran integrados y disponibles para que adquieras tu póliza de seguro.',
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
    question: "¿Qué cubre?",
    answer: "Responsabilidad civil por daños a terceros: Cubre daños materiales, lesiones o muerte causados por tu mascota a otras personas o bienes.\\n Gastos veterinarios: Incluye consultas, hospitalización, exámenes, procedimientos y medicamentos.\\n Gastos exequiales o funerarios: En caso de fallecimiento o eutanasia de la mascota.\\n Gastos por robo o pérdida: Auxilio económico para la búsqueda de la mascota\\n Entre otros amparos."
  },
  {
    question: "¿Qué edad deben tener las mascotas para el ingreso de la póliza?",
    answer: "Desde los 3 meses hasta los 12 años para nuevas pólizas. (Depende de la aseguradora)\\n Renovación hasta los 11 años "
  },
  {
    question: "¿Qué mascotas cubren en la póliza?",
    answer: "Esta póliza va dirigida únicamente para perros y gatos domésticos."
  },
  {
    question: "¿Puedo elegir cualquier veterinario?",
    answer: "La mayoría de pólizas permiten usar cualquier veterinario, con reembolso de gastos - con previa autorización\\n Algunas aseguradoras tienen convenios con clínicas específicas (tarifas preferenciales o atención sin pago anticipado)"
  },
  {
    question: "¿Qué pasa si mi mascota muere?",
    answer: "La póliza puede incluir servicio funerario, cremación o eutanasia digna\\n Algunas ofrecen apoyo psicológico al dueño"
  },
];

const Pet: React.FC = () => {
  return (
    <>
      <ProductBanner
        title="Protege a tu peludo ante"
        subtitle="cualquier eventualidad"
        background="/images/products/pet/banner.jpg"
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
              className="relative shrink-0 min-w-0 max-w-[615px] h-[654px] w-full -my-16 overflow-hidden md:overflow-visible"
              src="/images/products/pet/p.png"
              alt=""
              width={615}
              height={654}
            />

            <div className="overflow-hidden">
              <div className="space-y-[50px]">
                <h2 className="text-[50px] leading-tight text-text-4 font-bold">
                  <RichText text="Conoce el Seguro\nde mascotas" />
                </h2>
                <p className="text-[20px] text-text-4 font-medium">
                  <RichText text="Tu mascota es parte esencial de tu familia y su bienestar es nuestra prioridad.\nLa póliza te brinda tranquilidad los 365 días del año con asistencias veterinarias disponibles las 24 horas, para que siempre reciban el cuidado que merecen." />
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[80px] bg-gray-3 relative overflow-hidden">
        <Wrapper>
          <div className="space-y-10">
            <h4 className="text-[40px] text-center font-bold">Amparos</h4>
            <div className="grid justify-center auto-cols-[450px] grid-flow-col gap-6">
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

        <Image
          className="absolute bottom-0 right-0 -mb-20 scale-x-[-1] object-cover"
          src="/images/products/pet/plan.png"
          alt=""
          width={645}
          height={512}
        />
      </section>

      <Insurers />

      <section className="py-[100px] bg-blue-terciary">
        <Wrapper>
          <div className="space-y-[30px]">
            <h4 className="text-[40px] text-text-4 text-center font-bold">Conoce los beneficios de contratar tu póliza de Mascotas con Promotec</h4>
            <p className="text-[20px] text-center text-text-3 font-medium">Encuentra el mejor Seguro de mascotas, con coberturas que brindan la tranquilidad que tú y tu mejor amigo merecen.</p>
            <div className="w-10/12 mx-auto grid md:grid-cols-2 auto-rows-auto gap-5">
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
