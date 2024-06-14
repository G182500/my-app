import { Search } from "lucide-react";

const Input = () => {
  return (
    <div className="relative flex items-center">
      <input
        className="bg-[#424242] font-semibold p-1 pl-2 rounded-lg text-sm text-gray-200 placeholder-gray-400"
        placeholder="Search product"
        type="text"
      />
      <Search className="absolute end-3" color="#9CA3AF" size={18} />
    </div>
  );
};

export default Input;
