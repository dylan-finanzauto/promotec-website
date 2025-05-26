'use client';
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import { ATTENDANCES } from "@/modules/website/data/attendances";
import Image from "next/image";
import { useState } from "react";

// const icons = [
//   {
//     id: 0,
//     icon: <LlianzIcon className="text-blue-primary" />
//   },
// ]

const ButtonOption: React.FC<{
  img: string,
  active: boolean
}> = ({ img, active }) => {
  return (
    <button
      className={`h-[82px] w-full rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer p-5 ${active ? "bg-yellow-primary" : "border border-blue-terciary bg-white"}`}
    >
      <Image
        src={img}
        alt=""
        width={112}
        height={32}
        style={{ width: 'auto', height: '100%' }}
      />

    </button>
  )
}

const TermCard: React.FC = () => {
  return (
    <div className="rounded-[30px] overflow-hidden bg-gray-3 flex flex-col cursor-pointer">
      <div className="flex justify-center items-center flex-1">
        <Image
          src={getAssetPath("/icons/allianz.svg")}
          alt="Imágen de aseguradora"
          width={150}
          height={60}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="flex items-center gap-8 px-10 py-6 bg-blue-terciary">
        <h5 className="text-3xl text-center text-blue-primary font-bold">Póliza de carros y motos</h5>
      </div>
    </div>
  )
}

const TermsConditions: React.FC = () => {

  const [index] = useState(0);

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
                img={a.url}
              />
            ))}
          </div>
          <div className="space-y-[30px]">
            <div className="space-y-[20px]">
              <h1 className="text-3xl text-blue-primary font-bold">Términos y Condiciones</h1>
              <p className="text-[20px] text-text-3 font-medium">Selecciona la categoría deseada.</p>
            </div>
            <div className="grid grid-cols-[repeat(3,348px)] auto-rows-[348px] gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <TermCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default TermsConditions;
