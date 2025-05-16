import Wrapper from "@/modules/shared/ui/Wrapper"
import { POLICIES } from "@/modules/website/data/policies";

type CardProps = {
  image: string;
  text: string;
}

const PolicyCard: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="flex flex-col rounded-[30px] bg-gray1 overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className="flex-1 bg-cover"
      />
      <div className="h-[178px] px-12 py-16 flex justify-between items-center gap-7">
        <h3 className="text-[30px] text-text1 leading-tight font-bold">
          {text}
        </h3>
        <button className="py-3 shrink-0 w-[160px] rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Ver más</button>
      </div>
    </div>
  )
}

const Policies: React.FC = () => {
  return (
    <>
      <header className="h-[500px] bg-princ-blue"></header>

      <section className="py-20">
        <Wrapper>
          <div className="space-y-20">
            <h3 className="text-[30px] text-center text-secn-blue font-bold">Trabajamos con integridad, transparencia y responsabilidad en todo lo que hacemos.</h3>
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
