"use client";

import { useState } from "react";
import { useMediaQuery } from "~/hooks/media-query";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
    DrawerTrigger,
} from "./drawer";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
} from "./dialog";

type ResponsiveModalProps = {
	trigger: JSX.Element;
	title: string | JSX.Element;
	description: string | JSX.Element;
	children: JSX.Element;
};

export const ResponsiveModal: React.FC<ResponsiveModalProps> = ({
	trigger,
	title,
	description,
	children,
}) => {
	const [open, setOpen] = useState(false);
	let desktop = useMediaQuery("(min-width: 768px)");
	if (desktop) return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>{title}</DialogHeader>
				<DialogDescription>{description}</DialogDescription>
				{children}
			</DialogContent>
		</Dialog>
	);

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{trigger}</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					{title}
					<DrawerDescription>{description}</DrawerDescription>
				</DrawerHeader>
				{children}
			</DrawerContent>
		</Drawer>
	);
};
