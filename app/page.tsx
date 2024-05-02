"use client";

//import DataTable from "@/components/data-table";
import fs from "fs"; //Trabalhar com arquivos
import { User } from "@/interfaces/user";
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async (userSearch: string) => {
    try {
      const response = await fetch("/api/user/read", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nameFilter: userSearch }),
      });

      const { message, users }: { message: string; users: User[] } =
        await response.json();

      console.log(message, users)

      if (response.status === 200) setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <button className="bg-white" onClick={() => getUsers("")}>Buscar</button>

    </div>
  )
}
