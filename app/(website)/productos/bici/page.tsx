import Breadcrumb from "@/modules/shared/components/Breadcrumb";
import RichText from "@/modules/shared/components/RichText";
import { InfoCircleIcon } from "@/modules/shared/components/SVGIcons";
import Accordion from "@/modules/shared/ui/Accordion";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import { BenefitCard } from "@/modules/website/ui/Benefits";
import CoverageCard from "@/modules/website/ui/CoverageCard";
import Insurers from "@/modules/website/ui/Insurers";
import PlanCard from "@/modules/website/ui/PlanCard";
import Image from "next/image";
import Link from "next/link";

const coverages = [
  {
    title: "**Bicicletas tradicionales de pedal (ruta, montaña y urbana)**",
    img: getAssetPath("/images/products/bike/coverages/1.jpg")
  },
  {
    title: "**Bicicletas tradicionales plegables**",
    img: getAssetPath("/images/products/bike/coverages/2.jpg")
  },
  {
    title: "**Bicicletas o patinetas eléctricas**",
    img: getAssetPath("/images/products/bike/coverages/3.jpg")
  },
]

const plans = [
  {
    title: "Coberturas",
    subtitle: "Obligatorias",
    coverages: ["Daños a terceros.", "Pérdida total por daños.", "Pérdida total por hurto."]
  },
  {
    title: "Algunas",
    subtitle: "Asistencias",
    coverages: ["Transporte en caso de varada o accidente.", "Asistencia en caso de llantas estalladas.", "Asistencia jurídica.", "Rotura de accesorios.", "Traslado en caso de lesión."]
  },
  {
    title: "Otros",
    subtitle: "Amparos",
    coverages: ["Accidentes personales.", "Renta diaria por hospitalización.", "Coberturas obligatorias.", "Todas las asistencias."]
  },
]

const benefits = [
  {
    title: 'Seguro personalizado',
    text: 'Nuestro equipo de asesores especializados está a tu disposición para ayudarte a encontrar tu póliza de seguro ideal.',
    img: getAssetPath('/images/products/bike/benefits/1.png')
  },
  {
    title: 'Proceso 100% multicanal',
    text: '¡Simplificamos nuestro proceso!\n Todos nuestros canales se encuentran integrados y disponibles para que adquieras tu póliza de seguro.',
    img: getAssetPath('/images/products/bike/benefits/2.png')
  },
  {
    title: 'Atención personalizada',
    text: 'Nuestro equipo de asesores especializados te brindará el acompañamiento que mereces.',
    img: getAssetPath('/images/products/bike/benefits/3.png')
  },
  {
    title: 'Renovación digital',
    text: 'Facilitamos la renovación de tu Póliza de Bicicleta, renuévala sin salir de tu casa.',
    img: getAssetPath('/images/products/bike/benefits/4.png')
  },
]

const faqs = [
  {
    question: "¿Por qué tener una póliza de bicicletas?",
    answer: "La Bicicleta es uno de los medios de transporte principales en términos de movilidad, lo que genera que las personas acudan a bicicletas o patinetas eléctricas (scooters) para mayor comodidad y agilidad.  Ello ha generado la necesidad de cubrir sus bicis frente a riesgos de nuestras ciudades, tales como daños accidentales, daños causados a terceros, accidentes sufridos, hurtos, entre otros."
  },
  {
    question: "¿Cómo comprar el seguro?",
    answer: "Si estás interesado en comprar el seguro para tu bicicleta o patineta eléctrica; puedes cotizar directamente en el sitio web, chatear con un asesor vía WhatsApp, o solicitar que nos comuniquemos contigo vía telefónica y te asesoramos durante todo el proceso."
  },
  {
    question: "¿Qué coberturas tiene el seguro de bicicletas o patinetas?",
    answer: "La póliza de bicicleta cuenta con cobertura de daños a terceros, pérdida total por accidente y pérdida total por hurto. Sin embargo, hay coberturas adicionales modulares muy útiles para los usuarios, tales como asistencia jurídica en caso de ocasionar daños a otras personas con la bicicleta, asistencias en ruta, reposición de accesorios, reembolso por gastos médicos, entre otros según la opción contratada."
  },
  {
    question: "¿Qué valor tiene el seguro de bicicletas?",
    answer: "Esto depende de varios factores tales como valor de compra de la bicicleta, fecha de compra, coberturas contratadas, entre otros factores."
  },
];

const Bici: React.FC = () => {
  return (
    <>
      <div className="h-[448px] relative bg-blue-terciary">
        <Image className="fade-left hidden md:block absolute right-0 top-0 h-full w-full object-cover object-center" width={200} height={200} src={getAssetPath("/images/products/vehicle/banner.png")} alt="" />
        <div className="h-56 min-w-0 w-2/5 absolute top-1/2 -translate-y-1/2 left-0 rounded-e-[40px] bg-blue-primary"></div>
        <Wrapper>
          <div className="absolute top-0 mt-10">
            <Breadcrumb items={[{ label: 'Productos', href: '../productos' }, { label: 'Póliza de Bicis' }]} />
          </div>
          <h1 className="h-56 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center leading-none">
            <span className="text-4xl md:text-[50px] text-blue-terciary font-semibold">Rueda seguro</span>
            <span className="text-4xl md:text-[50px] text-white font-extrabold">con tu Póliza de Bici</span>
          </h1>
        </Wrapper>
      </div>

      <section className="py-11 bg-gray-1 flex flex-col items-center gap-6">
        <h3 className="text-xl font-bold text-text-4">¿Quieres cotizar tu Seguro de Bici?</h3>
        <Link
          href={"/productos/bici/cotizar"}
        >
          <button className="px-20 py-4 rounded-[10px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Cotiza aquí</button>
        </Link>
      </section>

      <section className="py-10 bg-blue-terciary">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="relative min-w-0 max-w-[576px] h-[576px] w-full overflow-hidden md:overflow-visible">
              <Image width={576} height={576} className="w-full h-full absolute top-0 left-0 text-blue-primary" src={getAssetPath("/images/products/bike/p.png")} alt="" />
            </div>
            <div className="overflow-hidden">
              <div className="space-y-[50px]">
                <h2 className="text-[50px] text-text-4 font-bold">Conoce el Seguro de Bici</h2>
                <p className="text-[20px] text-text-4 font-medium">
                  <RichText text="Con el seguro de bicicletas, tú tienes el control.\n¡Arma tu póliza a la medida de tus necesidades y pedalea con total tranquilidad!" />
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[70px]">
        <Wrapper>
          <div className="space-y-10">
            <h2 className="text-3xl text-center text-blue-primary font-bold">Conoce qué bicis puedes asegurar</h2>
            <p className="text-xl text-center text-text-3 font-medium">No importa el tipo de bicicleta que tengas ni cómo la uses, tenemos una póliza diseñada para adaptarse perfectamente a tu estilo de vida.</p>
            <div className="grid grid-cols-3 auto-rows-[368px] overflow-x-auto gap-4">
              {coverages.map((c, i) => (
                <CoverageCard
                  key={i}
                  title={c.title}
                  img={c.img}
                />
              ))}
            </div>
            <div className="p-5 rounded-[14px] bg-[#E5EAF8] flex gap-[10px] max-w-[715px] w-full min-w-0 mx-auto">
              <InfoCircleIcon className="size-5 text-blue-primary shrink-0" />
              <div className="flex flex-col gap-[10px]">
                <span className="text-[15px] text-blue-primary font-bold">Ten en cuenta</span>
                <span className="text-[15px] text-blue-primary font-medium">El valor mínimo para asegurar una bici es $500.000 y el valor máximo es $70.000.000.  Ten en cuenta, que de acuerdo a cada caso, se deberá realizar una inspección virtual.</span>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[80px] bg-gray-3">
        <Wrapper>
          <div className="space-y-10">
            <h4 className="text-[40px] text-center font-bold">Arma tu plan</h4>
            <div className="grid grid-cols-[repeat(3,464px)] gap-6">
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

export default Bici;
