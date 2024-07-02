"use client";

//import logo from "@/assets/imgs/lindemann-logo.png";
import {
  ShoppingCart,
  CircleUserRound,
  LogOut,
  SquarePlus,
  GalleryVerticalEnd,
  Users,
  Users2,
} from "lucide-react";
import SearchInput from "./ui/search-input";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext } from "react";
import { Toaster } from "./ui/toaster/toaster";
import { useToast } from "./ui/toaster/use-toast";
import Link from "next/link";
import SideNavigation from "./menu/side-navigation";
import Image from "next/image";

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

const Header = () => {
  //const { signIn, isAuthenticated } = useContext(AuthContext);
  const { toast } = useToast();
  /*
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
  */

  const isAuthenticated = true;

  //const userId = localStorage.getItem("userId");
  //get userName by userId
  const userName = "Gabriel Bueno"; //Pegar primeiro e ultimo nome
  const admin = true;

  //bg-[#2e2e2e]

  return (
    isAuthenticated && (
      <div className="flex bg-[#1d1d1d] justify-around p-3 w-full fixed z-10">
        <div className="flex gap-4 items-center">
          <SideNavigation />
          <p className="text-2xl">LOGOO</p>
          <SearchInput className="w-60 md:w-72" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/profile"
            className="hidden lg:flex bg-[#424242] gap-1 items-center pr-2 rounded-xl text-gray-300 hover:text-white"
          >
            <CircleUserRound size={28} />
            <p className="font-semibold text-lg">{userName}</p>
          </Link>
          <Link href="/cart" className="text-gray-300 hover:text-white">
            <ShoppingCart size={28} />
          </Link>
          <button className="text-gray-300 hover:text-white">
            <LogOut size={26} />
          </button>
        </div>
      </div>
    )
  );
};

export default Header;
