"use client";
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
    refetchOnWindowFocus: false,
    refetchOnMount: false,
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
        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {getProducts.isFetching ? (
            <>
              <Skeleton className="h-40 rounded-md md:h-[380px] xl:h-[446px]" />
              <Skeleton className="h-40 rounded-md md:h-[380px] xl:h-[446px]" />
              <Skeleton className="h-40 rounded-md md:h-[380px] xl:h-[446px]" />
              <Skeleton className="hidden rounded-md h-[446px] xl:block" />
              <Skeleton className="hidden rounded-md h-[446px] 2xl:block" />
            </>
          ) : (
            products && (
              <>
                {products.map(
                  (item, index) =>
                    index < 3 && <Product {...item} key={item._id} />
                )}
                {products[3] && (
                  <Product
                    {...products[3]}
                    key={products[3]._id}
                    className="hidden xl:block"
                  />
                )}
                {products[4] && (
                  <Product
                    {...products[4]}
                    key={products[4]._id}
                    className="hidden 2xl:block"
                  />
                )}
              </>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
