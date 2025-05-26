'use client';
import { ChevronLeftIcon, ChevronRightIcon } from "@/modules/shared/components/SVGIcons";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";

type Product = {
  name: string,
  description: string,
  image: string,
  link: {
    href: string,
    label: string
  }
}

const Slider: React.FC<{
  products: Product[]
}> = ({ products }) => {
  const [active, setActive] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const nextActive = () => {
    setActive((prev) => (prev + 1) % products.length);
  }
  const prevActive = () => {
    setActive((prev) => (prev - 1 + products.length) % products.length);
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextActive()
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  return (
    <header className="relative z-10 h-[700px] bg-white overflow-hidden">

      {products.map((p, idx) => (
        <Hero
          key={idx}
          product={p.name}
          description={p.description}
          image={p.image}
          link={p.link}
          active={active === idx}
        />
      ))}

      <div className="absolute z-20 left-0 top-1/2 -translate-y-1/2 w-full px-8 flex justify-between items-center">
        <button
          className="size-10 rounded-full grid place-items-center bg-gray-3 cursor-pointer"
          onClick={prevActive}
        >
          <ChevronLeftIcon className="size-5 text-blue-primary" />
        </button>
        <button
          className="size-10 rounded-full grid place-items-center bg-[#F0F2F9] cursor-pointer"
          onClick={nextActive}
        >
          <ChevronRightIcon className="size-5 text-blue-primary" />
        </button>
      </div>

      <div className="absolute z-20 left-0 bottom-0 w-full mb-[72px]">
        <div className="w-sm mx-auto flex justify-center items-center gap-2">
          {products.map((_, i) => (
            <div
              key={i}
              className={`size-3 rounded-full border border-white cursor-pointer bg-blue-terciary [&.active]:bg-blue-primary transition-all duration-500 [&.active]:w-6 ${active == i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            ></div>
          ))}
        </div>
      </div>

    </header>


  );
}

export default Slider;
