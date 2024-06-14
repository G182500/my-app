import { Search } from "lucide-react";

const Input = () => {
  return (
    <div className="relative flex items-center">
      <input
        className="bg-[#424242] placeholder:italic font-semibold p-1 pl-2 rounded-lg text-sm text-white placeholder-gray-300"
        placeholder="Search product"
        type="text"
      />
      <Search className="absolute end-3" color="white" size={18} />
    </div>
  );
};

export default Input;
