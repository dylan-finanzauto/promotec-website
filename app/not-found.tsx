import { BikeIcon, CarIcon, HeartbeatIcon, HomeIcon } from '@/modules/shared/components/SVGIcons'
import WebsiteProviders from '@/modules/shared/providers/WebsiteProviders'
import Wrapper from '@/modules/shared/ui/Wrapper'
import { getAssetPath } from '@/modules/shared/utils/paths'
import Footer from '@/modules/website/components/Footer'
import Header from '@/modules/website/components/Header'
import Navigation from '@/modules/website/components/Navigation'
import Attention from '@/modules/website/ui/Attention'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type OptionProps = {
  text: string
  icon: React.ReactNode,
  active: boolean,
}

const options: OptionProps[] = [
  {
    text: 'Carros',
    icon: <CarIcon />,
    active: true
  },
  {
    text: 'Bicis',
    icon: <BikeIcon />,
    active: false
  },
  {
    text: 'Vida',
    icon: <HeartbeatIcon />,
    active: false
  },
  {
    text: 'Hogar',
    icon: <HomeIcon />,
    active: false
  },
]

const OptionButton: React.FC<OptionProps> = ({ text, icon, active }) => {
  return (
    <button className={`h-10 px-5 rounded-[10px] flex items-center gap-3 border border-blue-primary cursor-pointer ${active ? "bg-blue-primary text-white" : "bg-transparent text-blue-primary"}`}>
      <div className="py-1 px-2 rounded-lg grid place-items-center bg-white text-blue-primary">
        {icon}
      </div>
      {text}
    </button>
  )
}

const NotFound = () => {
  return (
    <WebsiteProviders>
      <div className="sticky inset-0 z-40">
        <Header />
        <Navigation />
      </div>

      <main className="bg-blue-terciary">
        <Wrapper className="relative">

          <Image
            className="absolute right-0 bottom-0"
            src={getAssetPath("/images/404/person.png")}
            alt="Imágen de hombre con una expresión aburrida"
            width={667}
            height={664}
          />

          <div className="relative w-4xl py-16 space-y-10">
            <div className="space-y-5">
              <h1 className="text-[60px] text-blue-primary font-bold">
                <div className="">¡Oops!</div>
                <div className="">Página no encontrada</div>
              </h1>
              <p className="text-[20px] text-text-4">Ponemos a tu disposición nuestros productos de interés, ya que el contenido que estas buscando no se encuentra.</p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-[10px]">
                {options.map((o, i) => (
                  <OptionButton
                    key={i}
                    text={o.text}
                    icon={o.icon}
                    active={o.active}
                  />
                ))}
              </div>
              <div className="zoom-in p-10 rounded-[20px] flex justify-between bg-gray-3">
                <div className="space-y-5">
                  <h2 className="text-[40px] text-blue-primary font-extrabold">Cotizar Seguro de Carros</h2>
                  <p className="text-[20px] text-text-4">Recorre kilómetros seguros con tu Póliza de Carros.</p>
                </div>
                <Link
                  href={""}
                  className="self-end"
                >
                  <button className="px-20 py-4 rounded-[10px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Cotizar</button>
                </Link>
              </div>
              <Link
                href={"/"}
                className="text-blue-primary underline font-medium hover:font-semibold transition-all"
              >Ver todos los productos</Link>
            </div>
          </div>

        </Wrapper>
      </main>

      <Footer />

    </WebsiteProviders>
  )
}

export default NotFound;
