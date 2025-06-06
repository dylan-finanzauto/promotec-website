import Breadcrumb from "@/modules/shared/components/Breadcrumb";
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
        title: "Bicicletas tradicionales de pedal (ruta, montaña y urbana)",
        img: getAssetPath("/images/products/bike/coverages/1.jpg")
    },
    {
        title: "Bicicletas tradicionales plegables",
        img: getAssetPath("/images/products/bike/coverages/2.jpg")
    },
    {
        title: "Bicicletas o patinetas eléctricas",
        img: getAssetPath("/images/products/bike/coverages/3.jpg")
    },
]

const plans = [
    {
        title: "Póliza",
        subtitle: "Básica",
        coverages: ["Responsabilidad civil - RCE.", "Pérdidas totales (daños - hurto).", "Eventos de la naturaleza. ", "Amparo patrimonial.", "Asistencia jurídica.", "Gastos de transporte PT."]
    },
    {
        title: "Póliza",
        subtitle: "Intermedia",
        coverages: ["Todas las coberturas básicas.", "Pérdida parcial (daños - hurto).", "Patios por inmovilización.", "Gastos casa cárcel.", "Grúa.", "Revisión en viaje.", "Emergencia en carretera.", "Asistencia plus.", "Marcación de seguridad."]
    },
    {
        title: "Póliza",
        subtitle: "Full",
        coverages: ["Todas las coberturas básicas.", "Todas las coberturas adicionales.", "Médico domiciliario."]
    },
]

const benefits = [
    {
        title: 'Seguro personalizado',
        text: 'Nuestro equipo de asesores especializados está a tu disposición para ayudarte a encontrar tu póliza de seguro ideal.',
        img: getAssetPath('/icons/benefit-001.svg')
    },
    {
        title: 'Proceso 100% multicanal',
        text: '¡Simplificamos nuestro proceso!  Cotiza y adquiere tu póliza de seguro online, sin salir de tu casa.',
        img: getAssetPath('/icons/benefit-002.svg')
    },
    {
        title: 'Atención personalizada',
        text: 'Nuestro equipo de asesores especializados te brindará asesoramiento personalizado.',
        img: getAssetPath('/icons/benefit-003.svg')
    },
    {
        title: 'Renovación digital',
        text: 'Facilitamos la renovación de tus pólizas de seguros; renuévala sin salir de casa.',
        img: getAssetPath('/icons/benefit-004.svg')
    },
]

const faqs = [
  {
    question: "¿Por qué cambia el valor asegurado?",
    answer: "Este valor se actualiza mensualmente según la entidad Fasecolda, compañía que rige a todas las Aseguradoras, estableciendo el valor asignado para cada línea y marca de vehículo. Esta suma puede variar debido a los accesorios del vehículo."
  },
  {
    question: "¿El valor de mi renovación disminuye si NO presento reclamación?",
    answer: "No solo depende de la reclamación, las Aseguradoras tienen en cuenta otras variables como: valor del dólar, precio de repuestos, el valor de la mano de obra del mercado, siniestralidad y comportamiento del cliente."
  },
  {
    question: "¿Qué pasa con mi póliza si vendo el vehículo?",
    answer: "Debes notificarnos al correo cartera2@promotec.com.co, para realizar el proceso de cancelación de la póliza e iniciar con el proceso de devolución de dinero de prima no causada, si corresponde."
  },
  {
    question: "Si tengo crédito para mi vehículo ¿debo tener póliza activa?",
    answer: "Sí, ya que la entidad bancaria como requisito y garantía exige tener un seguro que proteja la obligación, es decir, el vehículo en caso que se presente una pérdida total."
  },
];


const Bici: React.FC = () => {
    return (
        <>
            <div className="h-[448px] relative bg-blue-terciary">
                <Image className="fade-left hidden md:block absolute right-0 top-0 h-full object-cover object-center" width={200} height={200} src={getAssetPath("/images/products/vehicle/banner.png")} alt=""/>
                <div className="h-56 min-w-0 w-2/5 absolute top-1/2 -translate-y-1/2 left-0 rounded-e-[40px] bg-blue-primary"></div>
                <Wrapper>
                    <div className="absolute top-0 mt-10">
                        <Breadcrumb items={[{ label: 'Productos', href: '../productos' }, { label: 'Póliza de Bicis' }]} />
                    </div>
                    <h1 className="h-56 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center leading-none">
                        <span className="text-4xl md:text-[50px] text-blue-terciary font-semibold">Rueda seguro</span>
                        <span className="text-4xl md:text-[50px] text-white font-extrabold">cont tu póliza de Bici</span>
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
                        <div className="grid grid-cols-3 gap-6">
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

            <section className="py-[100px] bg-gray-3">
                <Wrapper>
                    <div className="space-y-[30px] w-10/12 mx-auto">
                        <h4 className="text-[40px] text-blue-primary text-center font-bold">Conoce los beneficios de tener una póliza con Promotec</h4>
                        <p className="text-[20px] text-center text-text-3 font-medium">Encuentra en Promotec una amplia gama de seguros para todas las necesidades y presupuestos.</p>
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

            <Insurers />

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