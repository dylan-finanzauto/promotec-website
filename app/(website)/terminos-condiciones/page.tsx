'use client';
import Wrapper from "@/modules/shared/ui/Wrapper";
import React, { useMemo, useState } from "react";
import Image from "next/image";

export interface DocumentItem {
  title: string;
  url: string;
}
export interface AttendanceItem {
  name: string;
  src: string;
  document: DocumentItem[];
}

const ATTENDANCES: AttendanceItem[] = [
  {
    name: "Allianz",
    src: "/images/policies/ALLIANZ.png",
    document: [
      {
        title: "Pólizas de Carros y Motos",
        url: "/"
      },
      {
        title: "Pólizas de Mascotas",
        url: "/"
      },
      {
        title: "Pólizas de Bicis",
        url: "/"
      },
      {
        title: "Pólizas de Vida",
        url: "/"
      },
      {
        title: "Pólizas de Hogar",
        url: "/"
      },
      {
        title: "Pólizas de Exequias",
        url: "/"
      }
    ]
  },
  {
    name: "Axa colpatria",
    src: "/images/policies/AXA_COLPATRIA.png",
    document: [
      {
        title: "Taxis",
        url: "/"
      },
      {
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        title: "Motos",
        url: "/"
      },
      {
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    name: "HDI",
    src: "/images/policies/HDI.png",
    document: [
      {
        title: "Pólizas de Carros y Motos",
        url: "/"
      },
      {
        title: "Pólizas de Mascotas",
        url: "/"
      },
      {
        title: "Pólizas de Bicis",
        url: "/"
      },
      {
        title: "Pólizas de Vida",
        url: "/"
      },
      {
        title: "Pólizas de Hogar",
        url: "/"
      },
      {
        title: "Pólizas de Exequias",
        url: "/"
      }
    ]
  },
  {
    name: "Equidad",
    src: "/images/policies/Equidad.png",
    document: [
      {
        title: "Taxis",
        url: "/"
      },
      {
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        title: "Motos",
        url: "/"
      },
      {
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    name: "Mapfre",
    src: "/images/policies/Mapfre.png",
    document: [
      {
        title: "Taxis",
        url: "/"
      },
      {
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        title: "Motos",
        url: "/"
      },
      {
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    name: "SBScolombia",
    src: "/images/policies/SBScolombia.png",
    document: [
      {
        title: "Taxis",
        url: "/"
      },
      {
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        title: "Motos",
        url: "/"
      },
      {
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    name: "BOLIVAR_icon",
    src: "/images/policies/BOLIVAR.png",
    document: [
      {
        title: "Taxis",
        url: "/"
      },
      {
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        title: "Motos",
        url: "/"
      },
      {
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    name: "ContinentalAssist_icon",
    src: "/images/policies/ContinentalAssist.png",
    document: [
      {
        title: "Pólizas de Carros y Motos",
        url: "/"
      },
      {
        title: "Pólizas de Mascotas",
        url: "/"
      },
      {
        title: "Pólizas de Bicis",
        url: "/"
      },
      {
        title: "Pólizas de Vida",
        url: "/"
      },
      {
        title: "Pólizas de Hogar",
        url: "/"
      },
      {
        title: "Pólizas de Exequias",
        url: "/"
      }
    ]
  },
  {
    name: "PREVISORA_icon",
    src: "/images/policies/PREVISORA.png",
    document: [
      {
        title: "Taxis",
        url: "/"
      },
      {
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        title: "Motos",
        url: "/"
      },
      {
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    name: "colmena",
    src: "/images/policies/colmena.png",
    document: [
      {
        title: "Taxis",
        url: "/"
      },
      {
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        title: "Motos",
        url: "/"
      },
      {
        title: "Particular",
        url: "/"
      }
    ]
  },
]

const ButtonOption: React.FC<{
  active: boolean,
  name: string,
  src: string,
  onClick: () => void
}> = ({ active, src, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-[128px] w-[220px] rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer p-5 ${active ? " bg-white border-2 border-yellow-primary text-white" : "border border-blue-terciary bg-white text-gray-4"}`}
    >
      <Image src={src} alt="" width={120} height={120} />
    </button>
  )
}
type TermCardProps = {
  document: DocumentItem
  src: string
}
const TermCard: React.FC<TermCardProps> = ({ document, src }) => {
  return (
    <div className="w-[348px] h-[368px] rounded-[30px] overflow-hidden flex flex-col bg-[#F1F4FB] shadow-sm cursor-pointer">
      <div className="bg-[#F1F4FB] flex flex-col justify-center items-center flex-1 px-4 py-10justify-center">
        <div className=" h-[160px] w-[160px] flex justify-center items-center text-[#A1A2A1]">
          <Image src={src} alt="" width={120} height={120} />
        </div>
      </div>
      <div className="bg-[#D9E9FB] h-[126px] px-11 flex justify-center items-center">
        <a href={document.url} target="_blank" className="w-full text-center">
          <h5 className="text-3xl font-bold text-[#345BB0] leading-tight">
            {document.title}
          </h5>
        </a>
      </div>
    </div>
  )
}
const TermsConditions: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const attendance = useMemo(() => ATTENDANCES.at(index), [index])

  return (
    <div className="relative">
      <div className="h-[281px] w-full bg-blue-terciary absolute top-0 left-0"></div>
      <Wrapper>
        <div className="relative  grid grid-cols-[221px_1fr] gap-14 py-10 pb-[70px]">
          <div className="space-y-4">
            {ATTENDANCES.map((a, i) => (
              <ButtonOption
                key={i}
                active={index == i}
                name={a.name}
                src={a.src}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="space-y-[30px]">
            <div className="space-y-[20px]">
              <h1 className="text-3xl text-blue-primary font-bold">Términos y Condiciones</h1>
              <p className="text-[20px] text-text-3 font-medium">Selecciona la categoría deseada.</p>
            </div>
            <div className="grid lg:grid-cols-[repeat(3,348px)] auto-cols-[348px] gap-4">
              {attendance?.document.map((doc, i) => (
                <TermCard
                  key={i}
                  document={doc}
                  src={ATTENDANCES[index].src}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
export default TermsConditions;
