import { Product } from "@/interfaces/product";
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

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-x-2 gap-y-3">
        {items.map((item) => (
          <Item
            id={item.id}
            image={item.image}
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
