import { Product } from "@/interfaces/product";
import Item from "./item";

interface ItemsCardProps {
  title: string;
  items: Product[];
}

const ItemsCard = ({ title, items }: ItemsCardProps) => {
  return (
    <div className="flex flex-col bg-[#2e2e2e] p-3 rounded-lg space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">{title}</p>
        <p className="font-semibold opacity-80 text-sm underline underline-offset-4">
          Ver tudo
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item, index) => {
          return <Item content={item} key={`item${index}`} />;
        })}
      </div>
    </div>
  );
};

export default ItemsCard;
