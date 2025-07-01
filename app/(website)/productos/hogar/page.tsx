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
    title: "**Eventos naturales:** Daños causados por terremotos, maremotos, huracanes, temblores, entre otros.",
    img: "/images/products/home/coverages/1.jpg"
  },
  {
    title: "**Eventos inesperados:** Daños causados por agua, incendios, rayos, hurto, entre otros.",
    img: "/images/products/home/coverages/2.jpg"
  },
  {
    title: "**Eventos de orden público:** Daños causados por protestas, marchas o actos indebidos de terceros, entre otros.",
    img: "/images/products/home/coverages/3.jpg"
  },
]

const plans = [
  {
    title: "Principales",
    subtitle: "Coberturas",
    coverages: ["Incendio.", "Responsabilidad civil extracontractual - propiedad.", "Responsabilidad civil extracontractual - familiar.", "Otros eventos de la naturaleza.", "Terremoto.", "Otros daños - rotura de vidrios.", "Daños por agua.", "Eventos de orden público."]
  },
  {
    title: "Algunas",
    subtitle: "Asistencias",
    coverages: ["Plomería, electricidad, cerrajería, vidriería.", "Asistencia de emergencia de gas.", "Asistencia jurídica al hogar.", "Asistencia de mascotas: incluye consultas veterinarias, gastos médicos por accidente, vacunación, auxilio de esterilización, eutanasia y cremación, entre otros.", "Servicio de traslado desde o hacia el predio asegurado.", "Servicio de vigilancia en eventos realizados en el Hogar asegurado."]
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
    question: "¿Qué es una Póliza de Hogar?",
    answer: "Un Seguro de Hogar brinda protección integral a tu vivienda y sus contenidos ante imprevistos por causas naturales, daños accidentales o hurtos, asegurando que tu inversión y esfuerzo estén respaldados en caso de cualquier eventualidad contratada en la póliza."
  },
  {
    question: "¿Es obligatorio tener una Póliza de Hogar?",
    answer: "Ser propietario de una vivienda no implica contratar un seguro para el hogar, a menos que el inmueble esté hipotecado. En ese caso, el seguro de hogar es requerido por la entidad financiera. Sin embargo, incluso si no tienes una hipoteca, contar con un seguro de hogar es altamente recomendable pues te respaldará en caso de una eventualidad contratada por la póliza."
  },
  {
    question: "¿Qué cubre una Póliza de Hogar?",
    answer: "La cobertura básica abarca incendio, terremoto, hurto, explosión, daño por agua, vientos fuertes, entre otros. Esto permite salvaguardar el hogar frente a cualquier peligro. Además, algunas compañías ofrecen coberturas adicionales para proteger el equipo eléctrico y electrónico, joyería, obras de arte, bicicletas, entre otros."
  },
  {
    question: "¿Cuánto cuesta una Póliza de Hogar?",
    answer: "El precio de la prima de un seguro de hogar se basa en varios factores que incluyen el valor asegurado, las coberturas seleccionadas, la ubicación de la vivienda y sus características, entre otros aspectos relevantes."
  },
  {
    question: "¿Puedo asegurar una vivienda propia que tengo arrendada?",
    answer: "Aunque no es obligatorio tener un Seguro de Hogar es altamente recomendable si eres propietario, lo ideal sería contar con un seguro que proteja la vivienda de los posibles daños causados por los inquilinos."
  },
  {
    question: "¿Puedo adquirir una Póliza de Hogar si soy arrendatario?",
    answer: "Si eres inquilino podrás adquirir un Seguro de Hogar para contenidos y así proteger tus pertenencias en caso de cualquier eventualidad contratada en la póliza."
  },
  {
    question: "¿Qué es edificio y contenido?",
    answer: "En un Seguro de Hogar, el término \"edificio\" se refiere a la estructura física de la vivienda y sus elementos de construcción fijos e inseparables, esto incluye columnas, techo, paredes, ventanas, así como tuberías, pisos, además de las instalaciones de gas y eléctricas.  En cambio, el \"contenido\" hace referencia a todos los objetos y pertenencias que se encuentran dentro de la vivienda, pero que no forman parte de su estructura."
  },
];

const Home: React.FC = () => {
  return (
    <>
      <div className="h-[448px] relative bg-blue-terciary">
        <Image className="fade-left hidden md:block absolute right-0 top-0 h-full w-full object-cover object-center" width={200} height={200} src="/images/products/vehicle/banner.png" alt="" />
        <div className="h-56 min-w-0 w-2/5 absolute top-1/2 -translate-y-1/2 left-0 rounded-e-[40px] bg-blue-primary"></div>
        <Wrapper>
          <div className="absolute top-0 mt-10">
            <Breadcrumb items={[{ label: 'Productos', href: '../productos' }, { label: 'Póliza de Hogar' }]} />
          </div>
          <h1 className="h-56 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center leading-none">
            <span className="text-4xl md:text-[50px] text-blue-terciary font-semibold">Más que tu casa, son</span>
            <span className="text-4xl md:text-[50px] text-white font-extrabold">tus historias y vivencias</span>
          </h1>
        </Wrapper>
      </div>

      <section className="py-11 bg-gray-1 flex flex-col items-center gap-6">
        <h3 className="text-xl font-bold text-text-4">¿Quieres cotizar tu Seguro de Hogar?</h3>
        <Link
          href={"/productos/hogar/cotizar"}
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
                  backgroundImage: `url(/images/products/home/p.png)`,
                  maskImage: `url(/icons/p.svg)`
                }}
              />
              <POutlinedIcon className="w-full h-full absolute top-0 left-0 -ml-6 rotate-12" />
            </div>

            <div className="overflow-hidden">
              <div className="space-y-[50px]">
                <h2 className="text-[50px] text-text-4 font-bold">Conoce el Seguro de Hogar</h2>
                <p className="text-[20px] text-text-4 font-medium">
                  <RichText text="Tu hogar es uno de tus bienes más importantes. Con un seguro de hogar, proteges tu vivienda y todo lo que hay en ella frente a imprevistos como robos, incendios o daños accidentales.\n¡Vive con la tranquilidad de estar respaldado cuando más lo necesitas!" />
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[70px]">
        <Wrapper>
          <div className="space-y-10">
            <h2 className="text-3xl text-center text-blue-primary font-bold">Conoce algunas coberturas de tu Póliza de Hogar</h2>
            <p className="text-xl text-center text-text-3 font-medium">Dependiendo del plan que elijas, el Seguro de Hogar te ofrece protección en los siguientes casos:</p>
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
            <h4 className="text-[40px] text-center font-bold">Póliza de Hogar</h4>
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

export default Home;
