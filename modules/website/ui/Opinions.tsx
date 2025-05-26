import { ArrowLeftIcon, ArrowRightIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Image from "next/image";

function Opinions() {
  return (

    <section className="py-[100px] bg-gray-3">
      <Wrapper>
        <div className="space-y-10">
          <div className="space-y-4 w-10/12 mx-auto">
            <h4 className="text-4xl text-blue-primary text-center font-bold">Lo que nuestros clientes dicen:</h4>
            <p className="text-[20px] text-blue-primary text-center">La satisfacción de nuestros clientes es nuestra mayor recompensa. Descubre cómo nuestras soluciones financieras han transformado la vida de quienes confiaron en nosotros.</p>
          </div>
          <div className="space-y-8 flex flex-col items-center">
            <p className="text-2xl text-text-3 font-semibold text-center">{"Encontré el mejor producto que se ajustó a mis necesidades y expectativas, excelente servicio en proceso de venta y reclamaciones."}</p>
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full"
                src={getAssetPath("/images/home/avatar.png")}
                alt="Avatar"
                width={24}
                height={24}
              />
              <span className="text-text-4 font-semibold">Camilo Rivera</span>
              <span className="text-text-4 font-semibold">/</span>
              <span className="text-sm text-gray-5">Cliente Seguros Hogar</span>
            </div>
            <div className="flex items-center gap-6">
              <ArrowLeftIcon className="text-blue-secondary" />
              <ArrowRightIcon className="text-blue-secondary" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>

  );
}

export default Opinions;
