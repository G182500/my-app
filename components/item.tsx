import { ArrowRightCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface ItemProps {
  image: StaticImageData;
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
}

/*bg-[#4682B4]*/

const Item = ({ image, id, title, price, oldPrice }: ItemProps) => {
  const router = useRouter();

  oldPrice = 29.9;

  return (
    <div
      className="flex sm:flex-col bg-[#424242] rounded-md hover:opacity-70 hover:cursor-pointer"
      onClick={() => {
        router.push(`/${id}`);
      }}
    >
      <Image
        height={image.height}
        width={image.width}
        src={image.src}
        alt="Imagem do produto"
        className="h-40 w-40 sm:h-full sm:w-full rounded-l-md object-cover object-center"
      />
      <div className="flex flex-col px-3 py-2 justify-around h-full w-full">
        <p className="font-semibold text-sm line-clamp-2">{title}</p>

        {/*informações como desconto, pré-venda, novidade, etc.*/}
        <div className="flex gap-2">
          <p className="font-semibold rounded-sm bg-green-400 bg-opacity-80 italic text-xs w-fit px-2">
            New
          </p>
          <p className="font-semibold rounded-sm bg-orange-600 bg-opacity-80 italic text-xs w-fit px-2">
            Pre-order
          </p>
          <p className="font-semibold rounded-sm bg-red-600 bg-opacity-80 italic text-xs w-fit px-2">
            Sold out
          </p>
        </div>

        {oldPrice ? (
          <div className="flex items-start gap-2">
            <p className="font-semibold line-through text-sm text-green-400 opacity-80">
              R$ {price}
            </p>
            <p className="font-semibold text-xl text-green-400">
              R$ {oldPrice}
            </p>
          </div>
        ) : (
          <p className="font-semibold text-xl text-green-400">R$ {price}</p>
        )}

        <button className="flex items-center justify-center gap-2">
          <p className="font-semibold italic text-sm">View details</p>
          <ArrowRightCircle size={16} />
        </button>
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
