import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const slides = [
  { image: "/images/slider/slider3.webp" },
  { image: "/images/slider/slider1.webp" },
  { image: "/images/slider/slider2.webp" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const slideInterval:any = useRef(null);

  const nextSlide = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  const prevSlide = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)`, transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[570px] bg-cover bg-center relative scale-95 opacity-80 transition-transform duration-700"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: current === index ? "scale(1)" : "scale(0.9)",
              opacity: current === index ? 1 : 0.7,
            }}
          />
        ))}
      </div>

      <button
        onClick={() => {
          prevSlide();
          clearInterval(slideInterval.current);
        }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-opacity-60 p-3 rounded-full text-white shadow-md"
      >
        <ChevronLeftIcon className="h-7 w-7" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          clearInterval(slideInterval.current);
        }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-opacity-60 p-3 rounded-full text-white shadow-md"
      >
        <ChevronRightIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
