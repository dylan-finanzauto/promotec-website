import { AnglesIcon, CarIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { AlterProductCard, ProductCard } from "./ProductCard";
import { getAssetPath } from "@/modules/shared/utils/paths";
import { PRODUCTS } from "../data/products";

const PolicyBar: React.FC = () => {
  return (
    <div className="zoom-in p-6 flex items-center gap-6 rounded-3xl shadow-lg bg-white">
      <span className="text-[20px] text-text-4 font-semibold">¿Qué seguro necesitas?</span>
      <div className="p-4 rounded-lg w-xs border border-[#DEE5ED] flex items-center cursor-default">
        <div className="grow flex items-center gap-4">
          <CarIcon className="size-6 text-blue-primary" />
          <span className="text-[20px] text-[#1F2024]">Carros y motos</span>
        </div>
        <AnglesIcon />
      </div>
      <button className="py-4 px-6 text-[20px] rounded-[10px] bg-yellow-primary hover:bg-yellow-primary-hover text-white transition-all cursor-pointer">Cotizar</button>
    </div>
  )
}

function Quotes() {
  return (
    <section className="relative pt-28 pb-14">

      <div className="absolute z-20 top-0 left-1/2 -translate-x-1/2 -mt-[53px]">
        <PolicyBar />
      </div>

      <Wrapper>
        <div className="space-y-10">
          <div className="space-y-[30px]">
            <h3 className="text-[60px] text-center text-blue-primary font-bold">Cotiza aquí el seguro ideal para ti</h3>
            <p className="text-[20px] text-center text-text-3 font-medium">Ofrecemos una amplia gama de seguros, diseñados para proteger lo que más valoras.</p>
          </div>
          <div className="grid grid-cols-3 auto-rows-[408px] gap-5">
            <AlterProductCard image={getAssetPath("/images/products/1.png")} text={"Póliza de Carros y Motos"} />

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
  );
}

export default Quotes;
