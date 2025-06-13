'use client';
import { AttendanceItem, DocumentItem } from "@/modules/shared/types/termConditions";
import Wrapper from "@/modules/shared/ui/Wrapper";
import React, { useState } from "react";
import { } from "../../../public/images/policies/ALLIANZ.png"

export const ATTENDANCES: AttendanceItem[] = [
  {
    id: 0,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/ALLIANZ.png" alt="Allianz_Icon" />,
    document: [
      {
        idDocument: 1,
        title: "Pólizas de Carros y Motos",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pólizas de Mascotas",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Pólizas de Bicis",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Pólizas de Vida",
        url: "/"
      },
      {
        idDocument: 5,
        title: "Pólizas de Hogar",
        url: "/"
      },
      {
        idDocument: 6,
        title: "Pólizas de Exequias",
        url: "/"
      }
    ]
  },
  {
    id: 1,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/AXA_COLPATRIA.png" alt="Axa_Icon" />,
    document: [
      {
        idDocument: 1,
        title: "Taxis",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Motos",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    id: 2,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/HDI.png" alt="HDI_icon" />,
    document: [
      {
        idDocument: 1,
        title: "Pólizas de Carros y Motos",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pólizas de Mascotas",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Pólizas de Bicis",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Pólizas de Vida",
        url: "/"
      },
      {
        idDocument: 5,
        title: "Pólizas de Hogar",
        url: "/"
      },
      {
        idDocument: 6,
        title: "Pólizas de Exequias",
        url: "/"
      }
    ]
  },
  {
    id: 3,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/Equidad.png" alt="Equidad_icon" />,
    document: [
      {
        idDocument: 1,
        title: "Taxis",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Motos",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    id: 4,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/Mapfre.png" alt="Mapfre_icon" />,
    document: [
      {
        idDocument: 1,
        title: "Taxis",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Motos",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    id: 5,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/SBScolombia.png" alt="SBScolombia_icon" />,
    document: [
      {
        idDocument: 1,
        title: "Taxis",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Motos",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    id: 6,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/BOLIVAR.png" alt="BOLIVAR_icon" />,
    document: [
      {
        idDocument: 1,
        title: "Taxis",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Motos",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Particular",
        url: "/"
      }
    ]
  },
  {
    id: 7,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/ContinentalAssist.png" alt="ContinentalAssist_icon" />,
    document: [
      {
        idDocument: 1,
        title: "Pólizas de Carros y Motos",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pólizas de Mascotas",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Pólizas de Bicis",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Pólizas de Vida",
        url: "/"
      },
      {
        idDocument: 5,
        title: "Pólizas de Hogar",
        url: "/"
      },
      {
        idDocument: 6,
        title: "Pólizas de Exequias",
        url: "/"
      }
    ]
  },
  {
    id: 8,
    icon: <img className="w-[120px] h-[120px] object-contain" src="/images/policies/PREVISORA.png" alt="PREVISORA_icon" />,
    document: [
      {
        idDocument: 1,
        title: "Taxis",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Motos",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Particular",
        url: "/"
      }
    ]
  },
    {
    id: 9,
    icon: <img  src="/images/policies/colmena.png" alt="colmena-logo_icon" />,
    document: [
      {
        idDocument: 1,
        title: "Taxis",
        url: "/"
      },
      {
        idDocument: 2,
        title: "Pesados/Públicos",
        url: "/"
      },
      {
        idDocument: 3,
        title: "Motos",
        url: "/"
      },
      {
        idDocument: 4,
        title: "Particular",
        url: "/"
      }
    ]
  },
]

const ButtonOption: React.FC<{
  active: boolean,
  icon: React.ReactNode
  onClick: () => void
}> = ({ active, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-[128px] w-[220px] rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer p-5 ${active ? " bg-white border-[8px] border-yellow-primary text-white" : "border border-blue-terciary bg-white text-gray-4"}`}
    >
      {icon}
    </button>
  )
}
type TermCardProps = {
  document: DocumentItem
  icons: React.ReactNode
}
const TermCard: React.FC<TermCardProps> = ({ document, icons }) => {
  return (
    <div className="w-[348px] h-[368px] rounded-[30px] overflow-hidden flex flex-col bg-[#F1F4FB] shadow-sm cursor-pointer">
      <div className="bg-[#F1F4FB] flex flex-col justify-center items-center flex-1 px-4 py-10justify-center">
        <div className=" h-[160px] w-[160px] flex justify-center items-center text-[#A1A2A1]">
          {icons}
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
                icon={a.icon}
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
              {ATTENDANCES[index].document.map((doc) => (
                <TermCard
                  key={doc.idDocument}
                  document={doc}
                  icons={ATTENDANCES[index].icon}
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
