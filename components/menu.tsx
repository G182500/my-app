"use client";
import Image from "next/image";
//import logo from "@/assets/imgs/lindemann-logo.png";
import { MenuIcon, ShoppingCart, CircleUserRound } from "lucide-react";
import Input from "./ui/input";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext } from "react";
import { Toaster } from "./ui/toaster/toaster";
import { useToast } from "./ui/toaster/use-toast";

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
  //const { signIn, isAuthenticated } = useContext(AuthContext);
  const { toast } = useToast();
  const isAuthenticated = true;

  //const userId = localStorage.getItem("userId");
  //get userName by userId
  const userName = "Gabriel Bueno"; //Pegar primeiro e ultimo nome

  //bg-[#2e2e2e]

  /*
<div className="hidden sm:flex gap-4 items-center">
    <MenuIcon size={28} />
    <ShoppingCart size={24} />
    <User size={24} />
  </div>  
*/

  return (
    isAuthenticated && (
      <div className="flex bg-[#1d1d1d] justify-around p-3 w-full fixed z-10">
        <div className="flex gap-4 items-center">
          <p className="text-2xl">LOGO</p>
          <Input className="w-52 sm:w-72" />
        </div>
        <div className="flex gap-3 items-center">
          <div className="hidden sm:flex bg-[#424242] rounded-xl gap-1 items-center pr-3">
            <CircleUserRound size={28} />
            <p className="font-semibold">{userName}</p>
          </div>
          <Toaster />
          <button
            onClick={() =>
              toast({
                variant: "error",
                title: "Menu ainda não desenvolvido",
              })
            }
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </div>
    )
  );
};

export default Menu;
