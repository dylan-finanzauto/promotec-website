'use client';
import { useEffect, useState } from "react";
import Hero from "./Hero";
import { ChevronLeftIcon, ChevronRightIcon } from "@/modules/shared/components/SVGIcons";

const slides = [
  { id: 1, image: '/image1.jpg', alt: 'Slide 1' },
  { id: 2, image: '/image2.jpg', alt: 'Slide 2' },
  { id: 3, image: '/image3.jpg', alt: 'Slide 3' },
];

const Carousel: React.FC = () => {

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-all duration-1000"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0">
              <Hero />
            </div>
          ))}
        </div>

      </div>

      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex justify-between px-8"
      >
        <button
          className="size-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out"
          onClick={() => prev()}
        >
          <ChevronLeftIcon className="size-5 text-blue-primary" />
        </button>

        <button
          className="size-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out"
          onClick={() => next()}
        >
          <ChevronRightIcon className="size-5 text-blue-primary" />
        </button>
      </div>

    </>
  );
}

export default Carousel;
