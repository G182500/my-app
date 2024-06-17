import { AuthContext } from "@/contexts/auth-provider";
import { ReactNode, useContext } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import { LogOut, MenuIcon } from "lucide-react";

interface MenuItem {
  title: string;
  links: { label: string; icon: ReactNode; route: string }[];
}

const Separator = () => <div className="h-0.5 border-t border-gray-400"></div>;

const PopoverMenu = ({ items }: { items: MenuItem[] }) => {
  const admin = true;

  return (
    <Popover>
      <PopoverTrigger className="lg:hidden hover:cursor-pointer" asChild>
        <MenuIcon size={28} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col bg-[#505050] py-1 space-y-1 w-52 md:w-56">
        {items.map((item) => {
          return (
            <>
              <p className="font-medium pl-3 text-sm text-gray-300 md:text-base">
                {item.title}
              </p>
              <Separator />
              <div className="flex flex-col">
                {item.links.map((link) => {
                  return (
                    <Link
                      href={link.route}
                      className="flex gap-1 items-center py-1 pl-5 hover:bg-[#333333]"
                      key={link.label}
                    >
                      {link.icon}
                      <p className="font-medium text-gray-100 md:text-lg">
                        {link.label}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </>
          );
        })}
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
