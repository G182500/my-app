import { Product } from "@/interfaces/product";
import sehnsucht from "@/assets/imgs/sehnsucht.jpg";
import Item from "./item";

interface ItemsCardProps {
  title: string;
  items: Product[];
}

const ItemsCard = ({ title, items }: ItemsCardProps) => {
  return (
    <div className="flex flex-col bg-[#2e2e2e] p-4 md:rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">{title}</p>
        <p className="font-semibold opacity-90 text-sm underline underline-offset-4">
          Show all
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {items.map((item) => (
          <Item
            image={sehnsucht}
            id={item.id}
            title={item.title}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsCard;
