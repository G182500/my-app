import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import {
  ArrowLeftSquare,
  GalleryVerticalEnd,
  HomeIcon,
  MenuIcon,
  ShoppingCart,
  SquarePlus,
  User,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const linkClass =
  "flex gap-2 items-center pl-5 hover:bg-[#333333] hover:cursor-pointer";
const paragraphClass = "font-medium text-gray-100 text-lg";

const Separator = () => <div className="h-0.5 border-t border-gray-400"></div>;

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  let isOpenClass = isOpen ? "p-2 w-56" : " w-0 overflow-hidden";

  const changeState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/*Trigger*/}
      <div onClick={changeState}>
        <MenuIcon size={30} />
      </div>
      {/*SideNav*/}
      <div
        className={`bg-[#505050] top-0 left-0
                    fixed h-screen
                    duration-300 z-40
                    ${isOpenClass}`}
      >
        {/* SideNav content */}
        <div
          className={`flex flex-col p-2 transition  ${
            isOpen ? "opacity-100 duration-1000" : "opacity-0 duration-0"
          }`}
        >
          <ArrowLeftSquare
            size={36}
            className="self-end"
            onClick={changeState}
          />
          <p className="font-medium pl-3 text-sm text-gray-300 md:text-base">
            Menu
          </p>
          <Separator />
          <div className="flex flex-col mt-2 space-y-2" onClick={changeState}>
            <Link href="/" className={linkClass}>
              <HomeIcon size={22} />
              <p className={paragraphClass}>Home</p>
            </Link>
            <Link href="/cart" className={linkClass}>
              <ShoppingCart size={22} />
              <p className={paragraphClass}>My Cart</p>
            </Link>
            <Link href="/profile" className={linkClass}>
              <User size={22} />
              <p className={paragraphClass}>Profile</p>
            </Link>
          </div>
          {true && (
            <>
              <p className="mt-3 font-medium pl-3 text-sm text-gray-300 md:text-base">
                Admin
              </p>
              <Separator />
              <div
                className="flex flex-col mt-2 space-y-2"
                onClick={changeState}
              >
                <Link href="/inventary" className={linkClass}>
                  <GalleryVerticalEnd size={22} />
                  <p className={paragraphClass}>Inventary</p>
                </Link>
                <Link href="/users" className={linkClass}>
                  <Users size={22} />
                  <p className={paragraphClass}>Users</p>
                </Link>
                <Link href="/product/new" className={linkClass}>
                  <SquarePlus size={22} />
                  <p className={paragraphClass}>New</p>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
  /*
    <Popover open={isOpen} onOpenChange={close}>
      <PopoverTrigger className="lg:hidden hover:cursor-pointer" asChild>
        <MenuIcon size={30} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col bg-[#505050] py-1 space-y-1 w-52 md:w-56">
        <p className="font-medium pl-3 text-sm text-gray-300 md:text-base">
          Menu
        </p>
        <Separator />
        <div className="flex flex-col" onClick={close}>
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
            <div className="flex flex-col" onClick={close}>
              <Link href="/product/new" className={linkClass}>
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
        <div className={linkClass} onClick={close}>
          <LogOut size={20} />
          <p className={paragraphClass}>Exit</p>
        </div>
      </PopoverContent>
    </Popover>*/
};

export default SideNavigation;
