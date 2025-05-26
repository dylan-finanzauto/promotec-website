import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import { PRODUCTS } from "@/modules/website/data/products";
import Banner from "@/modules/website/ui/Banner";
import { AlterProductCard, ProductCard } from "@/modules/website/ui/ProductCard";

const Products: React.FC = () => {
  return (
    <>
      <Banner
        titleTop="Nuestros"
        titleBottom="productos"
        img={getAssetPath("/images/products/banner.png")}
      />

      <section className="py-[100px]">
        <Wrapper>
          <div className="space-y-10">
            <div className="space-y-[30px]">
              <h3 className="text-[30px] text-center text-blue-primary font-bold">
                <div className="">Conoce las pólizas que te brindan tranquilidad</div>
                <div className="">en cada aspecto de tu vida</div>
              </h3>
              <p className="text-[20px] text-center text-text-3 font-medium">¡Nos preocupamos por ti! por eso, diseñamos seguros que se ajustan a lo que realmente necesitas.</p>
            </div>
            <div className="grid grid-cols-3 auto-rows-[408px] gap-5">
              <AlterProductCard image={getAssetPath("/images/products/1.png")} text={"Póliza de Carros y Motos"} />

              {PRODUCTS.map((p, i) => (
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
    </>
  )
}

export default Products;
