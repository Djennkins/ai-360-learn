import { Activity, Code, Image, MessageCircleCode, Video } from "lucide-react";
import { ReactNode } from "react";

interface IProductUI extends Pick<IProductUI, "title" | "description"> {
	icon: ReactNode;
}

export const PRODUCTS: IProductUI[] = [
	{
		title: "Chat AI",
		description: "Спитай все що завгодно",
		icon: <MessageCircleCode />,
	},
	{
		title: "Code Helper",
		description: "Допомога при створенні будь-якого коду на усіх мовах програмування",
		icon: <Code />,
	},
	{
		title: "Image Generate",
		description: "Шукаєш картинки? Зроби свої за допомогою AI!",
		icon: <Image />,
	},
	{
		title: "Audio Generate",
		description: "Згенеруй музику своєї мрії",
		icon: <Activity />,
	},
	{
		title: "Video Generate",
		description: "Згенеруй ",
		icon: <Video />,
	},
];
