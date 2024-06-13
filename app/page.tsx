"use client";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext } from "react";
import Image from "next/image";
import ItemsCard from "@/components/items-card";
import sehnsucht from "@/public/imgs/products/sehnsucht.jpg";
import iowa from "@/public/imgs/products/iowa.jpeg";
import pills from "@/public/imgs/products/skillspills.jpg";

//import { useMutation } from "@tanstack/react-query";

export default function Home() {
  const { user } = useContext(AuthContext);
  console.log("user", user);

  /*const loginMutation = useMutation({
    mutationFn: (params) => {
      return fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      })
    }
  });
  loginMutation.mutateAsync(loginParams);*/

  return (
    <div className="flex flex-col">
      <div className="flex bg-zinc-900 items-center justify-around py-2">
        <p className="font-bold">LOGO</p>
        <div className="flex items-center">
          <Image
            className="rounded-full"
            src="https://github.com/g182500.png"
            height={34}
            width={34}
            alt="avatar"
          />
          <p>{user?.username}</p>
        </div>
      </div>
      <div className="container mx-auto space-y-4">
        <ItemsCard
          title="Compact Discs"
          items={[
            {
              id: "123456",
              image: "/imgs/products/sehnsucht.jpg",
              title: "Sehnsucht Anniversary Edition (2023) Rammstein",
              description: "Descrição do produto 1",
              price: 59.9,
            },
            {
              id: "456789",
              image: "/imgs/products/iowa.jpeg",
              title: "Iowa (2001) Slipknot",
              description: "Descrição do produto 2",
              price: 45,
            },
            {
              id: "123",
              title: "The Number Of The Beast (1982) Iron Maiden",
              description: "Descrição do produto 1",
              price: 59.9,
            },
            {
              id: "456",
              image: "/imgs/products/skillspills.jpg",
              title: "Skills In Pills (2015) Lindemann",
              description: "Descrição do produto 2",
              price: 20.9,
            },
          ]}
        />
        <ItemsCard
          title="T-Shirts"
          items={[
            {
              id: "123",
              title: "Produto1",
              description: "Descrição do produto 1",
              price: 59.9,
            },
            {
              id: "456",
              title: "Produto2",
              description: "Descrição do produto 2",
              price: 20.9,
            },
            {
              id: "123",
              title: "Liebe ist für alle da (2009) Rammstein",
              description: "Descrição do produto 1",
              price: 59.9,
            },
          ]}
        />
      </div>
    </div>
  );
}

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
