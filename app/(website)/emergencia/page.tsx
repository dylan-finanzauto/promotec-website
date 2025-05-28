'use client';
import { AxaIcon, BolivarIcon, ColmenaIcon, ContinentalIcon, EquidadIcon, HdiIcon, LibertyIcon, LlianzIcon, MapfreIcon, PrevisoraIcon, SbsIcon, SolidariaIcon, SuraIcon, ZurichIcon } from "@/modules/shared/components/SVGIcons";
import { insurersStore } from "@/modules/shared/store/master";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Banner from "@/modules/website/ui/Banner";
import Link from "next/link";

const mapping: Record<string, { icon: React.ReactNode }> = {
  "Allianz (II)": {
    icon: <LlianzIcon />
  },
  "Suramericana": {
    icon: <SuraIcon />
  },
  "CONTINENTAL ASSIST": {
    icon: <ContinentalIcon />
  },
  "Aseguradora Solidaria": {
    icon: <SolidariaIcon />
  },
  "Colmena Seguros": {
    icon: <ColmenaIcon />
  },
  "Axa Colpatria": {
    icon: <AxaIcon />
  },
  "HDI Seguros": {
    icon: <HdiIcon />
  },
  "SBS Seguros": {
    icon: <SbsIcon />
  },
  "Liberty Seguros": {
    icon: <LibertyIcon />
  },
  "Equidad Seguros": {
    icon: <EquidadIcon />
  },
  "Zurich Seguros": {
    icon: <ZurichIcon />
  },
  "Seguros Bolivar": {
    icon: <BolivarIcon />
  },
  "Mapfre Seguros": {
    icon: <MapfreIcon />
  },
  "Previsora Seguros": {
    icon: <PrevisoraIcon />
  },
}

type CardProps = {
  name: string;
  phone: string;
}

const AttendanceCard: React.FC<CardProps> = ({ name, phone }) => {
  return (
    <div className="fade-up rounded-[30px] overflow-hidden bg-gray-3 flex flex-col">
      <div className="flex justify-center items-center flex-1 text-gray-4">
        {mapping[name]?.icon}
      </div>
      <div className="flex items-center gap-8 px-10 py-6 bg-blue-terciary">
        <h5 className="text-[40px] overflow-auto scroll-hidden text-text-1 font-bold">{phone}</h5>
        <a href={`tel:${phone}`} className="sm:hidden px-7 py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Llamar</a>
      </div>
    </div>
  )
}

const Emergency: React.FC = () => {

  const { insurers } = insurersStore()

  return (
    <>
      <Banner titleTop="¿Tienes una" titleBottom="emergencia?" img="images/emergency/banner.png" />

      <section className="py-[100px]">
        <Wrapper>
          <div className="space-y-16">
            <div className="space-y-[30px]">
              <h3 className="text-[30px] text-center text-blue-primary font-bold">¡Estamos aquí para ayudarte!</h3>
              <div className="text-[20px] text-center text-text-3 font-medium">
                <p>En caso que requieras asistencia, contacta directamente al equipo de atención inmediata de cada aseguradora,</p>
                <p>disponible las 24 horas del día, los 7 días de la semana.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[262px] gap-4">
              {insurers.map((a, i) => (
                <AttendanceCard key={i} name={a.name} phone={a.lineHelp} />
              ))}
            </div>
            <div className="fade-up py-10 px-8 rounded-[30px] bg-blue-secondary space-y-8">
              <h2 className="text-4xl text-center text-white font-extrabold">¿Necesitas acompañamiento en tu proceso de indemnización?</h2>
              <div className="flex justify-center">
                <Link
                  href={"/indemnizaciones"}
                >
                  <button className="px-20 py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Ver más</button>
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default Emergency;
