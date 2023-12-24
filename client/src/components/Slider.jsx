function Slider({ item, index, activeSlide }) {
  return (
    <>
      <div
        className={`slide absolute top-0 left-0 h-full w-full flex justify-center items-center flex-col ${
          index === activeSlide && "active"
        }`}
      >
        <div className="box h-full w-full">
          <div className="img-slide h-full w-full">
            <img
              src={item.imgURL}
              alt="carousel slide images"
              className="h-full w-full"
            />
          </div>
          <div className="absolute sm:bottom-52 md:bottom-56 lg:bottom-56 bottom-28 w-full">
            <h2 className="text-white text-2xl text-center">{item.heading}</h2>
            <p className="text-gray-200 text-center md:w-[60%] lg:w-[50%] md:mx-auto">
              {item.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Slider };
