"use client";

import DataTable from "@/components/data-table";
import { useForm, SubmitHandler } from "react-hook-form";
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
    cell: ({ row }) => (
      <div>{row.original.id}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => row.original.name
  },
]

export default function Home() {
  const { register, reset, handleSubmit } = useForm<SearchForm>();
  const [users, setUsers] = useState<User[]>([]);

  const onSubmit: SubmitHandler<SearchForm> = async ({ search }) => {
    try {
      const response = await fetch("/api/user/read", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nameFilter: search }),
      });

      const { message, users }: { message: string; users: User[] } =
        await response.json();

      if (response.status === 200) setUsers(users);
    } catch (error) {
      console.log(error);
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
          <button
            className="bg-gray-400"
            type="submit"
          >
            <Search color="black" size={22} />
          </button>
        </div>
        <DataTable columns={columns} data={users} />
      </form>
    </div>
  )
}
