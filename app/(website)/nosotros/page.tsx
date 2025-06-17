'use client';
import RichText from "@/modules/shared/components/RichText";
import { aboutStore } from "@/modules/shared/store/about";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Banner from "@/modules/website/ui/Banner";
import Certified from "@/modules/website/ui/Certified";
import Image from "next/image";

const About: React.FC = () => {

  const { about } = aboutStore()

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
            <div className="max-w-[1060px] min-w-0 w-full mx-auto text-[20px] space-y-8 text-text-3 font-medium text-center">
              <RichText text={about?.description || ""} />
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-24">
        <Wrapper>
          <div className="space-y-5">
            <div className="fade-up grid md:grid-cols-3 auto-rows-fr gap-5">
              <div className="md:col-span-2 p-10 md:py-20 md:px-28 rounded-[30px] bg-blue-secondary space-y-10">
                <h3 className="text-3xl font-bold text-blue-terciary">Nuestra <b className="text-white">Misión</b></h3>
                <p className="text-[20px] text-white">{about?.mision}</p>
              </div>
              <div
                className="rounded-[30px] bg-blue-terciary bg-center bg-cover"
                style={{
                  backgroundImage: `url(${getAssetPath("/images/about/mission.jpg")})`
                }}
              />
            </div>

            <div className="fade-up grid md:grid-cols-3 auto-rows-fr gap-5 group">
              <div className="relative rounded-[30px] overflow-hidden">
                <Image className="absolute top-0 left-0 w-full h-full object-center object-cover scale-[1.2] group-hover:scale-150 transition-all duration-500" src={getAssetPath("/images/about/vision.jpg")} alt="" width={748} height={499} />
              </div>
              <div className="md:col-span-2 p-10 md:py-20 md:px-28 rounded-[30px] bg-blue-secondary space-y-10">
                <h3 className="text-3xl font-bold text-blue-terciary">Nuestra <b className="text-white">Visión</b></h3>
                <p className="text-[20px] text-white">{about?.vision}</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="relative bg-blue-terciary">
        <Wrapper className="">
          <div className="py-24 md:w-10/12 space-y-10">
            <h4 className="text-[40px] text-blue-primary text-center font-bold">Nuestros valores</h4>
            <div className="grid md:grid-cols-2 auto-rows-[210px] gap-5">
              {about?.moral.map((value, index) => (
                <div className="zoom-in px-14 py-4 rounded-[20px] flex items-center bg-white" key={index}>
                  <h6 className="w-2/3 text-3xl text-text-1 font-bold">{value}</h6>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>

        <Image
          className="fade-left hidden xl:block absolute right-0 bottom-0 h-[90%] mr-20"
          src={getAssetPath("/images/about/values.png")}
          alt=""
          width={558}
          height={643}
        />
      </section>

      <section className="py-12 overflow-hidden">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <Image
              src={getAssetPath("/images/about/p.png")}
              alt=""
              width={822}
              height={874}
              className="fade-left -m-24"
            />
            <div className="space-y-[50px]">
              <h2 className="text-[50px] text-text-4 font-bold leading-tight">Nuestra experiencia, el respaldo que necesitas</h2>
              <div className="space-y-10">
                <p className="text-[20px] text-text-3 font-medium">
                  <RichText text={about?.experience || ""} />
                </p>
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
