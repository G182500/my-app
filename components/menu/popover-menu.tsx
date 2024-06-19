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
import { useState } from "react";

const linkClass =
  "flex gap-1 items-center py-1 pl-5 hover:bg-[#333333] hover:cursor-pointer";
const paragraphClass = "font-medium text-gray-100 md:text-lg";

const Separator = () => <div className="h-0.5 border-t border-gray-400"></div>;

const PopoverMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openChange = () => {
    setIsOpen(!isOpen);
  };

  const admin = false;

  return (
    <Popover open={isOpen} onOpenChange={openChange}>
      <PopoverTrigger className="lg:hidden hover:cursor-pointer" asChild>
        <MenuIcon size={30} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col bg-[#505050] py-1 space-y-1 w-52 md:w-56">
        <p className="font-medium pl-3 text-sm text-gray-300 md:text-base">
          Menu
        </p>
        <Separator />
        <div className="flex flex-col" onClick={openChange}>
          <Link href="/" className={linkClass}>
            <HomeIcon size={20} />
            <p className={paragraphClass}>Home</p>
          </Link>
          <Link href="/cart" className={linkClass}>
            <ShoppingCart size={20} />
            <p className={paragraphClass}>Cart</p>
          </Link>
          <Link href="/profile" className={linkClass}>
            <User size={20} />
            <p className={paragraphClass}>Profile</p>
          </Link>
        </div>
        {admin && (
          <>
            <p className="font-medium pl-3 text-sm text-gray-300 md:text-base">
              Admin
            </p>
            <Separator />
            <div className="flex flex-col" onClick={openChange}>
              <Link href="/create" className={linkClass}>
                <SquarePlus size={20} />
                <p className={paragraphClass}>Create</p>
              </Link>
              <Link href="/inventary" className={linkClass}>
                <GalleryVerticalEnd size={20} />
                <p className={paragraphClass}>Inventary</p>
              </Link>
              <Link href="/users" className={linkClass}>
                <Users size={20} />
                <p className={paragraphClass}>Users</p>
              </Link>
            </div>
          </>
        )}
        <Separator />
        <div className={linkClass} onClick={openChange}>
          <LogOut size={20} />
          <p className={paragraphClass}>Exit</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverMenu;
