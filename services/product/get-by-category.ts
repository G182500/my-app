import { IProduct } from "@/interfaces/product";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

interface GetProductByCategoryOutput {
  message: string;
  products: IProduct[];
}

export const useGetProductByCategory = (
  category: string,
  options?: Omit<
    UseQueryOptions<GetProductByCategoryOutput>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    ...options,
    queryKey: ["ProductByCategory"],
    queryFn: async () => {
      const resp = await fetch(`/api/product/get-by-category/${category}`, {
        method: "GET",
      });
      const { message, products }: GetProductByCategoryOutput =
        await resp.json();
      return { message, products };
    },
  });
};
