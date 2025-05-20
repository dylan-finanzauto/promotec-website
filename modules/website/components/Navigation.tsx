'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/modules/shared/ui/Wrapper";

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

const Navigation: React.FC = () => {

  const path = usePathname()

  return (
    <div className="h-20 bg-gray1 border-b-[0.5px] border-princ-blue">
      <Wrapper className="flex gap-10 py-[18px] h-full">
        <Link href={"/"}>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/promotec.svg`} alt="Logo" width={156} height={44} />
        </Link>

        <div className="flex-grow flex items-center gap-8 overflow-auto scroll-hidden">
          {routes.map((r) => {
            const isActive = path == r.url;

            return (
              <Link
                key={r.text}
                href={r.url}
                className={`relative text-secn-blue ${isActive ? 'font-bold' : 'text-secn-blue font-medium'}`}
              >
                {r.text}
                {isActive && <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] h-[2px] w-2/3 bg-tirth"></span>}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-[10px]">
          <Link
            href={"/cliente"}
          >
            <button
              className="h-10 w-[162px] text-secn-blue border border-secn-blue rounded-[10px] bg-transparent transition-all duration-500 cursor-pointer font-medium hover:bg-secn-blue hover:text-white disabled:bg-[#EDEDED] disabled:border disabled:border-[#D9D9D9] disabled:text-text4 disabled:cursor-default"
            >
              Soy cliente
            </button>
          </Link>
          <Link
            href={"/pagos"}
          >
            <button
              className="h-10 w-[162px] bg-tirth text-white rounded-[10px] cursor-pointer font-medium transition-all duration-500 hover:bg-tirth-hover disabled:bg-[#EDEDED] disabled:border disabled:border-[#D9D9D9] disabled:text-text4 disabled:cursor-default"
            >Pagos en línea</button>
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navigation;
