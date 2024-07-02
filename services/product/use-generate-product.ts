import { IProduct } from "@/interfaces/product";
import { generateId } from "@/utils/generate-id";
import { useMutation } from "@tanstack/react-query";

interface GenerateProductInput {
  product: IProduct;
}

interface GenerateProductOutput {
  message: string;
}

export const useGenerateProduct = () =>
  useMutation({
    mutationFn: async ({ product }: GenerateProductInput) => {
      product._id = generateId();
      product.price = Number(product.price);

      if (!product.images_url)
        product.images_url = "/imgs/products/sehnsucht.jpg;";

      const resp = await fetch(`/api/product/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      return await resp.json();
    },
  });
