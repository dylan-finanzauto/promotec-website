'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import Wrapper from "@/modules/shared/ui/Wrapper";

const Header: React.FC = () => {

  const path = usePathname();

  const routes = useMemo(() => {
    return [
      {
        text: "Personas",
        url: "/",
        active: path === "/" || path.startsWith("/") && path !== "/empresas"
      },
      // {
      //   text: "Empresas",
      //   url: "/empresas",
      //   active: path === "/empresas" || path.startsWith("/empresas")
      // },
    ]
  }, [path])

  return (
    <header className="h-10 bg-blue-primary">
      <Wrapper className="flex justify-between h-full">
        <div className="flex items-end">
          {routes.map((r) => {
            return (
              <Link
                key={r.text}
                href={r.url}
                className={`relative h-9 rounded-t-[10px] py-2 px-3 text-[15px] ${r.active ? 'bg-gray-3 text-blue-primary font-semibold' : 'text-white font-medium'}`}
              >
                {r.text}
                <span className="absolute bottom-0 left-1/2 -translate-1/2 h-0.5 w-1/3 bg-blue-primary" />
              </Link>
            );
          })}
        </div>
        <div className="relative flex items-center">
          <div className="hover:[&~ul]:flex text-white text-[15px] cursor-pointer">
            Portales
          </div>
          <ul
            className="hidden hover:flex absolute right-0 top-8 z-10 flex-col rounded-b-3xl bg-blue-primary px-8 py-2 text-white shadow-lg"
          >
            <li className="text-sm cursor-pointer">
              <a href={process.env.NEXT_PUBLIC_SIGLO_URL} target="_blank">SIGLO</a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header;
