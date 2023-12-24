import { useState } from "react";
import { carouselImg } from "../carouselItem";
import { Slider } from "./Slider";
import { CarouselButton } from "./CarouselButton";
import { Button } from "./Button";

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  function previousSlide() {
    setActiveSlide(
      (previousValue) =>
        (previousValue - 1 + carouselImg.length) % carouselImg.length
    );
  }
  function nextSlide() {
    setActiveSlide((previousValue) => (previousValue + 1) % carouselImg.length);
  }

  // useEffect(() => {
  //   const carouselSlides = setInterval(() => {
  //     nextSlide();
  //     console.log("Sliding...");
  //   }, 4000);

  //   return () => clearInterval(carouselSlides);
  // });
  return (
    <section className="carousel xl:h-[100vh] sm:h-[100vh] h-[50vh]">
      <div className="carousel-container relative h-[100%] w-full">
        <div className="left-arrow z-10 absolute left-0 top-0 flex justify-center items-center h-[50vh] sm:h-[100%]">
          <CarouselButton
            icon="./assets/chevron-left.svg"
            alt="left-arrow-icon"
            handleSlide={previousSlide}
          />
        </div>
        {carouselImg.map((item, index) => {
          return (
            <Slider
              key={item.id}
              index={index}
              activeSlide={activeSlide}
              item={item}
            />
          );
        })}
        <div className="button flex gap-4 justify-center items-center absolute w-full bottom-8 sm:bottom-28 md:bottom-32 lg:bottom-28">
          <Button text="Learn More" color="white" type="button" />
          <Button text="Contact" color="white" type="button" />
        </div>
        <div className="right-arrow z-10 absolute right-0 top-0 flex justify-center items-center h-[50vh]  sm:h-[100%]">
          <CarouselButton
            icon="./assets/chevron-right.svg"
            alt="right-arrow-icon"
            handleSlide={nextSlide}
          />
        </div>
      </div>
    </section>
  );
}

export { Carousel };
