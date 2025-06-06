'use client';
import { ChevronLeftIcon, ChevronRightIcon } from "@/modules/shared/components/SVGIcons";
import { useEffect, useMemo, useRef, useState } from "react";
import Hero from "./Hero";
import { useQuery } from "@tanstack/react-query";
import { carousel } from "@/modules/shared/services/product";

const links: Record<string, { href: string, label: string }> = {
  "54b496fe-a8e4-4237-8d89-8d3cd377e5a4": {
    href: "/productos/vehiculos",
    label: "¡Cotiza tu seguro aquí!"
  },
  "b1c9892d-574c-4b6d-a952-db8c024cb101": {
    href: "/productos/bici",
    label: "¡Cotiza tu seguro aquí!"
  },
  "45e32c5e-26db-4f95-8b85-49cfd8518587": {
    href: "/productos/mascota",
    label: "¡Cotiza tu seguro aquí!"
  },
  "21d7996c-fccc-474a-843a-a82417f4fef8": {
    href: "/productos/hogar",
    label: "¡Cotiza tu seguro aquí!"
  },
  "85c6aead-4a08-4e39-8df7-28cc8bec0fae": {
    href: "/productos/vida",
    label: "¡Cotiza tu plan aquí!"
  },
}

type Hero = {
  title: string;
  description: string;
  image: string;
  link: {
    href: string;
    label: string;
  }
}

const Slider: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const { data, isLoading } = useQuery({
    queryKey: ['carousel'],
    queryFn: carousel
  })

  const heros: Hero[] = useMemo(() => {
    if (!data || data.length === 0) return [];
    return data.map((item: any) => ({
      title: item.name,
      description: item.description,
      image: item.images,
      link: links[item.id] || { href: '#', label: '¡Cotiza tu seguro aquí!' }
    }));
  }, [data])

  const { next, prev } = useMemo(() => ({
    next: () => setActive((prev) => (prev + 1) % heros.length),
    prev: () => setActive((prev) => (prev - 1 + heros.length) % heros.length),
  }), [heros])

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next()
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [active, heros]);

  if (isLoading) return (
    <div className="flex items-center bg-gray-700 justify-center h-[700px]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-primary"></div>
    </div>
  )

  return (
    <>
      <header className="relative z-10 h-[700px] bg-white overflow-hidden">

        {heros.map((h, idx) => (
          <Hero
            key={idx}
            title={h.title}
            description={h.description}
            image={h.image}
            link={h.link}
            active={active === idx}
          />
        ))}

        <div className="absolute z-20 left-0 top-1/2 -translate-y-1/2 w-full px-8 flex justify-between items-center">
          <button
            className="size-10 rounded-full grid place-items-center bg-gray-3 cursor-pointer"
            onClick={prev}
          >
            <ChevronLeftIcon className="size-5 text-blue-primary" />
          </button>
          <button
            className="size-10 rounded-full grid place-items-center bg-[#F0F2F9] cursor-pointer"
            onClick={next}
          >
            <ChevronRightIcon className="size-5 text-blue-primary" />
          </button>
        </div>

        <div className="absolute z-20 left-0 bottom-0 w-full mb-[72px]">
          <div className="w-sm mx-auto flex justify-center items-center gap-2">
            {heros.map((_, i) => (
              <div
                key={i}
                className={`size-3 rounded-full border border-white cursor-pointer bg-blue-terciary [&.active]:bg-blue-primary transition-all duration-500 [&.active]:w-6 ${active == i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              ></div>
            ))}
          </div>
        </div>
      </header>

    </>
  );
}

export default Slider;
