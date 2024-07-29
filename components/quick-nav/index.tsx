// Huge inspiration from shadcn (https://github.com/shadcn-ui/ui/blob/main/apps/www/components/toc.tsx)

"use client";

import { css } from "~/util";
import { useEffect, useMemo, useState } from "react";

export type QuickNavContents = {
	id: string;
	title: string;
	children?: Array<QuickNavContents>;
};

const useMounted = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted;
};

const useActiveItem = (itemIds: string[]) => {
	const [activeId, setActiveId] = useState<string>();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: `0% 0% -80% 0%` },
		);

		itemIds?.forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => {
			itemIds?.forEach((id) => {
				const element = document.getElementById(id);
				if (element) observer.unobserve(element);
			});
		};
	}, [itemIds]);

	return activeId;
};

export const QuickNav: React.FC<{ elements: Array<QuickNavContents> }> = ({
	elements,
}) => {
	const ids = useMemo(() => elements.map(({ id }) => id), [elements]);
	const active = useActiveItem(ids);
	const mounted = useMounted();

	if (!elements || !mounted) return null;

	return (
		<div className="space-y-2">
			<p className="font-medium font-mono">On This Page</p>
			<Tree tree={elements} activeItem={active} />
		</div>
	);
};

interface TreeProps {
	tree: Array<QuickNavContents>;
	level?: number;
	activeItem?: string;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
	return tree?.length && level < 3 ? (
		<ul className={css("m-0 list-none", { "pl-4": level !== 1 })}>
			{tree.map((item, index) => {
				return (
					<li key={index} className={css("mt-0 pt-2")}>
						<a
							href={`#${item.id}`}
							className={css(
								"inline-block no-underline transition-colors text-muted-foreground hover:text-foreground",
								// item.id === activeItem
								// 	? "font-medium text-foreground"
								// 	: "text-muted-foreground",
							)}
						>
							{item.title}
						</a>
						{item?.children?.length ? (
							<Tree
								tree={item.children}
								level={level + 1}
								activeItem={activeItem}
							/>
						) : null}
					</li>
				);
			})}
		</ul>
	) : null;
}
