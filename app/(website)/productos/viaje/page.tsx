import Breadcrumb from "@/modules/shared/components/Breadcrumb";
import RichText from "@/modules/shared/components/RichText";
import Accordion from "@/modules/shared/ui/Accordion";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { BenefitCard } from "@/modules/website/ui/Benefits";
import CoverageCard from "@/modules/website/ui/CoverageCard";
import Insurers from "@/modules/website/ui/Insurers";
import Image from "next/image";
import Link from "next/link";

const coverages = [
  {
    title: "**Olvídate de los gastos imprevistos:** Por enfermedad, accidente, retrasos en vuelos, pérdida de equipaje y otras.",
    img: "/images/products/travel/coverages/1.jpg"
  },
  {
    title: "**Cobertura en todo el mundo:** Viaja tranquilo a tus destinos internacionales con las mejores coberturas.",
    img: "/images/products/travel/coverages/2.jpg"
  },
  {
    title: "**Protegido durante todo el viaje:** Según el plan que elijas puedes tener hasta 100 mil USD para utilizar tus coberturas.",
    img: "/images/products/travel/coverages/3.jpg"
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
    question: "¿Qué hacer en caso de necesitar una asistencia?",
    answer: "Tu seguro de asistencia en viajes te ofrece asistencia las 24 horas del día, los 365 días del año. Puedes comunicarte con tu aseguradora al WhatsApp: +1 (860) 22187561, dentro de las primeras 72 horas, tras haber ocurrido el evento."
  },
  {
    question: "¿Puedo realizar cambios en la vigencia luego de adquirir mi asistencia?",
    answer: "Sí, puedes ponerte en contacto con tu asesor e indicarle la extensión que deseas realizar. Esta solo la puedes realizar antes de que concluya la vigencia de tu asistencia."
  },
  {
    question: "¿La asistencia en viajes cubre la práctica deportiva?",
    answer: "No, esta es una cobertura adicional. Debes informar a tu asesor al momento de tomar la asistencia para que quede en el contrato."
  },
  {
    question: "¿La asistencia en viajes cubre mujeres embarazadas?",
    answer: "Sí, cubre máximo hasta 32 semanas de gestación. Cuenta con coberturas en asistencias médicas por enfermedades, controles o ecografías de emergencia, enfermedad o accidente que ponga en riesgo la vida de la madre o del hijo. Está prestación sólo tendrá una vigencia máxima de 30 días, contados a partir del inicio del viaje que figure en los documentos."
  },
];

const Travel: React.FC = () => {
  return (
    <>
      <div className="h-[448px] relative bg-blue-terciary">
        <Image className="fade-left hidden md:block absolute right-0 top-0 h-full w-full object-cover object-center" width={200} height={200} src="/images/products/vehicle/banner.png" alt="" />
        <div className="h-56 min-w-0 w-2/5 absolute top-1/2 -translate-y-1/2 left-0 rounded-e-[40px] bg-blue-primary"></div>
        <Wrapper>
          <div className="absolute top-0 mt-10">
            <Breadcrumb items={[{ label: 'Productos', href: '../productos' }, { label: 'Seguro de Viajes' }]} />
          </div>
          <h1 className="h-56 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center leading-none text-4xl md:text-[50px] text-blue-terciary">
            <RichText text="Viaja con la tranquilidad de\n**saber que estás protegido**" />
          </h1>
        </Wrapper>
      </div>

      <section className="py-11 bg-gray-1 flex flex-col items-center gap-6">
        <h3 className="text-xl font-bold text-text-4">¿Quieres cotizar tu Seguro de Viaje?</h3>
        <Link
          href={"/productos/viaje/cotizar"}
        >
          <button className="px-20 py-4 rounded-[10px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Cotiza aquí</button>
        </Link>
      </section>

      <section className="py-10 bg-blue-terciary">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Image
              className="relative min-w-0 max-w-[600px] h-[600px] w-full -my-10 overflow-hidden md:overflow-visible"
              src="/images/products/travel/p.png"
              alt=""
              width={576}
              height={576}
            />

            <div className="overflow-hidden">
              <div className="space-y-[50px]">
                <h2 className="text-[50px] text-text-4 font-bold">Conoce el Seguro de Viajes</h2>
                <p className="text-[20px] text-text-4 font-medium">
                  <RichText text="¡Viaja tranquilo y con el respaldo que necesitas!\nTe ofrecemos soluciones rápidas y efectivas para garantizarte un viaje seguro y sin contratiempos." />
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[70px]">
        <Wrapper>
          <div className="space-y-10">
            <h2 className="text-3xl text-center text-blue-primary font-bold">¿Por qué tener un Seguro de Viajes?</h2>
            <p className="text-xl text-center text-text-3 font-medium">Viajar es una experiencia emocionante, pero los imprevistos pueden ocurrir en cualquier momento.  No importa a dónde vayas, lleva contigo la seguridad de estar respaldado.</p>
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

      <Insurers />

      <section className="py-[100px] bg-blue-terciary">
        <Wrapper>
          <div className="space-y-[30px] w-10/12 mx-auto">
            <h4 className="text-[40px] text-text-4 text-center font-bold">Conoce los beneficios de contratar tu Asistencia en Viaje con Promotec</h4>
            <p className="text-[20px] text-center text-text-3 font-medium">Encuentra el mejor Seguro, con coberturas que brindan la tranquilidad que tú y tus compañeros de viaje necesitan.</p>
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

export default Travel;
