import Wrapper from "@/modules/shared/ui/Wrapper";
import Carousel from "@/modules/website/ui/Carousel";
import { AlterProductCard, ProductCard } from "./productos/page";
import { PRODUCTS } from "@/modules/website/data/products";
import CarIcon from "@/modules/shared/components/icons/CarIcon";
import AnglesIcon from "@/modules/shared/components/icons/AnglesIcon";
import POutlinedIcon from "@/modules/shared/components/icons/POutlinedIcon";
import React from "react";
import { BENEFITS } from "@/modules/website/data/benefits";
import { ATTENDANCES } from "@/modules/website/data/attendances";

const PolicyBar: React.FC = () => {
  return (
    <div className="zoom-in p-6 flex items-center gap-6 rounded-3xl shadow-lg bg-white">
      <span className="text-[20px] text-text font-semibold">¿Qué seguro necesitas?</span>
      <div className="p-4 rounded-lg w-xs border border-[#DEE5ED] flex items-center cursor-default">
        <div className="grow flex items-center gap-4">
          <CarIcon className="size-6 text-secn-blue" />
          <span className="text-[20px] text-[#1F2024]">Carros y motos</span>
        </div>
        <AnglesIcon />
      </div>
      <button className="py-4 px-6 text-[20px] rounded-[10px] bg-tirth hover:bg-tirth-hover text-white transition-all cursor-pointer">Cotizar</button>
    </div>
  )
}

const BenefitCard: React.FC<{ title: string, text: string, img: string }> = ({ title, text, img }) => {
  return (
    <div className="zoom-in px-14 rounded-[20px] flex items-center gap-7 bg-white">
      <img src={img} alt="" />
      <div className="space-y-3">
        <h6 className="w-2/3 text-3xl text-text1 font-bold">{title}</h6>
        <p className="text-text font-medium">{text}</p>
      </div>
    </div>
  )
}

const Personas: React.FC = () => {
  return (
    <main>
      <Carousel />

      <section className="relative pt-28 pb-14">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-[53px]">
          <PolicyBar />
        </div>

        <Wrapper>
          <div className="space-y-10">
            <div className="space-y-[30px]">
              <h3 className="text-[60px] text-center text-secn-blue font-bold"> Cotiza aquí el seguro ideal para ti</h3>
              <p className="text-[20px] text-center text-text4 font-medium">Ofrecemos una amplia gama de seguros, diseñados para proteger lo que más valoras.</p>
            </div>
            <div className="grid grid-cols-3 auto-rows-[408px] gap-5">
              <AlterProductCard image={"/Promotec.Website.Client/images/auto_1@3x.png"} text={"Póliza de Carros y Motos"} />

              {PRODUCTS.slice(0, 4).map((p, i) => (
                <ProductCard
                  key={i}
                  image={p.image}
                  text={p.text}
                />
              ))}

            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[100px] bg-gray1">
        <Wrapper>
          <div className="space-y-[30px] w-10/12 mx-auto">
            <h4 className="text-[40px] text-secn-blue text-center font-bold">Conoce los beneficios de tener una póliza con Promotec</h4>
            <p className="text-[20px] text-center text-text4 font-medium">Encuentra en Promotec una amplia gama de seguros para todas las necesidades y presupuestos.</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-5 h-[422px]">

              {BENEFITS.map((b, i) => <BenefitCard key={i} title={b.title} text={b.text} img={b.img} />)}

            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-28 bg-princ-blue">
        <Wrapper>
          <div className="flex gap-10">
            <div className="relative">
              <div className="fade-left size-[576px] bg-[url('/Promotec.Website.Client/images/young-happy-couple.jpg')] bg-cover bg-center mask-[url('/Promotec.Website.Client/icons/p.svg')] mask-no-repeat mask-center mask-size-contain">
              </div>
              <POutlinedIcon className="size-[576px] absolute top-0 left-0 -ml-6 rotate-12" />
            </div>

            <div className="space-y-16 pt-14">
              <h2 className="text-[50px] leading-none text-text font-bold">+ de 40 años protegiendo lo que más valoras.</h2>
              <p className="text-[20px] text-text font-medium">Somos la elección confiable de miles de familias, personas y negocios, asegurando su bienestar con un servicio cercano y efectivo.</p>
              <div className="">
                <button className="py-3 w-[162px] text-[20px] rounded-[10px] bg-tirth text-white cursor-pointer">Cotizar</button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[100px]">
        <Wrapper>
          <div className="space-y-10">
            <h3 className="text-[40px] text-secn-blue font-bold text-center">Aseguradoras aliadas</h3>
            <div className="relative w-full md:w-auto flex overflow-x-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <div className="flex gap-5 animate-marquee whitespace-nowrap">
                {ATTENDANCES.map((a, i) => <img key={i} src={a.url} className="w-auto h-8" />)}
              </div>
              <div className="absolute top-0 ml-5 flex gap-5 animate-marquee2 whitespace-nowrap">
                {ATTENDANCES.map((a, i) => <img key={i} src={a.url} className="w-auto h-8" />)}
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* <Quotes /> */}
      {/* <Benefits /> */}
      {/* <Experience /> */}
      {/* <Clients /> */}
      {/* <Insurance /> */}
      {/* <Consulting /> */}
      {/* <Certified /> */}

      <section className="py-[100px] bg-gray1">
        <Wrapper>
          <div className="space-y-8">
            <h4 className="text-[40px] text-secn-blue text-center font-bold">Estamos certificados</h4>
            <div className="text-[20px] text-text4 text-center font-medium">
              <p className="">Contamos con la certificación <b>Bureau Veritas ISO 9001:2015</b></p>
              <p className="">Venta, Fabricación, Gestión de Cartera y Servicio al Cliente para Pólizas de Seguros Personales y Automotores.</p>
            </div>
            <div className="flex justify-center">
              <img className="fade-down" src="/Promotec.Website.Client/icons/iso9001.svg" alt="" />
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  )
}

export default Personas;
