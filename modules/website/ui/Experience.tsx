import { LikeIcon, POutlinedIcon, UsersIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Link from "next/link";

function Experience() {
  return (
    <section className="py-10 lg:py-28 bg-blue-terciary overflow-hidden">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative min-w-0 max-w-[576px] h-[576px] w-full">
            <div
              className="fade-left w-full h-full bg-cover bg-center mask-no-repeat mask-center mask-size-contain"
              style={{
                backgroundImage: `url(${getAssetPath("/images/contact/p.jpg")})`,
                maskImage: `url(${getAssetPath("/icons/p.svg")})`
              }}
            >
            </div>
            <POutlinedIcon className="w-full h-full absolute top-0 left-0 -ml-6 rotate-12" />
          </div>

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
