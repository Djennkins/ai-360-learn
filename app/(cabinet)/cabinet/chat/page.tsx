import { PRODUCTS } from "@/entities/product/static/products";
import ProductChatForm from "@/entities/product/ui/ProductChatForm";
import ProductHeader from "@/entities/product/ui/ProductHeader";
import { FC } from "react";

interface ICabinetChatPage {}

const CabinetChatPage: FC<ICabinetChatPage> = ({}) => {
	const [chat] = PRODUCTS;
	return (
		<div className="md:flex-1 flex flex-col justify-between h-[calc(100vh-50px)]">
			<ProductHeader title={chat.title} icon={chat.icon} description={chat.description} color={chat.color} />
			<ProductChatForm />
		</div>
	);
};

export default CabinetChatPage;
