'use client';
import { AxaIcon, BolivarIcon, HdiIcon, LibertyIcon, LlianzIcon, MapfreIcon, SbsIcon, SolidariaIcon, SuraIcon } from "@/modules/shared/components/SVGIcons";
import { AttendanceItem, DocumentItem } from "@/modules/shared/types/termConditions";
import Wrapper from "@/modules/shared/ui/Wrapper";
import React, { JSX, useState } from "react";
export const ATTENDANCES: AttendanceItem[] = [
  {
    id: 0,
    icon: <LlianzIcon />,
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
    icon: <AxaIcon />,
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
    icon: <HdiIcon />,
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
    icon: <LibertyIcon />,
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
    icon: <MapfreIcon />,
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
    icon: <SbsIcon />,
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
    icon: <BolivarIcon />,
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
    icon: <SolidariaIcon />,
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
    icon: <SuraIcon />,
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
      className={`h-[82px] w-full rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer p-5 ${active ? "bg-yellow-primary text-white" : "border border-blue-terciary bg-white text-gray-4"}`}
    >
      {icon}
    </button>
  )
}
type TermCardProps = {
  document: DocumentItem
  icons: JSX.Element
}
const TermCard: React.FC<TermCardProps> = ({ document, icons }) => {
  return (
    <div className="w-[348px] h-[368px] rounded-[30px] overflow-hidden flex flex-col bg-[#F1F4FB] shadow-sm cursor-pointer">
      <div className="bg-[#F1F4FB] flex flex-col justify-center items-center flex-1 px-4 py-10justify-center">
        <div className="w-[150px] h-[38px] flex justify-center items-center text-[#A1A2A1]">
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
        <div className="relative grid grid-cols-[221px_1fr] gap-14 py-10 pb-[70px]">
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
