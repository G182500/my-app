import Link from "next/link";
import {
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

  let sideNavClass = `bg-[#505050] top-0 left-0 fixed h-screen duration-300 z-40 ${
    isOpen ? "p-2 w-56" : " w-0 overflow-hidden"
  }`;

  const changeState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/*Trigger*/}
      <MenuIcon
        className="hover:cursor-pointer"
        size={30}
        onClick={changeState}
      />
      {/*SideNav*/}
      <div className={sideNavClass}>
        {/* SideNav content */}
        <div
          className={`flex flex-col p-2 transition  ${
            isOpen ? "opacity-100 duration-1000" : "opacity-0 duration-0"
          }`}
        >
          <X
            size={28}
            className="hover:cursor-pointer self-end"
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
};

export default SideNavigation;
