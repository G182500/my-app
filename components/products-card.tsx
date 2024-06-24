import { IProduct } from "@/interfaces/product";
import Product from "./product";

interface ProductsCardProps {
  title: string;
  items: IProduct[];
}

const ProductsCard = ({ title, items }: ProductsCardProps) => {
  console.log(items);
  return (
    <div className="flex flex-col bg-[#1d1d1d] p-4 space-y-4 sm:rounded-lg">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg md:text-2xl">{title}</p>
        <p className="font-semibold opacity-70 text-sm underline underline-offset-4 md:text-base hover:cursor-pointer hover:opacity-100">
          Show all
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {items.map((item, index) => (
          <Product {...item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
