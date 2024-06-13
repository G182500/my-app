"use client";
import Image from "next/image";
//import logo from "@/assets/imgs/lindemann-logo.png";
import { MenuIcon, ShoppingCart, User } from "lucide-react";
import Input from "./ui/input";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext } from "react";

const getSalutation = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Bom dia";
  else if (hour >= 12 && hour < 18) return "Boa tarde";
  return "Boa noite";
};

const salutation = getSalutation();

/*
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
*/

const Menu = () => {
  const { signIn, isAuthenticated } = useContext(AuthContext);

  //const userId = localStorage.getItem("userId");
  //get userName by userId
  const firstName = "Gabriel Bueno"; //Pegar primeiro e ultimo nome

  //bg-[#2e2e2e]

  return (
    <div className="flex bg-[#1d1d1d] justify-around p-3 w-full">
      <div className="flex gap-4 items-center">
        LOGO
        <Input />
      </div>
      <div className="hidden sm:flex gap-4 items-center">
        <MenuIcon size={28} />
        <ShoppingCart size={24} />
        <User size={24} />
      </div>
    </div>
  );
};

export default Menu;
