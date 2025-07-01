import Breadcrumb, { BreadcrumbItem } from "@/modules/shared/components/Breadcrumb";
import RichText from "@/modules/shared/components/RichText";
import { POutlinedIcon } from "@/modules/shared/components/SVGIcons";
import Accordion from "@/modules/shared/ui/Accordion";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { ProductBanner } from "@/modules/website/ui/Banner";
import { BenefitCard } from "@/modules/website/ui/Benefits";
import CoverageCard from "@/modules/website/ui/CoverageCard";
import Insurers from "@/modules/website/ui/Insurers";
import PlanCard from "@/modules/website/ui/PlanCard";
import Image from "next/image";
import Link from "next/link";

const coverages = [
  {
    title: "**Traslado:** Desplazamiento a ciudad de residencia o repatriación.",
    img: "/images/products/funeral/coverages/1.jpg"
  },
  {
    title: "**Suministro de ataúd:** provisión de un ataúd adecuado en caso de fallecimiento del asegurado, como parte de los servicios funerarios ofrecidos.",
    img: "/images/products/funeral/coverages/2.jpg"
  },
  {
    title: "**Servicio de cremación:** Cubre los costos y la coordinación del proceso de cremación en caso de fallecimiento del asegurado.",
    img: "/images/products/funeral/coverages/3.jpg"
  },
]

const plans = [
  {
    title: "Seguro",
    subtitle: "Exequial",
    coverages: ["Amparo fallecimiento por cualquier causa.", "Amparo de accidentes personales.", "Amparo de renta mensual por fallecimiento.", "Servicios de destino final (inhumación, cremación).", "Servicio de transporte para el desplazamiento de acompañantes.", "Traslado del fallecido al lugar de residencia.", "Servicio religioso."]
  },
  {
    title: "Servicio",
    subtitle: "Exequial",
    coverages: ["Gestión documental.", "Traslado a nivel nacional.", "Transporte para acompañantes.", "Sala de velación.", "Repatriación.", "Servicio exequial para mascotas."]
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
    question: "¿Qué es un seguro exequial?",
    answer: "El seguro funerario es una póliza que contribuye a sufragar costos finales tales como el ataúd o urna, los servicios funerarios, los servicios de cremación, entre otros."
  },
  {
    question: "¿Por qué es importante adquirir un seguro de exequias?",
    answer: "Cuando una persona fallece, la familia se encuentra con gastos inesperados. En ausencia de ahorros o recursos financieros para hacerles frente."
  },
  {
    question: "¿Quiénes se pueden asegurar en una póliza de Exequias?",
    answer: "Las condiciones y requisitos para asegurar a las personas varían según cada compañía. En general, se ofrecen coberturas para todas las edades, siendo la única restricción la edad de ingreso a la póliza. Así, algunas compañías permiten la entrada a personas hasta los 60 o 65 años."
  },
  {
    question: "¿Cuánto cuesta un seguro de Exequias?",
    answer: "Cuando se decide contratar una póliza de Exequias, es importante saber que el costo de la prima se determina principalmente por factores como el plan elegido, las coberturas contratadas y el tamaño del grupo familiar."
  },
];

const Funeral: React.FC = () => {

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Productos', href: '../productos' },
    { label: 'Póliza de Exequias' }
  ];

  return (
    <>
      <ProductBanner 
        background="/images/products/funeral/banner.jpg" 
        breadcrumbItems={breadcrumbItems} 
        title="Estar protegido en los" 
        subtitle="momentos más difíciles"
      />

      <section className="py-11 bg-gray-1 flex flex-col items-center gap-6">
        <h3 className="text-xl font-bold text-text-4">¿Quieres cotizar tu Póliza de Exequias?</h3>
        <Link
          href={"/productos/vida/cotizar"}
        >
          <button className="px-20 py-4 rounded-[10px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Cotiza aquí</button>
        </Link>
      </section>

      <section className="py-10 bg-blue-terciary">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Image
              className="relative shrink-0 min-w-0 max-w-[615px] h-[654px] w-full -my-16 overflow-hidden md:overflow-visible"
              src="/images/products/funeral/p.png"
              alt=""
              width={615}
              height={654}
            />

            <div className="overflow-hidden">
              <div className="space-y-[50px]">
                <h2 className="text-[50px] text-text-4 font-bold">Conoce los productos exequiales</h2>
                <p className="text-[20px] text-text-4 font-medium">
                  <RichText text="Te ofrecen el respaldo que tú y tu familia necesitan, cubriendo gastos y trámites esenciales para aliviar la carga económica y logística en momentos emocionalmente difíciles." />
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[70px]">
        <Wrapper>
          <div className="space-y-10">
            <h2 className="text-3xl text-center text-blue-primary font-bold">Conoce las condiciones de tu Seguro Exequial</h2>
            <p className="text-xl text-center text-text-3 font-medium">Asegura la tranquilidad de tus seres queridos con beneficios y coberturas para un servicio digno y respetuoso en los momentos más difíciles.</p>
            <div className="grid auto-cols-[minmax(220px,1fr)] grid-flow-col overflow-x-auto gap-4">
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
            <h4 className="text-[40px] text-center font-bold">Escoge tu solución integral</h4>
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

export default Funeral;
