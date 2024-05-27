"use client";
import Image from "next/image";
import logo from "@/assets/imgs/lindemann-logo.png";
import { MenuIcon, ShoppingCart, User } from "lucide-react";
import Input from "./ui/input";

const getSalutation = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Bom dia";
  else if (hour >= 12 && hour < 18) return "Boa tarde";
  return "Boa noite";
};

const salutation = getSalutation();

const Menu = () => {
  const userId = localStorage.getItem("userId");
  //get userName by userId
  const firstName = "Gabriel Bueno"; //Pegar primeiro e ultimo nome

  return (
    <div className="flex bg-[#2e2e2e] justify-around p-3">
      <div className="flex gap-4 items-center">
        <Image src={logo.src} height={20} width={140} alt="logo" />
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
