'use client';
import { BikeIcon, CarIcon, HeartbeatIcon, HomeIcon, KeyFilledIcon, MapPinIcon, PawFilledIcon, SeedlingIcon, ShieldIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { AlterProductCard, ProductCard } from "./ProductCard";
import { useProductStore } from "@/modules/shared/store/product";
import InsuranceSelect from "../components/InsuranceSelect";
import { useMemo } from "react";
import { useForm } from "@tanstack/react-form";
import { redirect } from "next/navigation";

const mapping: Record<string, any> = {
  "Carros y Motos": {
    icon: <CarIcon className="size-6 text-blue-primary" />,
    href: "/productos/vehiculo",
  },
  "Bicis": {
    icon: <BikeIcon className="size-6 text-blue-primary" />,
    href: "/productos/bici",
  },
  "Mascotas": {
    icon: <PawFilledIcon className="size-6 text-blue-primary" />,
    href: "/productos/mascota",
  },
  "Hogar": {
    icon: <HomeIcon className="size-6 text-blue-primary" />,
    href: "/productos/hogar",
  },
  "Vida": {
    icon: <HeartbeatIcon className="size-6 text-blue-primary" />,
    href: "/productos/vida",
  },
  "Exequias": {
    icon: <SeedlingIcon className="size-6 text-blue-primary" />,
    href: "/productos/exequia",
  },
  "Arrendamiento": {
    icon: <KeyFilledIcon className="size-6 text-blue-primary" />,
    href: "/productos/arrendamiento",
  },
  "Accidentes Personales": {
    icon: <ShieldIcon className="size-6 text-blue-primary" />,
    href: "/productos/accidente",
  },
  "Asistencia en viajes": {
    icon: <MapPinIcon className="size-6 text-blue-primary" />,
    href: "/productos/viaje",
  }
}

const PolicyBar: React.FC = () => {

  const { products } = useProductStore();

  const form = useForm({
    defaultValues: {
      product: products.at(0)?.name || ''
    },
    onSubmit: ({ value }) => {
      redirect(mapping[value.product]?.href || '/productos');
    }
  })

  const productsItems = useMemo(() => products.map((p) => ({
    key: p.name,
    value: p.name,
  })), [products]);

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      e.stopPropagation()
      form.handleSubmit()
    }}>
      <div className="zoom-in p-6 hidden md:flex items-center gap-6 rounded-3xl shadow-lg bg-white">
        <span className="text-[20px] text-text-4 font-semibold">¿Qué seguro necesitas?</span>
        <form.Field
          name="product"
          children={(field) => (
            <InsuranceSelect
              items={productsItems}
              name={field.name}
              value={field.state.value}
              onChange={field.handleChange}
              renderItem={(item) => (
                <div className="flex items-center gap-4">
                  {mapping[item.key]?.icon}
                  <span className="text-[20px] text-[#1F2024]">{item.key}</span>
                </div>
              )}
            />
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              className="py-4 px-6 text-[20px] rounded-[10px] bg-yellow-primary hover:bg-yellow-primary-hover text-white transition-all cursor-pointer"
              disabled={!canSubmit || isSubmitting}
            >Cotizar</button>
          )}
        />
      </div>
    </form>
  )
}

const exceptions = new Set(["Accidentes Personales", "Asistencia en viajes"]);

function Quotes() {

  const { products } = useProductStore();

  return (
    <section className="relative pt-10 lg:pt-28 pb-14">

      <div className="absolute z-20 top-0 left-1/2 -translate-x-1/2 -mt-[53px]">
        <PolicyBar />
      </div>

      <Wrapper>
        <div className="space-y-10">
          <div className="space-y-[30px]">
            <h3 className="text-[60px] text-center text-blue-primary font-bold">Cotiza aquí el seguro ideal para ti</h3>
            <p className="text-[20px] text-center text-text-3 font-medium">Ofrecemos una amplia gama de seguros, diseñados para proteger lo que más valoras.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[408px] gap-5">

            {products.slice(0, 1).map((p, i) => (
              <AlterProductCard
                key={i}
                href={mapping[p.name]?.href || ''}
                image={p.images}
                text={exceptions.has(p.name) ? p.name : `Póliza de ${p.name}`}
              />
            ))}

            {products.slice(1, 5).map((p, i) => (
              <ProductCard
                key={i + 1}
                href={mapping[p.name]?.href || ''}
                image={p.images}
                text={exceptions.has(p.name) ? p.name : `Póliza de ${p.name}`}
              />
            ))}

          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Quotes;
