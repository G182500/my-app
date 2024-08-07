import Link from "next/link";
import {
  HomeIcon,
  LogOut,
  MenuIcon,
  ShoppingBag,
  ShoppingCart,
  SquarePlus,
  User2,
  Users2,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideNavigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  const menuItems = [
    {
      title: "Admin",
      subItems: [
        {
          icon: <SquarePlus size={22} />,
          text: "New",
          page: "/product/new",
        },
        {
          icon: <ShoppingBag size={22} />,
          text: "Products",
          page: "/product/all",
        },
        { icon: <Users2 size={22} />, text: "Users", page: "/users" },
      ],
    },
    {
      title: "Menu",
      subItems: [
        { icon: <HomeIcon size={22} />, text: "Home", page: "/" },
        { icon: <ShoppingCart size={22} />, text: "Cart", page: "/cart" },
        { icon: <User2 size={22} />, text: "Profile", page: "/profile" },
      ],
    },
  ];

  const sideNavClass = `bg-[#505050] top-0 left-0 fixed h-screen duration-300 z-40 ${
    isOpen ? "p-2 w-64 2xl:w-80" : "w-0 p-0 pointer-events-none"
  }`;

  return (
    <div className="flex">
      <MenuIcon
        id="sideNavTrigger"
        className="text-gray-300 hover:text-white hover:cursor-pointer"
        size={32}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div id="sideNav" className={sideNavClass}>
        <div
          id="sideNavContent"
          className={`flex flex-col p-2 transition ${
            isOpen ? "opacity-100 duration-1000" : "opacity-0 duration-0"
          }`}
        >
          <X
            size={28}
            className="text-gray-300 hover:text-white hover:cursor-pointer self-end"
            onClick={close}
          />
          {menuItems.map((menuItem, index1) => {
            return (
              <div key={`menuItem${index1 + 1}`} className="flex flex-col mt-4">
                <p className="font-medium ml-3 text-sm text-gray-300 md:text-base">
                  {menuItem.title}
                </p>
                <div className="h-0.5 border-t border-gray-400" />
                <div
                  className="flex flex-col mt-2 pl-5 space-y-3"
                  onClick={close}
                >
                  {menuItem.subItems.map((subItem, index2) => {
                    return (
                      <Link
                        href={subItem.page}
                        className={`flex font-medium gap-2 items-center text-lg ${
                          pathname === subItem.page
                            ? "text-green-400 hover:cursor-default"
                            : "text-gray-300 hover:text-white"
                        }`}
                        key={`subItem${index1 + 1}${index2 + 1}`}
                      >
                        {subItem.icon}
                        {subItem.text}
                      </Link>
                    );
                  })}
                  {menuItem.title === "Menu" && (
                    <button className="flex font-medium gap-2 items-center text-lg hover:cursor-pointer text-gray-300 hover:text-white">
                      <LogOut size={22} />
                      Exit
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
