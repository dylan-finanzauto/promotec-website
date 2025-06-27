import Breadcrumb, { BreadcrumbItem } from "@/modules/shared/components/Breadcrumb";
import { PlayerPlayFilledIcon } from "@/modules/shared/components/SVGIcons";
import Accordion from "@/modules/shared/ui/Accordion";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import { ProductBanner } from "@/modules/website/ui/Banner";
import { BenefitCard } from "@/modules/website/ui/Benefits";
import CoverageCard from "@/modules/website/ui/CoverageCard";
import Insurers from "@/modules/website/ui/Insurers";
import PlanCard from "@/modules/website/ui/PlanCard";
import Image from "next/image";
import Link from "next/link";

const coverages = [
    {
        title: "**Responsabilidad civil extracontractual**",
        img: getAssetPath("/images/products/vehicle/coverages/1.jpg")
    },
    {
        title: "**Asistencia al vehículo**",
        img: getAssetPath("/images/products/vehicle/coverages/2.jpg")
    },
    {
        title: "**Conductor elegido**",
        description: "***Asistencia Plus**",
        img: getAssetPath("/images/products/vehicle/coverages/3.jpg")
    },
    {
        title: "**Pérdida total, daño y/o hurto**",
        img: getAssetPath("/images/products/vehicle/coverages/4.jpg")
    },
    {
        title: "**Pérdida Parcial, daño y/o hurto**",
        img: getAssetPath("/images/products/vehicle/coverages/5.jpg")
    },
    {
        title: "**Vehículo de reemplazo**",
        description: "***Asistencia Plus**",
        img: getAssetPath("/images/products/vehicle/coverages/6.jpg")
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
  {
    question: "Si termino el crédito de mi vehículo ¿qué debo hacer?",
    answer: "Realizar levantamiento de prenda ante el SIM. Cuando tengas la nueva tarjeta de propiedad, debes enviar una solicitud al correo ptrenovacion@promotec.com.co solicitando la modificación del beneficiario en la póliza."
  },
  {
    question: "¿Qué hacer si tengo un siniestro o necesito una asistencia?",
    answer: "Comunícate al numeral de tu Aseguradora. Para resolver cualquier duda, solicitud o inquietud, comunícate con nosotros a nuestra área de siniestros al (1) 7423700 opción 1-6-1 o al correo electrónico: analista.indemnizaciones@promotec.com.co"
  },
  {
    question: "¿Qué es el SARLAFT y en qué momento lo debo diligenciar?",
    answer: "El SARLAFT es un documento de control que nos exige la Superintendencia Financiera para prevenir el lavado de activos y financiación del terrorismo. Lo debes diligenciar cuando vas a contratar la póliza por primera vez o cuando la compañía aseguradora lo solicite."
  },
  {
    question: "¿Qué valor agregado me ofrece Promotec?",
    answer: "Te permite comparar entre diversas aseguradoras y encontrar la póliza ideal para ti. Te brindamos asesoría personalizada en todo el proceso de compra y post venta."
  },
  {
    question: "¿Quién es Promotec y con qué aseguradoras puedo cotizar?",
    answer: "Somos una agencia de seguros que te ofrece diferentes opciones, ya que contamos con diferentes compañías aseguradoras aliadas entre ellas: Liberty, Axa, Allianz, Mapfre, Bolívar, Suramericana, Estado, HDI, Solidaria, entre otras."
  },
  {
    question: "¿Qué pasa si mi vehículo es conducido por diferentes personas?",
    answer: "Si otra persona está conduciendo tu vehículo y se presenta un siniestro, dicho conductor debe tener tu autorización previa (no escrita) para que este hecho pueda ser cubierto. Recuerda que debe ser el asegurado quien reporte el siniestro."
  }
];

const Vehicle: React.FC = () => {

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Productos', href: '../productos' },
        { label: 'Póliza de Vehículos' }
    ];

    return (
        <>
            <ProductBanner background="/images/products/vehicle/banner.png" breadcrumbItems={breadcrumbItems} title="Conduce seguro con la" subtitle="póliza de tu vehículo" />

            <section className="py-11 bg-gray-1 flex flex-col items-center gap-6">
                <h3 className="text-xl font-bold text-text-4">¿Quieres cotizar tu Seguro para carros o motos?</h3>
                <Link
                    href={"/productos/vehiculo/cotizar"}
                >
                    <button className="px-20 py-4 rounded-[10px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Cotiza aquí</button>
                </Link>
            </section>

            <section className="py-[70px]">
                <Wrapper>
                    <div className="space-y-10">
                        <h2 className="text-3xl text-center text-blue-primary font-bold">Conoce las coberturas y asistencias que te brindan los seguros para carros y motos</h2>
                        <div className="grid grid-cols-6 auto-rows-[368px] overflow-x-auto gap-4">
                            {coverages.map((c, i) => (
                                <CoverageCard
                                    key={i}
                                    title={c.title}
                                    description={c.description}
                                    img={c.img}
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

            <section className="py-[100px] bg-blue-terciary">
                <Wrapper>
                    <div className="flex items-center gap-4">
                        <div className="w-2/5 space-y-10">
                            <h3 className="text-[60px] text-blue-primary font-bold leading-none">El seguro perfecto para cada tipo de vehículo</h3>
                            <p className="text-[20px] text-text-3 font-medium">Asegura con nosotros tu carro particular o de servicio público, motocicleta o vehículo de carga pesada.</p>
                        </div>
                        <div className="grow aspect-video bg-[#454545] grid place-items-center rounded-[30px]">
                            <div className="size-[150px] rounded-full bg-white/40 grid place-items-center">
                                <div className="size-[125px] rounded-full bg-yellow-primary grid place-items-center">
                                    <PlayerPlayFilledIcon className="size-12 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>

            <Insurers />

            <section className="py-[80px] bg-gray-3">
                <Wrapper>
                    <div className="space-y-10">
                        <h4 className="text-[40px] text-center font-bold">Coberturas en tu plan</h4>
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

export default Vehicle;