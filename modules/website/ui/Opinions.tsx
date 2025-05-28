'use client';
import { ArrowLeftIcon, ArrowRightIcon } from "@/modules/shared/components/SVGIcons";
import { opinionStore } from "@/modules/shared/store/opinions";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

function Opinions() {
  const { opinions } = opinionStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const { next, prev } = useMemo(() => ({
    next: () => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % opinions.length);
        setIsAnimating(false);
      }, 300);
    },
    prev: () => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + opinions.length) % opinions.length);
        setIsAnimating(false);
      }, 300);
    },
  }), [opinions]);

  const currentOpinion = useMemo(() => opinions[currentIndex], [currentIndex, opinions]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, opinions]);

  return (
    <section className="py-[100px] bg-gray-3">
      <Wrapper>
        <div className="space-y-10">
          <div className="space-y-4 w-10/12 mx-auto">
            <h4 className="text-4xl text-blue-primary text-center font-bold">Lo que nuestros clientes dicen:</h4>
            <p className="text-[20px] text-blue-primary text-center">
              La satisfacción de nuestros clientes es nuestra mayor recompensa. Descubre cómo nuestras soluciones financieras han transformado la vida de quienes confiaron en nosotros.
            </p>
          </div>
          <div
            className={`space-y-8 flex flex-col items-center transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}
          >
            <p className="text-2xl text-text-3 font-semibold text-center">{currentOpinion.comentario}</p>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <Image
                className="rounded-full"
                src={currentOpinion.avatar}
                alt="Avatar"
                width={48}
                height={48}
              />
              <span className="text-text-4 font-semibold">{currentOpinion.nombre}</span>
              <span className="text-text-4 font-semibold">/</span>
              <span className="text-sm text-gray-5">{currentOpinion.ramo}</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <button onClick={prev} aria-label="Anterior">
              <ArrowLeftIcon className="text-blue-secondary cursor-pointer" />
            </button>
            <button onClick={next} aria-label="Siguiente">
              <ArrowRightIcon className="text-blue-secondary cursor-pointer" />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Opinions;
