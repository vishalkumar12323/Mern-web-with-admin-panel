function Item({ amount, name, icon, alt }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={icon} alt={alt} />
        <div className="text-center">
          <h1 className="md:text-2xl">{amount}</h1>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}

export { Item };
