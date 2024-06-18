"use client";

import Input from "@/components/ui/input";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import { ImageIcon, ShoppingCart, SquareMinus, SquarePlus } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import AmountInput from "@/components/amount-input";

const getProductById = async (id: string) => {
  const response = await fetch(`/api/product/${id}`, {
    method: "GET",
  });
};

const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct>({
    id: "567890",
    image: "/imgs/products/skillspills.jpg",
    title: "Skills In Pills (2015) Lindemann",
    description:
      "Lançado em 22 de junho de 2015 pela Warner Music, 'Skills in Pills' é o álbum de estreia do grupo 'Lindemann', formado pelo vocalista do 'Rammstein', Till Lindemann, e por Peter Tägtgren, fundador do 'Hypocrisy' e do 'PAIN'.",
    price: 20.9,
  });

  const { register, reset, handleSubmit, getValues, setValue } = useForm<{
    amount: number;
  }>();

  /*useEffect(() => {
    getProductById("123").then(setProduct(resposta));
  }, []);*/

  const isAuthenticated = true;
  let oldPrice = 99.9;

  const onSubmit: SubmitHandler<{ amount: number }> = async (data) => {
    try {
      console.log(data.amount);
      //await signIn(data);
    } catch (error) {
      //setErrorMessage("Deu ruim");
      console.log(error);
      reset();
    }
  };

  return (
    isAuthenticated && (
      <div className="container mx-auto pt-16 sm:pt-[68px]">
        <div className="flex flex-col bg-[#1d1d1d] py-4 px-6 space-y-4 sm:rounded-lg">
          {product.image ? (
            <div className="relative border-2 border-[#4e4e4e] self-center h-96 w-full">
              <Image
                fill
                src={product.image}
                alt={product.title}
                className="absolute object-cover"
              />
            </div>
          ) : (
            <ImageIcon className="size-32" color="#9c9c9c" />
          )}
          <div className="flex flex-col space-y-1">
            <p className="font-semibold text-lg">{product.title}</p>
            {oldPrice ? (
              <div className="flex items-start gap-2">
                <p className="font-semibold text-3xl text-green-400">
                  R$ {product.price}
                </p>
                <p className="font-semibold line-through text-green-400 opacity-80">
                  R$ {oldPrice}
                </p>
              </div>
            ) : (
              <p className="font-semibold text-xl text-green-400">
                R$ {product.price}
              </p>
            )}
          </div>
          <form
            className="flex justify-center items-end space-x-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-xs">AMOUNT</p>
              <AmountInput
                increment={() =>
                  setValue("amount", Number(getValues("amount")) + 1)
                }
                decrement={() =>
                  setValue("amount", Number(getValues("amount")) - 1)
                }
                register={register("amount", { min: 1 })} //max: quantidade do produto
              />
            </div>
            <button
              className="flex bg-[#1b5a8d] items-center justify-center gap-2 py-3 rounded-md w-full"
              type="submit"
            >
              <ShoppingCart size={24} />
              <span className="font-semibold">ADD TO CART</span>
            </button>
          </form>
          <div className="flex flex-col space-y-1">
            <p className="font-semibold text-xs">DESCRIPTION</p>
            <p className="font-semibold opacity-70 text-justify text-xs">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
