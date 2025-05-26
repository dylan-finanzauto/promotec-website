'use client';
import { CardIcon, SheetIcon, ShieldIcon } from "@/modules/shared/components/SVGIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

export interface NavItemType {
  href: string;
  text: string;
  icon: React.ReactNode,
}

const nav: NavItemType[] = [
  {
    href: "/cliente/polizas",
    text: "Pólizas",
    icon: <ShieldIcon />,
  },
  {
    href: "/cliente/extracto",
    text: "Extracto",
    icon: <SheetIcon />,
  },
  {
    href: "/cliente/datos-personales",
    text: "Datos personales",
    icon: <CardIcon />,
  },
];

const NavItem: React.FC<{
  href: string,
  text: string,
  icon: React.ReactNode,
  active: boolean
}> = ({ href, text, icon, active }) => {

  return (
    <Link
      href={href}
      className={`${active ? "active" : ""} flex items-center gap-[14px] py-3 px-6 h-14 [&.active]:bg-[#FFF6EB] [&.active]:border-[0.5px] [&.active]:border-yellow-primary rounded-[10px] hover:bg-blue-terciary [&.active]:hover:bg-[#FFF6EB] transition group`}
    >
      <div
        className="size-8 rounded-lg grid place-items-center bg-gray-1 shadow-sm group-[.active]:shadow-none group-[.active]:bg-yellow-primary text-yellow-primary group-[.active]:text-white"
      >
        {icon}
      </div>
      <h5 className="md:hidden lg:block text-text-2 group-[.active]:text-blue-primary group-[.active]:font-bold">
        {text}
      </h5>
    </Link>
  )
}

type Props = {

}

const Sidebar: React.FC<Props> = () => {

  const path = usePathname()

  return (
    <>
      <aside className="md:flex flex-col h-[calc(100vh-96px)] py-5 sticky z-10 top-[96px]">
        <nav className="flex-1">
          <ul className="space-y-[10px]">
            {
              nav.map((i) => {
                return (
                  <li key={i.href}>
                    <NavItem
                      href={i.href}
                      text={i.text}
                      icon={i.icon}
                      active={path == i.href}
                    />
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </aside>
    </>

  )
}

export default Sidebar;
