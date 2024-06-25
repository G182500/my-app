import Product from "./product";
import { useGetProductsByCategory } from "@/services/product/get-by-category";
import Skeleton from "./skeleton";

interface ProductsCardProps {
  title: string;
}

const ProductsCard = ({ title }: ProductsCardProps) => {
  const getProducts = useGetProductsByCategory(title, {
    enabled: true,
  });

  return (
    <div className="flex flex-col bg-[#1d1d1d] p-4 space-y-4 sm:rounded-lg">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg md:text-2xl">{title}</p>
        <p className="font-semibold opacity-70 text-sm underline underline-offset-4 md:text-base hover:cursor-pointer hover:opacity-100">
          Show all
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {getProducts.isFetching ? (
          <>
            <Skeleton className="h-40 rounded-md sm:h-96" />
            <Skeleton className="h-40 rounded-md sm:h-96" />
            <Skeleton className="h-40 rounded-md sm:h-96" />
          </>
        ) : (
          <>
            {getProducts.data?.products.map((item) => (
              <Product {...item} key={item._id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
