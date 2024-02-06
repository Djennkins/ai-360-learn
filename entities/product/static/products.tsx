import { ROUTES } from "@/app/config/routes";
import { Activity, Code, Image, MessageCircleCode, Video } from "lucide-react";
import { ReactNode } from "react";

interface IProductUI extends Pick<IProductUI, "title" | "description"> {
	icon: ReactNode;
	color: string;
	link: string;
}

export const PRODUCTS: IProductUI[] = [
	{
		title: "Chat AI",
		description: "Спитай все що завгодно",
		icon: <MessageCircleCode />,
		color: "text-green-700",
		link: ROUTES.cabinet.chat,
	},
	{
		title: "Code Helper",
		description: "Допомога при створенні будь-якого коду на усіх мовах програмування",
		icon: <Code />,
		color: "text-red-700",
		link: ROUTES.cabinet.code,
	},
	{
		title: "Image Generate",
		description: "Шукаєш картинки? Зроби свої за допомогою AI!",
		icon: <Image />,
		color: "text-yellow-700",
		link: ROUTES.cabinet.image,
	},
	{
		title: "Audio Generate",
		description: "Згенеруй музику своєї мрії",
		icon: <Activity />,
		color: "text-blue-700",
		link: ROUTES.cabinet.audio,
	},
	{
		title: "Video Generate",
		description: "Згенеруй ",
		icon: <Video />,
		color: "text-orange-700",
		link: ROUTES.cabinet.video,
	},
];
