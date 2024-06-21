"use client";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ProductsCard from "@/components/products-card";
import { IProduct } from "@/interfaces/product";

interface GetAllProducts {
  message: string;
  products: IProduct[];
}

const getProductsByCategory = async () => {
  const category = "Compact Discs";
  const resp = await fetch(`/api/product/get-by-category/${category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resp.status !== 200) return;
  const { message, products }: GetAllProducts = await resp.json();
  return products;
};

const Content = () => {
  const { user } = useContext(AuthContext);

  const productsQuery = useQuery<IProduct[] | undefined>({
    queryKey: ["ProductsByCategory"],
    queryFn: getProductsByCategory,
  });

  if (productsQuery.data) {
    console.log(productsQuery.data);
  }

  return (
    <div className="container mx-auto space-y-2 pt-16 sm:pt-[68px] sm:space-y-3">
      {productsQuery.isPending && (
        <div className="flex flex-col animate-pulse bg-[#1d1d1d] p-4 space-y-4 sm:rounded-lg">
          <span className="bg-[#424242] rounded-xl h-5 w-44 md:h-6" />
          <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            <span className="bg-[#424242] h-40 rounded-md sm:h-96" />
            <span className="bg-[#424242] h-40 rounded-md sm:h-96" />
            <span className="bg-[#424242] h-40 rounded-md sm:h-96" />
            <span className="bg-[#424242] h-40 rounded-md sm:h-96" />
          </div>
        </div>
      )}
      {productsQuery.data && (
        <ProductsCard title="Compact Discs" items={productsQuery.data} />
      )}
    </div>
  );
};

/*
import { DataTable } from "@/components/data-table";
import { User } from "@/interfaces/user";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
 
interface SearchForm {
  search: string;
}
 
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => <div>{row.original.id}</div>,
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => row.original.name,
  },
];
 
export default function Home() {
  const { register, reset, handleSubmit } = useForm<SearchForm>();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
 
  const onSubmit: SubmitHandler<SearchForm> = async ({ search }) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nameFilter: search }),
      });

const { message, users }: { message: string; users: User[] } =
  await response.json();

console.log(users);

if (response.status === 200) setUsers(users);
} catch (error) {
console.log(error);
} finally {
setIsLoading(false);
}
};

return (
<div className="flex">
  <form
    className="flex flex-col bg-white shadow-lg p-5 rounded-lg"
    onSubmit={handleSubmit(onSubmit)}
  >
    <div className="flex gap-2 justify-center">
      <input
        className="text-black text-xs"
        placeholder="Busca por nome"
        {...register("search")}
      />
      <button className="bg-gray-400" type="submit">
        <Search color="black" size={22} />
      </button>
    </div>
    <DataTable columns={columns} data={users} isLoading={isLoading} />
  </form>
</div>
);
} */

const Home = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
};
export default Home;
