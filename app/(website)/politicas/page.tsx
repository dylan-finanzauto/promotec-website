import Wrapper from "@/modules/shared/ui/Wrapper"
import { getAssetPath } from "@/modules/shared/utils/paths";
import { POLICIES } from "@/modules/website/data/policies";
import Banner from "@/modules/website/ui/Banner";

type CardProps = {
  image: string;
  text: string;
}

const PolicyCard: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="fade-up group flex flex-col rounded-[30px] bg-gray-3 overflow-hidden shadow-sm transition-colors duration-300 hover:bg-[#d5e4f6]">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-[180px] sm:h-[200px] lg:h-[220px] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="h-[190px] px-[40px] py-[50px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-7 bg-gray-3 group-hover:bg-[#d5e4f6] transition-colors duration-300">
        <h3 className="text-[18px] lg:text-[29px] w-[150px] text-text-1 leading-snug font-bold">
          {text}
        </h3>
        <button className="py-2 px-4 sm:py-3 sm:px-10 w-fit rounded-[10px] text-[16px] sm:text-[18px] font-medium bg-yellow-primary text-white transition">
          Ver más
        </button>
      </div>
    </div>
  )
}

const Policies: React.FC = () => {
  return (
    <>
      <Banner
        titleTop="Nuestras"
        titleBottom="políticas"
        img={getAssetPath("/images/policies/banner.svg")}
      />

      <section className="py-20">
        <Wrapper>
          <div className="space-y-20">
            <h3 className="text-[30px] text-center text-blue-primary font-bold">Trabajamos con integridad, transparencia y responsabilidad en todo lo que hacemos.</h3>
            <div className="w-[1447px] mx-auto grid grid-cols-[repeat(3,469px)] auto-rows-[408px] gap-5">
              {POLICIES.map((p, i) => (
                <PolicyCard
                  key={i}
                  image={p.image}
                  text={p.text}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default Policies;
