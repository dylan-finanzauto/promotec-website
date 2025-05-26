'use client';
import { LogoutIcon, PromotecIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header: React.FC = () => {

  return (
    <>
      <header className="fixed top-0 left-0 bg-blue-primary shadow-xl w-full z-20">
        <Wrapper className="h-24 flex justify-between gap-4 py-5 items-center">
          <div className="flex items-center gap-4">
            <PromotecIcon className="text-white" />
          </div>
          <div className="flex items-center gap-8">
            <Link
              href={"/cliente/experiencia"}
            >
              <button className="h-12 flex items-center gap-1 text-white cursor-pointer">
                <LogoutIcon />
                <span>Salida segura</span>
              </button>
            </Link>
            <Link
              href={"/pagos"}
            >
              <button
                className="h-12 w-[162px] bg-yellow-primary text-white rounded-[10px] cursor-pointer font-medium transition-all duration-500 hover:bg-yellow-primary-hover disabled:bg-[#EDEDED] disabled:border disabled:border-[#D9D9D9] disabled:text-text-3 disabled:cursor-default"
              >Pagos en línea</button>
            </Link>
          </div>
        </Wrapper>
      </header>
    </>
  )
}

export default Header;
