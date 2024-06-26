import Product from "./product";
import { useGetProductsByCategory } from "@/services/product/get-by-category";
import Skeleton from "./skeleton";

interface ProductsCardProps {
  title: string;
}

/*
Tabela "Categoria":
_id: (chave primária)
products: (integer para quantidade)
Outros atributos relevantes

MOSTRAR APENAS SKELETON DE CATEGORIAS COM PELO MENOS 1 PRODUTO 
*/

const ProductsCard = ({ title }: ProductsCardProps) => {
  const getProducts = useGetProductsByCategory(title, {
    enabled: true,
  });
  let products = getProducts.data?.products;

  return (
    <div
      className={`flex flex-col bg-[#1d1d1d] p-4 space-y-4 sm:rounded-lg ${
        products?.length == 0 && "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg md:text-2xl">{title}</p>
        <p className="font-semibold opacity-70 text-sm underline underline-offset-4 md:text-base hover:cursor-pointer hover:opacity-100">
          Show all
        </p>
      </div>
      {getProducts.isError ? (
        <p className="pb-4 font-medium opacity-65 self-center">
          Erro ao carregar produtos, recarregue a página
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {getProducts.isFetching ? (
            <>
              <Skeleton className="h-40 rounded-md md:h-[368px]" />
              <Skeleton className="h-40 rounded-md md:h-[368px]" />
              <Skeleton className="h-40 rounded-md md:h-[368px]" />
            </>
          ) : (
            <>
              {products?.map((item) => (
                <Product {...item} key={item._id} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
