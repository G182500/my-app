"use client";
import { Search } from "lucide-react";
import { cn } from "@/utils/cn";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SearchInputProps {
  className?: string;
}

const SearchInput = ({ className }: SearchInputProps) => {
  const { handleSubmit, register } = useForm();
  const { push, replace } = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (params) params.delete("query");
  }, []);

  const onSubmit: SubmitHandler<any> = async ({ searchTerm }) => {
    if (searchTerm) params.set("query", searchTerm);
    else params.delete("query");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className="relative flex items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={cn(
          "bg-[#424242] font-medium py-1 pl-2 rounded-lg text-white placeholder-gray-400",
          className
        )}
        placeholder="Search product"
        type="text"
        {...register("searchTerm")}
      />
      <button
        type="submit"
        className="absolute end-0 bg-[#4682B4] h-full px-4 rounded-r-lg"
      >
        <Search color="white" size={20} strokeWidth={3} />
      </button>
    </form>
  );
};

export default SearchInput;
