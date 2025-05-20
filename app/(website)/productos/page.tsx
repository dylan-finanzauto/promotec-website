import Wrapper from "@/modules/shared/ui/Wrapper";
import { PRODUCTS } from "@/modules/website/data/products";
import Banner from "@/modules/website/ui/Banner";

type CardProps = {
  image: string;
  text: string;
}

export const ProductCard: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="fade-up flex flex-col rounded-[30px] bg-gray1 overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className="flex-1 bg-center bg-cover"
      ></div>
      <div className="h-[178px] px-12 py-16 flex justify-between items-center gap-7">
        <h3 className="text-[30px] text-text1 leading-tight font-bold">
          {text}
        </h3>
        <button className="py-3 w-[160px] rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth-hover text-white transition-all cursor-pointer">Ver más</button>
      </div>
    </div>
  )
}

export const AlterProductCard: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="fade-up flex col-span-2 rounded-[30px] bg-gray1 overflow-hidden">
      <div className="w-2/5 px-24 flex flex-col justify-center gap-14">
        <h3 className="text-[30px] text-text1 leading-tight font-bold">
          <div>Póliza de</div>
          <div>Carros y</div>
          <div>Motos</div>
        </h3>
        <button className="py-3 rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Ver más</button>
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className="flex-1 bg-center bg-cover"
      ></div>
    </div>
  )
}

const Products: React.FC = () => {
  return (
    <>
      <Banner titleTop="Nuestros" titleBottom="productos" img="/Promotec.Website.Client/images/banner-products.png" />

      <section className="py-[100px]">
        <Wrapper>
          <div className="space-y-10">
            <div className="space-y-[30px]">
              <h3 className="text-[30px] text-center text-secn-blue font-bold">
                <div className="">Conoce las pólizas que te brindan tranquilidad</div>
                <div className="">en cada aspecto de tu vida</div>
              </h3>
              <p className="text-[20px] text-center text-text4 font-medium">¡Nos preocupamos por ti! por eso, diseñamos seguros que se ajustan a lo que realmente necesitas.</p>
            </div>
            <div className="grid grid-cols-3 auto-rows-[408px] gap-5">
              <AlterProductCard image={"/Promotec.Website.Client/images/auto_1@3x.png"} text={"Póliza de Carros y Motos"} />

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
