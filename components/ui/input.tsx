import { Search } from "lucide-react";

const Input = () => {
  return (
    <div className="relative flex items-center">
      <input
        className="block p-1 pl-2 rounded-lg text-black text-sm md:w-80"
        placeholder="Buscar item"
        type="text"
      />
      <Search className="absolute end-2" color="#2e2e2e93" size={18} />
    </div>
  );
};

export default Input;
