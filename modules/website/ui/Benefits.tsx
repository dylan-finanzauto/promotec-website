import Wrapper from "@/modules/shared/ui/Wrapper";
import { BENEFITS } from "../data/benefits";
import Image from "next/image";
import RichText from "@/modules/shared/components/RichText";

export const BenefitCard: React.FC<{ title: string, text: string, img: string }> = ({ title, text, img }) => {
  return (
    <div className="zoom-in py-8 px-14 space-y-4 rounded-[20px] flex flex-col lg:flex-row items-center gap-7 bg-white">
      <Image
        src={img}
        alt=""
        width={96}
        height={113}
      />
      <div className="space-y-3">
        <h6 className="w-2/3 text-3xl text-text-1 font-bold">{title}</h6>
        <p className="text-text-4 font-medium">
          <RichText text={text} />
        </p>
      </div>
    </div>
  )
}

function Benefits() {
  return (
    <section className="py-[100px] bg-gray-3">
      <Wrapper>
        <div className="space-y-[30px] w-10/12 mx-auto">
          <h4 className="text-[40px] text-blue-primary text-center font-bold">Conoce los beneficios de tener una póliza con Promotec</h4>
          <p className="text-[20px] text-center text-text-3 font-medium">Encuentra en Promotec una amplia gama de seguros para todas las necesidades y presupuestos.</p>
          <div className="grid md:grid-cols-2 auto-rows-auto gap-5">
            {BENEFITS.map((b, i) => <BenefitCard key={i} title={b.title} text={b.text} img={b.img} />)}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Benefits;
