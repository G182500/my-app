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
        <p className="font-semibold opacity-80 text-sm underline underline-offset-4">
          Ver tudo
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {items.map((item, index) => {
          return <Item content={item} key={`item${index}`} />;
        })}
      </div>
    </div>
  );
};

export default ItemsCard;
