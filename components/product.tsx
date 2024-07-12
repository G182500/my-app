import { IProduct } from "@/interfaces/product";
import formatToCurrency from "@/utils/formatToCurrency";
import { ImageIcon, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

interface ProductProps extends IProduct {
  className?: string;
  oldPrice?: number;
}

/*
Tabela "Promoções":
ID (chave primária)
ID do Produto (chave estrangeira referenciando a tabela "Produtos")
Preço Antigo
Preço Novo
Data de Início
Data de Término
Outros atributos relevantes da promoção*/

const imgSize = "h-40 w-72 md:h-56 md:w-full";

/*bg-[#4682B4]*/
/*O nome do arquivo deve permanecer imutável e gerado aleatoriamente para evitar a sobreposição com outros arquivos,
se não pudermos apontar para o arquivo no disco, basicamente o perderemos. Lembre-se de que você também precisará excluir o registro dos metadados se precisar excluir o arquivo. */

const Product = ({
  _id,
  images_url,
  title,
  price,
  oldPrice,
  className,
}: ProductProps) => {
  const router = useRouter();

  const fees = (Math.round(price / 2) + price * 0.06).toLocaleString("pt-br", {
    maximumFractionDigits: 2,
  });

  //oldPrice = 99.9;

  return (
    <div
      title={title}
      className={cn(
        "flex md:flex-col bg-[#424242] rounded-md hover:opacity-70 hover:cursor-pointer",
        className
      )}
      onClick={() => {
        router.push(`/product/${_id}`);
      }}
    >
      {images_url ? (
        <div className={`relative ${imgSize}`}>
          <Image
            fill
            src={images_url.split(";")[0]}
            alt={title}
            className="absolute rounded-l-md object-cover md:rounded-t-md md:rounded-bl-none"
          />
        </div>
      ) : (
        <div className={`flex flex-col items-center justify-center ${imgSize}`}>
          <ImageIcon className="size-24 md:size-36" color="#9c9c9c" />
        </div>
      )}
      <div className="flex flex-col px-3 py-2 justify-around w-full md:h-40 md:justify-between md:py-3">
        <p className="font-semibold text-sm line-clamp-2 lg:text-base">
          {title}
        </p>

        {/*Modelos de informações - Fazer componente de StatusLabel depois
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
        </div>*/}

        {/*oldPrice ? (
          <div className="flex items-start gap-2">
            <p className="font-semibold text-2xl text-green-400">R$ {price}</p>
            <p className="font-semibold line-through text-sm text-green-400 opacity-80">
              R$ {oldPrice}
            </p>
          </div>
        ) : (
          <p className="font-semibold text-2xl text-green-400">R$ {price}</p>
        )*/}

        <div>
          <p className="font-semibold text-2xl text-green-400">
            R$ {formatToCurrency(price)}
          </p>
          <p className="font-medium ml-1 opacity-75 text-white text-xs">
            ou 2x de R$ {fees}
          </p>
        </div>
        <button className="flex items-center justify-end gap-2 md:justify-center">
          <p className="font-semibold italic text-sm">View details</p>
          <ArrowRightCircle size={16} />
        </button>
      </div>
    </div>
  );
};

export default Product;
