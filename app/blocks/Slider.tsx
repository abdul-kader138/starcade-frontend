import { useState, useEffect, useRef } from "react";
import { Helper } from "~/utils/helper";
import Lang from "~/lang/lang";

const { slidesHorizental, slidesVertical } = new Helper();

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef<any>(null);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slidesHorizental.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-1 mx-4 md:px-6 lg:px-16 py-0.5 md:h-[750px]">
      {/* Horizontal Slider */}
      <div className="relative w-full mx-4 md:w-[83%] h-[300px] sm:h-[400px] md:h-full overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slidesHorizental.map((slide, index) => (
            <div
              key={index}
              className="min-w-full relative aspect-[16/9] md:aspect-[16/9] overflow-hidden rounded-3xl"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {slide.upcoming && (
                <div className="absolute top-4 left-6 z-10">
                  <span className="bg-[#FFFFFF33] text-white px-4 py-2.5 rounded-full text-[10px] sm:text-xs">
                    {Lang.coming_soon}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 z-10 bg-opacity-40 flex flex-col justify-end p-4 sm:p-6 space-y-2 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold px-0.5">
                  {slide.title}
                </h3>
                <h3 className="text-sm sm:text-xl leading-snug mb-2">
                  {slide.description
                    .split(" ")
                    .slice(
                      0,
                      Math.ceil(slide.description.split(" ").length / 2)
                    )
                    .join(" ")}
                  <br />
                  {slide.description
                    .split(" ")
                    .slice(Math.ceil(slide.description.split(" ").length / 2))
                    .join(" ")}
                </h3>
                {slide.preOrder && (
                  <button className="w-fit px-4 mt-2 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white text-white text-xs sm:text-sm font-medium bg-opacity-20 hover:bg-opacity-30 transition">
                    {Lang.pre_order}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Sidebar */}
      <div className="w-full md:w-[17%] h-auto md:h-full flex flex-col justify-between gap-3 md:mt-0">
        {slidesVertical &&
          slidesVertical.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: item.bgcolor }}
              className="relative w-full max-w-full flex items-center gap-3 p-3 rounded-2xl text-white hover:scale-105 transition-transform overflow-hidden"
            >
              {idx === current && (
                <div
                  key={current}
                  className="absolute inset-0 bg-white/30 animate-slide-progress z-0"
                />
              )}

              <div className="relative z-5 flex items-center gap-3 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-14 lg:h-16 lg:w-12 xl:h-18 xl:w-14 sm:w-12 sm:h-16 rounded"
                />
                <p className="text-xs sm:text-sm lg:text-md md:text-xs xl:text-md font-medium break-words w-full">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Tailwind-compatible animation */}
    </div>
  );
}
