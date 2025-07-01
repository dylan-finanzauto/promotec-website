import { LikeIcon, UsersIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Image from "next/image";
import Link from "next/link";

function Experience() {
  return (
    <section className="py-10 bg-blue-terciary overflow-hidden">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <Image
            src="/images/contact/p.png"
            alt=""
            width={822}
            height={874}
            className="fade-left -m-14"
          />

          <div className="space-y-16 lg:pt-14 min-w-0 max-w-3xl w-full">
            <h2 className="text-[50px] leading-none text-text-4 font-bold">+ de 40 años protegiendo lo que más valoras.</h2>
            <p className="text-[20px] text-text-4 font-medium">Somos la elección confiable de miles de familias, personas y negocios, asegurando su bienestar con un servicio cercano y efectivo.</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-14 items-center">
              <div className="zoom-in flex items-center gap-7">
                <UsersIcon className="size-12 text-blue-primary" />
                <div className="flex flex-col">
                  <span className="text-lg text-text-1 font-bold">Clientes</span>
                  <span className="text-[50px] text-blue-primary font-bold leading-none">+ 260.000</span>
                </div>
              </div>
              <div className="zoom-in flex items-center gap-7">
                <LikeIcon className="size-12 text-blue-primary" />
                <div className="flex flex-col">
                  <span className="text-lg text-text-1 font-bold"> Nuestra renovación</span>
                  <span className="text-[50px] text-blue-primary font-bold leading-none">85%</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/nosotros"
              >
                <button className="py-3 w-[162px] text-[20px] rounded-[10px] bg-yellow-primary text-white cursor-pointer">Cotizar</button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Experience;
