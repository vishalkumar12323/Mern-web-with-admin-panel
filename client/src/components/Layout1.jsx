import { Item } from "./Item";
const item = [
  {
    id: 1,
    amount: "3,999",
    name: "Product",
    icon: "./assets/bag-fill.svg",
    alt: "product img",
  },
  {
    id: 2,
    amount: "1,211",
    name: "$Revenue",
    icon: "./assets/currency-dollar.svg",
    alt: "dollar img",
  },
  {
    id: 3,
    amount: "999",
    name: "Shared Project",
    icon: "./assets/bag-fill.svg",
    alt: "project img",
  },
  {
    id: 4,
    amount: "1,699",
    name: "Client",
    icon: "./assets/people-fill.svg",
    alt: "people img",
  },
];
function Layout1() {
  return (
    <section className="layout-1 py-4 md:py-7 lg:py-10">
      <div className=" w-3/4 mx-auto p-2 md:p-4 lg:p-8 flex flex-col flex-wrap gap-10 sm:flex-row md:flex-row md:gap-2 md:justify-around shadow border">
        {item.map((i) => {
          return (
            <Item
              key={i.id}
              amount={i.amount}
              name={i.name}
              icon={i.icon}
              alt={i.alt}
            />
          );
        })}
      </div>
    </section>
  );
}

export { Layout1 };
