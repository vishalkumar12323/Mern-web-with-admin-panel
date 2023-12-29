import { Card } from "../components/Card";
import { services } from "../services";

function Services() {
  return (
    <div className="py-4 px-2 m-4">
      <div className="py-1">
        <h2 className="text-3xl">Courses / Services</h2>
      </div>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-4 gap-4">
        {services.map((item) => {
          const { course, discription, price, img, lavel } = item;
          return (
            <Card
              key={item.id}
              course={course}
              discription={discription}
              price={price}
              img={img}
              lavel={lavel}
            />
          );
        })}
      </div>
    </div>
  );
}

export { Services };
