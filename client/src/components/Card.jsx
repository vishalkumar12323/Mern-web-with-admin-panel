function Card({ course, discription, price, img, lavel }) {
  return (
    <div className="mx-auto sm:max-w-full md:max-w- lg:max-w-full p-2 bg-[#1e293b] rounded-md shadow-md">
      <div className="img">
        <img src={img} alt="img" />
      </div>
      <div className="top px-2">
        <p
          className={`text-white my-3 px-2 text-xs bg-yellow-500 bg-opacity-20 rounded-md w-fit`}
        >
          {lavel}
        </p>
        <h3 className="text-white text-2xl">{course}</h3>
        <p className="text-xl text-slate-200 py-3">{discription}</p>
      </div>
      <div className="bottom px-2 mt-2 flex justify-between items-center">
        <button className=" py-1 cursor-pointer text-white shadow-md">
          Enroll
        </button>
        <span className="text-white">{price}</span>
      </div>
    </div>
  );
}
export { Card };
