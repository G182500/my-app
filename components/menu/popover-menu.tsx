import { AuthContext } from "@/contexts/auth-provider";
import { ReactNode, useContext } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import {
  GalleryVerticalEnd,
  HomeIcon,
  LogOut,
  MenuIcon,
  ShoppingCart,
  SquarePlus,
  User,
  Users,
} from "lucide-react";

const Separator = () => <div className="h-0.5 border-t border-gray-400"></div>;

const PopoverMenu = () => {
  const admin = true;

  return (
    <Popover>
      <PopoverTrigger className="lg:hidden hover:cursor-pointer" asChild>
        <MenuIcon size={30} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col bg-[#505050] py-1 space-y-1 w-52 md:w-56">
        <p className="font-medium pl-3 text-sm text-gray-300 md:text-base">
          Menu
        </p>
        <Separator />
        <div className="flex flex-col">
          <Link
            href="/"
            className="flex gap-1 items-center py-1 pl-5 hover:bg-[#333333]"
          >
            <HomeIcon size={20} />
            <p className="font-medium text-gray-100 md:text-lg">Home</p>
          </Link>
          <Link
            href="/cart"
            className="flex gap-1 items-center py-1 pl-5 hover:bg-[#333333]"
          >
            <ShoppingCart size={20} />
            <p className="font-medium text-gray-100 md:text-lg">Cart</p>
          </Link>
          <Link
            href="/profile"
            className="flex gap-1 items-center py-1 pl-5 hover:bg-[#333333]"
          >
            <User size={20} />
            <p className="font-medium text-gray-100 md:text-lg">Profile</p>
          </Link>
        </div>
        {admin && (
          <>
            <p className="font-medium pl-3 text-sm text-gray-300 md:text-base">
              Admin
            </p>
            <Separator />
            <div className="flex flex-col">
              <Link
                href="/create"
                className="flex gap-1 items-center py-1 pl-5 hover:bg-[#333333]"
              >
                <SquarePlus size={20} />
                <p className="font-medium text-gray-100 md:text-lg">Create</p>
              </Link>
              <Link
                href="/inventary"
                className="flex gap-1 items-center py-1 pl-5 hover:bg-[#333333]"
              >
                <GalleryVerticalEnd size={20} />
                <p className="font-medium text-gray-100 md:text-lg">
                  Inventary
                </p>
              </Link>
              <Link
                href="/users"
                className="flex gap-1 items-center py-1 pl-5 hover:bg-[#333333]"
              >
                <Users size={20} />
                <p className="font-medium text-gray-100 md:text-lg">Users</p>
              </Link>
            </div>
          </>
        )}
        <Separator />
        <div className="flex gap-1 items-center justify-center hover:cursor-pointer hover:bg-[#333333]">
          <LogOut size={20} />
          <p className="font-medium text-gray-100 md:text-lg">Exit</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverMenu;
