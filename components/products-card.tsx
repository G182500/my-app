import { IProduct } from "@/interfaces/product";
import Product from "./product";

interface ProductsCardProps {
  title: string;
  items: IProduct[];
}

const ProductsCard = ({ title, items }: ProductsCardProps) => {
  return (
    <div className="flex flex-col bg-[#1d1d1d] p-4 space-y-4 sm:rounded-lg">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">{title}</p>
        <p className="font-semibold opacity-90 text-sm underline underline-offset-4">
          Show all
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {items.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
