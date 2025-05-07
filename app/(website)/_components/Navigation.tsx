'use client';
import { usePathname } from "next/navigation";
import Wrapper from "../../_ui/Wrapper";
import Link from "next/link";
import Image from "next/image";

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
    url: "/contactanos",
  },
];

const Navigation: React.FC = () => {

  const path = usePathname()

  return (
    <div className="h-20 bg-gray1">
      <Wrapper className="flex gap-10 py-[18px] h-full">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/promotec.svg`} alt="Logo" width={156} height={44} />
        <div className="flex-grow flex items-center gap-8">
          {routes.map((r) => {
            const isActive = path == r.url;

            return (
              <Link
                key={r.text}
                href={r.url}
                className={`text-secn-blue ${isActive ? 'font-medium' : 'text-secn-blue'}`}
              >
                {r.text}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-[10px]">
          <button
            className="h-10 w-[162px] text-secn-blue border border-secn-blue rounded-[10px] bg-transparent cursor-pointer"
          >Soy cliente</button>
          <button
            className="h-10 w-[162px] bg-tirth text-white rounded-[10px] cursor-pointer"
          >Pagos en línea</button>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navigation;
