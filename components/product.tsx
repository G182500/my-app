import { IProduct } from "@/interfaces/product";
import { ImageIcon, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductProps extends IProduct {
  oldPrice?: number;
}

/*bg-[#4682B4]*/
/*Por exemplo, o nome do arquivo deve permanecer imutável e gerado aleatoriamente para evitar a sobreposição com outros arquivos, pois se não pudermos apontar para o arquivo no disco, basicamente o perderemos. Lembre-se de que você também precisará excluir o registro dos metadados se precisar excluir o arquivo. */

const Product = ({ id, image, title, price, oldPrice }: ProductProps) => {
  const router = useRouter();
  const imgSize = "h-40 w-72 sm:h-56 sm:w-full";

  //Testes
  oldPrice = 99.9;

  return (
    <div
      title={title}
      className="flex sm:flex-col bg-[#424242] rounded-md hover:opacity-70 hover:cursor-pointer"
      onClick={() => {
        router.push(`/${id}`);
      }}
    >
      {image ? (
        <div className={`relative ${imgSize}`}>
          <Image
            fill
            src={image}
            alt={title}
            className="absolute rounded-l-md object-cover sm:rounded-t-md sm:rounded-bl-none"
          />
        </div>
      ) : (
        <div className={`flex flex-col items-center justify-center ${imgSize}`}>
          <ImageIcon className="size-24 sm:size-36" color="#9c9c9c" />
        </div>
      )}
      <div className="flex flex-col px-3 py-2 justify-around h-full w-full sm:h-40 sm:justify-between sm:py-3">
        <p className="font-semibold text-sm line-clamp-2">{title}</p>

        {/*Modelos de informações - Fazer componente de StatusLabel depois */}
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
            <p className="font-semibold text-2xl text-green-400">R$ {price}</p>
            <p className="font-semibold line-through text-sm text-green-400 opacity-80">
              R$ {oldPrice}
            </p>
          </div>
        ) : (
          <p className="font-semibold text-xl text-green-400">R$ {price}</p>
        )}

        <button className="flex items-center justify-end gap-2 sm:justify-center">
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

export default Product;
