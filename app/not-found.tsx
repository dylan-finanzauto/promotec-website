import BikeIcon from '@/modules/shared/components/icons/BikeIcon'
import CarIcon from '@/modules/shared/components/icons/CarIcon'
import HeartbeatIcon from '@/modules/shared/components/icons/HeartbeatIcon'
import HomeIcon from '@/modules/shared/components/icons/HomeIcon'
import WebsiteProviders from '@/modules/shared/providers/WebsiteProviders'
import Wrapper from '@/modules/shared/ui/Wrapper'
import Footer from '@/modules/website/components/Footer'
import Header from '@/modules/website/components/Header'
import Navigation from '@/modules/website/components/Navigation'
import Attention from '@/modules/website/ui/Attention'
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
    <button className={`h-10 px-5 rounded-[10px] flex items-center gap-3 border border-secn-blue cursor-pointer ${active ? "bg-secn-blue text-white" : "bg-transparent text-secn-blue"}`}>
      <div className="py-1 px-2 rounded-lg grid place-items-center bg-white text-secn-blue">
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

      <main className="bg-princ-blue">
        <Wrapper className="relative">

          <img className="absolute right-0 bottom-0 h-[90%]" src={"/Promotec.Website.Client/images/3. bearded-young-man-wearing-shirt.png"} alt="" />

          <div className="relative w-4xl py-16 space-y-10">
            <div className="space-y-5">
              <h1 className="text-[60px] text-secn-blue font-bold">
                <div className="">¡Oops!</div>
                <div className="">Página no encontrada</div>
              </h1>
              <p className="text-[20px] text-text">Ponemos a tu disposición nuestros productos de interés, ya que el contenido que estas buscando no se encuentra.</p>
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
              <div className="zoom-in p-10 rounded-[20px] flex justify-between bg-gray1">
                <div className="space-y-5">
                  <h2 className="text-[40px] text-secn-blue font-extrabold">Cotizar Seguro de Carros</h2>
                  <p className="text-[20px] text-text">Recorre kilómetros seguros con tu Póliza de Carros.</p>
                </div>
                <Link
                  href={""}
                  className="self-end"
                >
                  <button className="px-20 py-4 rounded-[10px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Cotizar</button>
                </Link>
              </div>
              <Link
                href={"/"}
                className="text-secn-blue underline font-medium hover:font-semibold transition-all"
              >Ver todos los productos</Link>
            </div>
          </div>

        </Wrapper>
      </main>

      <Footer />

      <Attention />
    </WebsiteProviders>
  )
}

export default NotFound;
