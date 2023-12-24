function CarouselButton({ icon, alt, handleSlide }) {
  return (
    <img
      src={icon}
      alt={alt}
      onClick={handleSlide}
      className="cursor-pointer"
    />
  );
}
export { CarouselButton };
