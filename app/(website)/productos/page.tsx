'use client'
import { useProductStore } from "@/modules/shared/store/product";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Banner from "@/modules/website/ui/Banner";
import { AlterProductCard, ProductCard } from "@/modules/website/ui/ProductCard";

const hrefs = [
  "/productos/vehiculo",
  "/productos/bici",
  "/productos/mascota",
  "/productos/hogar",
  "/productos/vida",
  "/productos/exequia",
  "/productos/arrendamiento",
  "/productos/accidente",
  "/productos/viaje",
]

const exceptions = new Set(["Accidentes Personales", "Asistencia en viajes"]);

const Products: React.FC = () => {

  const { products } = useProductStore();

  return (
    <>
      <Banner
        title="Nuestros"
        subtitle="productos"
        image={"/images/products/banner.png"}
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[408px] gap-5">

              {products.slice(0, 1).map((p, i) => (
                <AlterProductCard
                  key={i}
                  href={hrefs.at(i) || ''}
                  image={p.images}
                  text={exceptions.has(p.name) ? p.name : `Póliza de ${p.name}`}
                />
              ))}

              {products.slice(1).map((p, i) => (
                <ProductCard
                  key={i + 1}
                  href={hrefs.at(i + 1) || ''}
                  image={p.images}
                  text={exceptions.has(p.name) ? p.name : `Póliza de ${p.name}`}
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
