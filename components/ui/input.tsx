import { Search } from "lucide-react";

import { cn } from "@/utils/cn";

const Input = ({ className }: { className?: string }) => {
  return (
    <div className="relative flex items-center">
      <input
        className={cn(
          "bg-[#424242] font-semibold p-1 pl-2 rounded-lg text-gray-200 placeholder-gray-400 placeholder:italic",
          className
        )}
        placeholder="Search product"
        type="text"
      />
      <Search
        className="absolute end-3"
        color="#9CA3AF"
        size={18}
        strokeWidth={3}
      />
    </div>
  );
};

export default Input;
