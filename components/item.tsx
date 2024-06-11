import { Product } from "@/interfaces/product";
import sehnsucht from "@/assets/imgs/sehnsucht.jpg";
import Image from "next/image";
interface ItemProps {
  content: Product;
}

const goToDetailsPage = () => {}; //usar router

/*bg-[#4682B4]*/

const Item = ({ content }: ItemProps) => {
  return (
    <div
      className="flex flex-col bg-[#424242] rounded-lg hover:opacity-70 hover:cursor-pointer"
      onClick={goToDetailsPage}
    >
      <Image
        height={sehnsucht.height}
        width={sehnsucht.width}
        src={sehnsucht.src}
        alt="Imagem produto"
        className="h-60 object-cover object-center"
      />
      <div className="flex flex-col p-3 space-y-1">
        <p className="font-semibold w-full">{content.title}</p>
        <p className="font-semibold text-xl text-green-400">
          R$ {content.price}
        </p>
      </div>
    </div>
  );
};

/*
<div className="flex flex-col bg-[#4f4f4f] rounded-lg">
      <div className="bg-white h-52 rounded-t-lg">Imagem</div>
      <div className="flex flex-col p-2">
        <p className="font-medium">{content.title}</p>
        <p className="font-semibold text-lg text-green-400">
          R$ {content.price}
        </p>
      </div>
    </div>
*/

export default Item;
