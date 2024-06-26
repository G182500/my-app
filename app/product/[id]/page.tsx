"use client";
import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import { ImageIcon, ShoppingCart } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import QuantityInput from "@/components/ui/quantity-input";
import { useEffect, useState } from "react";
import Skeleton from "@/components/skeleton";
import { useGetProductById } from "@/services/product/get-by-id";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  //params -> URL's parameter too
  const [product, setProduct] = useState<IProduct>();
  const getProduct = useGetProductById(params.id, {
    enabled: true,
  });

  useEffect(() => {
    if (getProduct.data) setProduct(getProduct.data.product);
  }, [getProduct.data]);

  const { register, reset, handleSubmit, getValues, setValue } = useForm<{
    quantity: number;
  }>();

  const quantity = Number(getValues("quantity"));
  let oldPrice = 99.9;

  const onSubmit: SubmitHandler<{ quantity: number }> = async (data) => {
    try {
      console.log(data.quantity);
      //await signIn(data);
    } catch (error) {
      //setErrorMessage("Deu ruim");
      console.log(error);
      reset();
    }
  };

  return (
    <div className="flex flex-col bg-[#1d1d1d] py-4 px-6 space-y-4 sm:rounded-lg">
      {getProduct.isFetching ? (
        <>
          <Skeleton className="rounded-lg h-96 w-full" />
          <Skeleton className="rounded-lg h-6 w-full" />
          <Skeleton className="rounded-lg h-8 w-40" />
          <div className="flex flex-col space-y-1">
            <p className="font-semibold text-xs">QUANTITY</p>
            <Skeleton className="rounded-lg h-12 w-full" />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="font-semibold text-xs">DESCRIPTION</p>
            <Skeleton className="rounded-lg h-36 w-full" />
          </div>
        </>
      ) : (
        <>
          {product?.images_url ? (
            <div className="relative border-2 border-[#4e4e4e] rounded-lg self-center h-96 w-full">
              <Image
                fill
                src={product.images_url.split(";")[0]}
                alt={product.title}
                className="absolute object-cover rounded-md"
              />
            </div>
          ) : (
            <div className="flex flex-col border-2 border-[#4e4e4e] items-center justify-center rounded-lg h-96 w-full">
              <ImageIcon className="size-52" color="#9c9c9c" />
              <p className="font-medium text-xl text-[#9c9c9c]">
                No image available
              </p>
            </div>
          )}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-lg">{product?.title}</p>
              {oldPrice ? (
                <div className="flex items-start gap-2">
                  <p className="font-semibold text-3xl text-green-400">
                    R$ {product?.price}
                  </p>
                  <p className="font-semibold line-through text-green-400 opacity-80">
                    R$ {oldPrice}
                  </p>
                </div>
              ) : (
                <p className="font-semibold text-xl text-green-400">
                  R$ {product?.price}
                </p>
              )}
            </div>
            <form
              className="flex justify-center items-end space-x-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-xs">QUANTITY</p>
                <QuantityInput
                  increment={() =>
                    setValue("quantity", Number(getValues("quantity")) + 1)
                  }
                  decrement={() =>
                    setValue("quantity", Number(getValues("quantity")) - 1)
                  }
                  register={register("quantity", { min: 1 })} //max: quantidade do produto
                />
              </div>
              <button
                className="flex bg-[#1b5a8d] items-center justify-center gap-2 py-3 rounded-md w-full"
                type="submit"
              >
                <ShoppingCart size={24} />
                <p className="font-semibold">ADD TO CART</p>
              </button>
            </form>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-xs">DESCRIPTION</p>
              <div className="bg-[#3a3a3a] p-2 rounded-lg min-h-36">
                {/*whitespace-pre-line -> Navegador interprete '\n' no layout*/}
                <p className="font-semibold opacity-70 text-justify text-xs whitespace-pre-line">
                  {product?.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
