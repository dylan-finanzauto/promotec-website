'use client';
import { useIsMobile } from "@/modules/shared/hooks/useIsMobile";
import { useInsurersStore } from "@/modules/shared/store/master";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Banner from "@/modules/website/ui/Banner";
import Image from "next/image";
import Link from "next/link";

const mapping: Record<string, { src: string }> = {
  // "METLIFE.": {
  //   src: getAssetPath("/images/policies/") 
  // },
  "Allianz (II)": {
    src: getAssetPath("/images/policies/ALLIANZ.png") 
  },
  // "Suramericana": {
  //   src: getAssetPath("/images/policies/") 
  // },
  "CONTINENTAL ASSIST": {
    src: getAssetPath("/images/policies/ContinentalAssist.png") 
  },
  // "Aseguradora Solidaria": {
  //   src: getAssetPath("/images/policies/") 
  // },
  "Colmena Seguros": {
    src: getAssetPath("/images/policies/colmena.png") 
  },
  "Axa Colpatria": {
    src: getAssetPath("/images/policies/AXA_COLPATRIA.png") 
  },
  "HDI Seguros": {
    src: getAssetPath("/images/policies/HDI.png") 
  },
  "SBS Seguros": {
    src: getAssetPath("/images/policies/SBScolombia.png") 
  },
  "Equidad Seguros": {
    src: getAssetPath("/images/policies/Equidad.png") 
  },
  // "Zurich Seguros": {
  //   src: getAssetPath("/images/policies/") 
  // },
  "Seguros Bolivar": {
    src: getAssetPath("/images/policies/BOLIVAR.png") 
  },
  "Mapfre Seguros": {
    src: getAssetPath("/images/policies/Mapfre.png") 
  },
  // "Previsora Seguros": {
  //   src: getAssetPath("/images/policies/") 
  // },
  "Pan-American Life.": {
    src: getAssetPath("/images/policies/PREVISORA.png") 
  },
  // "CARDIF COLOMBIA SEG. GENERALES S.A": {
  //   src: getAssetPath("/images/policies/") 
  // },
  // "CHUBB DE COLOMBIA CIA. DE SEG.S.A.": {
  //   src: getAssetPath("/images/policies/") 
  // },
  // "COMPAÑÍA MUNDIAL DE SEGUROS S.A.": {
  //   src: getAssetPath("/images/policies/") 
  // },
  // "BERKLEY INTERNATIONAL SEGUROS COLOMBIA S.A": {
  //   src: getAssetPath("/images/policies/") 
  // },
  // "SEGUROS DEL ESTADO S.A.": {
  //   src: getAssetPath("/images/policies/") 
  // },
}

type CardProps = {
  name: string;
  phone: string;
}

const AttendanceCard: React.FC<CardProps> = ({ name, phone }) => {

  const isMobile = useIsMobile()

  const attendance = mapping[name]

  return (
    <div className="fade-up rounded-[30px] overflow-hidden bg-gray-3 flex flex-col">
      <div className="flex justify-center items-center overflow-hidden flex-1 text-gray-4 p-4">
        {attendance ? <Image src={attendance.src} alt={name} width={120} height={120} /> : <h2 className="text-[32px] text-text-1 text-center font-bold truncate" title={name}>{name}</h2>}
      </div>
      <div className="flex shrink-0 h-[88px] items-center gap-8 px-10 py-6 bg-blue-terciary">
        <h5 className="text-3xl text-nowrap grow overflow-auto scroll-hidden text-text-1 font-bold">{phone}</h5>
        {isMobile && <a href={`tel:${phone}`} className="px-7 py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Llamar</a>}
      </div>
    </div>
  )
}

const Emergency: React.FC = () => {

  const { insurers } = useInsurersStore()

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
