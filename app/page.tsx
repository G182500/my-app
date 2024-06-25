"use client";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext } from "react";
import ProductsCard from "@/components/products-card";
import Skeleton from "@/components/skeleton";
import { useGetProductByCategory } from "@/services/product/get-by-category";

const Home = () => {
  const { user } = useContext(AuthContext);

  const getProducts = useGetProductByCategory("Compact Discs", {
    enabled: true,
  });

  return (
    <>
      {getProducts.isPending && (
        <div className="flex flex-col bg-[#1d1d1d] p-4 space-y-4 sm:rounded-lg">
          <Skeleton className="rounded-md h-6 w-44 md:h-6" />
          <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            <Skeleton className="h-40 rounded-md sm:h-96" />
            <Skeleton className="h-40 rounded-md sm:h-96" />
            <Skeleton className="h-40 rounded-md sm:h-96" />
          </div>
        </div>
      )}
      {getProducts.data && (
        <>
          <ProductsCard
            title="Compact Discs"
            items={getProducts.data.products}
          />
          <ProductsCard title="Movies" items={[]} />
          <ProductsCard title="Posters" items={[]} />
          <ProductsCard title="T-Shirts" items={[]} />
        </>
      )}
    </>
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

export default Home;
