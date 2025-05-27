'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";

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
    <div className="h-20 bg-gray-3 border-b-[0.5px] border-blue-terciary">
      <Wrapper className="flex gap-10 py-[18px] h-full">
        <Link href={"/"}>
          <Image src={`${getAssetPath("/icons/promotec.svg")}`} alt="Logo" width={156} height={44} />
        </Link>

        <div className="flex-grow flex items-center gap-8 overflow-auto scroll-hidden">
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
        <div className="flex gap-[10px]">
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
      </Wrapper>
    </div>
  )
}

export default Navigation;
