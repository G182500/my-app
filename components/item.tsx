import { Product } from "@/interfaces/product";

interface ItemProps {
  content: Product;
}

const Item = ({ content }: ItemProps) => {
  return (
    <div className="flex flex-col bg-[#4f4f4f] rounded-lg">
      <div className="bg-white h-52 rounded-t-lg">Imagem</div>
      <div className="flex flex-col p-2">
        <p className="font-medium">{content.title}</p>
        <p className="font-semibold text-lg text-green-400">
          R$ {content.price}
        </p>
      </div>
    </div>
  );
};

export default Item;
