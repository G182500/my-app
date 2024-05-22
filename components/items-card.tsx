import { Product } from "@/interfaces/product"

interface ItemsCardProps {
	items: Product[];
}

const ItemsCard = ({ items }: ItemsCardProps) => {
	return (
		<div className="flex bg-[#2e2e2e] p-3 rounded-lg space-x-3 w-full">
			{
				items.map((item, index) => {
					return (
						<div className="flex flex-col bg-[#4f4f4f] w-64" key={`item${index}`}>
							<p>
								{item.title}
							</p>
							<p>
								{item.price}
							</p>
						</div>
					)
				})
			}
		</div>
	)
}

export default ItemsCard;

/*items.forEach((item) => {
					return (
						<div className="flex flex-col bg-[#6f6f6f]">
							<p>
								{item.title}
							</p>
							<p>{item.price}</p>
						</div>
					)
				}) */