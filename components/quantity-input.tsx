import { SquareMinus, SquarePlus } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface AmountProps {
  register: UseFormRegisterReturn;
  increment: () => void;
  decrement: () => void;
}

const QuantityInput = ({ register, increment, decrement }: AmountProps) => {
  return (
    <div className="flex bg-[#424242] items-center py-1 px-1 rounded-md space-x-3">
      <button type="button" onClick={decrement}>
        <SquareMinus size={40} />
      </button>
      <input
        defaultValue={1}
        type="number"
        className="bg-transparent text-center text-lg font-semibold w-14"
        {...register}
      />
      <button type="button" onClick={increment}>
        <SquarePlus size={40} />
      </button>
    </div>
  );
};

export default QuantityInput;
