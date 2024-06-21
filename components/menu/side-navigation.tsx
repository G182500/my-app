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
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideNavigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeState = () => {
    setIsOpen(!isOpen);
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
          icon: <GalleryVerticalEnd size={22} />,
          text: "Inventary",
          page: "/product/all",
        },
        { icon: <Users size={22} />, text: "Users", page: "/users" },
      ],
    },
    {
      title: "Menu",
      subItems: [
        { icon: <HomeIcon size={22} />, text: "Home", page: "/" },
        { icon: <ShoppingCart size={22} />, text: "Cart", page: "/cart" },
        { icon: <User size={22} />, text: "Profile", page: "/profile" },
      ],
    },
  ];

  let sideNavClass = `bg-[#505050] top-0 left-0 fixed h-screen duration-300 z-40 ${
    isOpen ? "p-2 w-56" : " w-0 overflow-hidden"
  }`;

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
        {/*SideNav Content*/}
        <div
          className={`flex flex-col p-2 transition ${
            isOpen ? "opacity-100 duration-1000" : "opacity-0 duration-0"
          }`}
        >
          <X
            size={28}
            className="hover:cursor-pointer self-end"
            onClick={changeState}
          />
          {menuItems.map((menuItem, index1) => {
            return (
              <div key={`menuItem${index1 + 1}`} className="flex flex-col mt-3">
                <p className="font-medium ml-3 text-sm text-gray-300 md:text-base">
                  {menuItem.title}
                </p>
                <div className="h-0.5 border-t border-gray-400" />
                <div
                  className="flex flex-col mt-2 pl-5 space-y-3"
                  onClick={changeState}
                >
                  {menuItem.subItems.map((subItem, index2) => {
                    return (
                      <Link
                        href={subItem.page}
                        className={`flex font-medium gap-2 items-center text-lg ${
                          pathname === subItem.page
                            ? "text-green-400"
                            : "text-gray-300 hover:text-gray-50"
                        }`}
                        key={`subItem${index1 + 1}${index2 + 1}`}
                      >
                        {subItem.icon}
                        {subItem.text}
                      </Link>
                    );
                  })}
                  {menuItem.title === "Menu" && (
                    <div
                      className="flex font-medium gap-2 items-center text-lg hover:cursor-pointer text-gray-300 hover:text-gray-50"
                      onClick={changeState}
                    >
                      <LogOut size={22} />
                      Exit
                    </div>
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
