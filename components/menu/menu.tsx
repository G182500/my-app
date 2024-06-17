"use client";

//import logo from "@/assets/imgs/lindemann-logo.png";
import {
  MenuIcon,
  ShoppingCart,
  CircleUserRound,
  LogOut,
  HomeIcon,
  SquarePlus,
  User,
  GalleryVerticalEnd,
  Users,
} from "lucide-react";
import Input from "../ui/input";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext } from "react";
import { Toaster } from "../ui/toaster/toaster";
import { useToast } from "../ui/toaster/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import PopoverMenu from "./popover-menu";

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

  //bg-[#2e2e2e]

  /*
<div className="hidden sm:flex gap-4 items-center">
    <MenuIcon size={28} />
    <ShoppingCart size={24} />
    <User size={24} />
  </div>  
*/

  const menuLinks = [
    {
      title: "Menu",
      links: [
        { label: "Home", icon: <HomeIcon size={20} />, route: "/" },
        { label: "Cart", icon: <ShoppingCart size={20} />, route: "/cart" },
        { label: "Profile", icon: <User size={20} />, route: "/profile" },
      ],
    },
    {
      title: "Admin",
      links: [
        { label: "Create", icon: <SquarePlus size={20} />, route: "/create" },
        {
          label: "Inventary",
          icon: <GalleryVerticalEnd size={20} />,
          route: "/inventary",
        },
        { label: "Users", icon: <Users size={20} />, route: "/users" },
      ],
    },
  ];

  return (
    isAuthenticated && (
      <div className="flex bg-[#1d1d1d] justify-around p-3 w-full fixed z-10">
        <div className="flex gap-4 items-center">
          <p className="text-2xl">LOGOO</p>
          <Input className="w-60 sm:w-80" />
        </div>
        <div className="flex gap-3 items-center">
          <div className="hidden md:flex bg-[#424242] rounded-xl gap-1 items-center pr-3">
            <CircleUserRound className="h-full" />
            <p className="font-semibold">{userName}</p>
          </div>
          <PopoverMenu items={menuLinks} />
        </div>
      </div>
    )
  );
};

export default Menu;
