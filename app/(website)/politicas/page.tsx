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
    <div className="fade-up flex flex-col rounded-[30px] bg-gray-3 overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className="flex-1 bg-cover"
      />
      <div className="h-[178px] px-12 py-16 flex justify-between items-center gap-7">
        <h3 className="text-[30px] text-text-1 leading-tight font-bold">
          {text}
        </h3>
        <button className="py-3 shrink-0 w-[160px] rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Ver más</button>
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
            <div className="grid grid-cols-3 auto-rows-[408px] gap-5">
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
