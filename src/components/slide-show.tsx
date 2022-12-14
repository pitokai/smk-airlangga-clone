import { SyntheticEvent, useEffect, useState } from "react";
import { ButtonScroll } from ".";
import { dataslider } from "../data";

export function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => s + 1);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (currentSlide >= dataslider.length) {
    setCurrentSlide(0);
  }

  return (
    <div className="slider">
      {dataslider.map((slide, index) => {
        return (
          <div
            key={index}
            className={`${index === currentSlide ? "slide current" : "slide"}`}
          >
            {index === currentSlide && (
              <div className="h-screen w-screen">
                <img
                  src={slide.image + ".jpg"}
                  alt={slide.desc}
                  className="absolute z-[-100] h-screen w-screen bg-black bg-opacity-0 bg-opacity-50"
                />
                <div className="content flex h-full w-full items-center justify-center bg-black bg-opacity-0 bg-opacity-50">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="font-brand-bold text-3xl uppercase leading-tight tracking-widest lg:text-6xl">
                      {slide.desc.split(" ").map((paragraph: string) => {
                        return (
                          <p className="leading-tight" key={paragraph}>
                            {paragraph}
                          </p>
                        );
                      })}
                    </h1>
                    <ButtonScroll children="Know More" where="about" />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SlideShow;
