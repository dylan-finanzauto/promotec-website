'use client';
import { POutlinedIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Banner from "@/modules/website/ui/Banner";
import Certified from "@/modules/website/ui/Certified";
import Image from "next/image";

const About: React.FC = () => {

  return (
    <>
      <Banner
        titleTop="¿Quiénes"
        titleBottom="somos?"
        img={getAssetPath("/images/about/banner.png")}
      />

      <section className="py-20 bg-gray-3">
        <Wrapper>
          <div className="space-y-14">
            <h2 className="text-[44px] text-blue-primary font-bold text-center">Promotec, más de 40 años protegiendo lo que más valoras.</h2>
            <div className="text-[20px] space-y-8 text-text-3 font-medium text-center">
              <p className="">Somos una agencia experta en seguros, con presencia nacional y una trayectoria que respalda tu tranquilidad.</p>
              <p className="">Diseñamos soluciones personalizadas, respaldadas por las mejores aseguradoras del país, y te acompañamos con asesoría cercana, profesional y pensada para proteger cada etapa de tu vida.</p>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-24">
        <Wrapper>
          <div className="space-y-5">
            <div className="fade-up grid grid-cols-3 gap-5">
              <div className="col-span-2 py-20 px-28 rounded-[30px] bg-blue-secondary space-y-10">
                <h3 className="text-3xl font-bold text-blue-terciary">Nuestra <b className="text-white">Misión</b></h3>
                <p className="text-[20px] text-white">Desarrollar soluciones de aseguramiento personalizadas que maximicen el valor y la rentabilidad de nuestros clientes, y fortalezcan su seguridad y tranquilidad. Ser un aliado estratégico, comprometido con su crecimiento y protección en un entorno en constante cambio, adaptándonos a sus necesidades y superando sus expectativas.</p>
              </div>
              <div
                className="rounded-[30px] bg-blue-terciary bg-center bg-cover"
                style={{
                  backgroundImage: `url(${getAssetPath("/images/about/mission.jpg")})`
                }}
              />
            </div>
            <div className="fade-up grid grid-cols-3 gap-5">
              <div
                className="rounded-[30px] bg-blue-terciary bg-center bg-cover"
                style={{
                  backgroundImage: `url(${getAssetPath("/images/about/vision.jpg")})`
                }}
              />
              <div className="col-span-2 py-20 px-28 rounded-[30px] bg-blue-secondary space-y-10">
                <h3 className="text-3xl font-bold text-blue-terciary">Nuestra <b className="text-white">Visión</b></h3>
                <p className="text-[20px] text-white">Ser la agencia de seguros líder en el desarrollo de soluciones personalizadas que optimicen el valor y la rentabilidad para nuestros clientes. Nos comprometemos a ser un socio estratégico, brindando apoyo continuo en su crecimiento y protección, adaptándonos proactivamente a un entorno en constante evolución.</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="relative bg-blue-terciary">
        <Wrapper className="">
          <div className="py-24 w-10/12 space-y-10">
            <h4 className="text-[40px] text-blue-primary text-center font-bold">Nuestros valores</h4>
            <div className="grid grid-cols-2 grid-rows-2 gap-5 h-[422px]">
              <div className="zoom-in px-14 rounded-[20px] flex items-center bg-white">
                <h6 className="w-2/3 text-3xl text-text-1 font-bold">Colaboración y trabajo en equipo</h6>
              </div>
              <div className="zoom-in px-14 rounded-[20px] flex items-center bg-white">
                <h6 className=" w-2/3 text-3xl text-text-1 font-bold">Innovación centrada en el cliente</h6>
              </div>
              <div className="zoom-in px-14 rounded-[20px] flex items-center bg-white">
                <h6 className="w-2/3 text-3xl text-text-1 font-bold">Excelencia Operacional</h6>
              </div>
              <div className="zoom-in px-14 rounded-[20px] flex items-center bg-white">
                <h6 className="w-2/3 text-3xl text-text-1 font-bold">Cultura Digital</h6>
              </div>
            </div>
          </div>
        </Wrapper>

        <Image
          className="fade-left absolute right-0 bottom-0 h-[90%] mr-20"
          src={getAssetPath("/images/about/values.png")}
          alt=""
          width={558}
          height={643}
        />
      </section>

      <section className="py-12">
        <Wrapper>
          <div className="flex items-center gap-10">
            <div className="relative">
              <div
                className="fade-left size-[576px] bg-cover bg-center mask-no-repeat mask-center mask-size-contain"
                style={{
                  backgroundImage: `url(${getAssetPath("/images/about/p.jpg")})`,
                  maskImage: `url(${getAssetPath("/icons/p.svg")})`
                }}
              />
              <POutlinedIcon className="size-[576px] absolute top-0 left-0 -ml-6 rotate-12" />
            </div>
            <div className="space-y-[50px]">
              <h2 className="text-[50px] text-text-4 font-bold leading-tight">Nuestra experiencia, el respaldo que necesitas</h2>
              <div className="space-y-10">
                <p className="text-[20px] text-text-3 font-medium">Somos una agencia dedicada a la asesoría en seguros a nivel nacional con más de 40 años brindando atención y servicio.</p>
                <p className="text-[20px] text-text-3 font-medium">Nuestro objetivo es asegurar cada instante de la vida de nuestros clientes a través de la estructuración de seguros y el respaldo de las compañías aseguradoras; con el fin de que nuestros clientes obtengan calidad en asesoría, experiencia y variedad en productos.</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <Certified />

    </>
  )
}

export default About;
