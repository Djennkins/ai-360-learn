import { Button } from "@/components/ui/button";
import ProductsLists from "@/entities/product/ui/ProductsLists";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container py-4">
			<div className="flex flex-col justify-center items-center gap-6 min-h-screen">
				<h1 className="text-3xl md:text-5xl font-bold">PROMOTICH 360</h1>
				<div>
					<ProductsLists />
				</div>
				<Link href="/cabinet/dashboard">
					<Button className="flex gap-2">
						Спробувати PROMOTICH 360
						<ArrowRight />
					</Button>
				</Link>
			</div>
		</div>
	);
}
