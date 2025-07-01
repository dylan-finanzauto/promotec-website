'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { HamburgerIcon, XIcon } from "@/modules/shared/components/SVGIcons";
import { useEffect, useState } from "react";

const routes = [
  {
    text: "Productos",
    url: "/productos",
  },
  {
    text: "Emergencia",
    url: "/emergencia",
  },
  {
    text: "Nosotros",
    url: "/nosotros",
  },
  {
    text: "Contáctanos",
    url: "/contacto",
  },
];

const Sidebar: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {

  const path = usePathname()

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex">
      <div className="ml-auto w-80 max-w-full h-full bg-white shadow-lg flex flex-col p-6 animate-slide-in-right">
        <button
          className="self-end mb-6 text-blue-primary text-2xl"
          onClick={() => onClose()}
          aria-label="Cerrar menú"
        >
          <XIcon className="size-5 text-blue-primary" />
        </button>
        <nav className="flex flex-col gap-6 flex-1">
          {routes.map((r) => {
            const isActive = path == r.url;
            return (
              <Link
                key={r.text}
                href={r.url}
                className={`text-lg ${isActive ? 'font-bold text-blue-primary' : 'font-medium text-blue-primary'}`}
                onClick={() => onClose()}
              >
                {r.text}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col gap-4 mt-8">
          <Link href="/cliente" onClick={() => onClose()}>
            <button
              className="h-10 w-full text-blue-primary border border-blue-primary rounded-[10px] bg-transparent transition-all duration-500 cursor-pointer font-medium hover:bg-blue-primary hover:text-white"
            >
              Soy cliente
            </button>
          </Link>
          <Link href="/pagos" onClick={() => onClose()}>
            <button
              className="h-10 w-full bg-yellow-primary text-white rounded-[10px] cursor-pointer font-medium transition-all duration-500 hover:bg-yellow-primary-hover"
            >
              Pagos en línea
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const Navigation: React.FC = () => {

  const [showSidebar, setShowSidebar] = useState(false)

  const path = usePathname()

  useEffect(() => {
    if (showSidebar) {

      document.body.style.overflowY = 'hidden';

    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    }

  }, [showSidebar]);

  return (
    <>
      <div className="h-20 bg-gray-3 border-b-[0.5px] border-blue-terciary">
        <Wrapper className="flex justify-between gap-10 py-[18px] h-full">
          <Link className="shrink-0" href={"/"}>
            <Image src="/icons/promotec.svg" alt="Logo" width={156} height={44} />
          </Link>

          <div className="hidden md:flex flex-grow items-center gap-8 overflow-auto scroll-hidden">
            {routes.map((r) => {
              const isActive = path == r.url;

              return (
                <Link
                  key={r.text}
                  href={r.url}
                  className={`relative text-lg text-blue-primary ${isActive ? 'font-bold' : 'text-blue-primary font-medium'}`}
                >
                  {r.text}
                  {isActive && <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] h-[2px] w-2/3 bg-yellow-primary"></span>}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex gap-[10px]">
            <Link
              href={"/cliente"}
            >
              <button
                className="h-10 w-[162px] text-blue-primary border border-blue-primary rounded-[10px] bg-transparent transition-all duration-500 cursor-pointer font-medium hover:bg-blue-primary hover:text-white disabled:bg-[#EDEDED] disabled:border disabled:border-[#D9D9D9] disabled:text-text-3 disabled:cursor-default"
              >
                Soy cliente
              </button>
            </Link>
            <Link
              href={"/pagos"}
            >
              <button
                className="h-10 w-[162px] bg-yellow-primary text-white rounded-[10px] cursor-pointer font-medium transition-all duration-500 hover:bg-yellow-primary-hover disabled:bg-[#EDEDED] disabled:border disabled:border-[#D9D9D9] disabled:text-text-3 disabled:cursor-default"
              >Pagos en línea</button>
            </Link>
          </div>

          <div
            className="grid md:hidden place-items-center rounded-full size-12 cursor-pointer outline-2 outline-transparent hover:outline-tirth"
            onClick={() => setShowSidebar(true)}
          >
            <HamburgerIcon className="size-5 text-blue-primary" />
          </div>

        </Wrapper>
      </div>
      {showSidebar && (
        <Sidebar onClose={() => setShowSidebar(false)} />
      )}
    </>
  )
}

export default Navigation;
