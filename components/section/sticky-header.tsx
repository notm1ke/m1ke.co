"use client";

import { css } from "~/util";
import { motion } from "motion/react";
import { useSectionControls } from "./context";
import { Separator } from "~/components/ui/separator";
import { RefObject, useEffect, useRef, useState } from "react";

interface StickyHeaderProps {
	id: string;
	title: string;
	amount?: number;
	className?: string;
	sectionRef: RefObject<HTMLDivElement | null>;
}

export function StickySectionHeader({ id, title, amount, className, sectionRef }: StickyHeaderProps) {
	const headerHeight = 40; 
	const ref = useRef<HTMLDivElement>(null);
	
	const [isStuck, setIsStuck] = useState(false);
	const {
		registerSection,
		unregisterSection,
		openNavigation
	} = useSectionControls();
	
	useEffect(() => {
		const observer = new IntersectionObserver(
			([e]) => {
				if (e.boundingClientRect.top <= headerHeight) {
					setIsStuck(true);
				} else {
					setIsStuck(false);
				}
			},
			{ threshold: [1], rootMargin: `-${headerHeight}px 0px 0px 0px` },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);
	
	useEffect(() => {
		registerSection({
			id, title,
			ref: sectionRef as unknown as RefObject<HTMLElement>
		});

		return () => unregisterSection(id);
	}, [sectionRef]);
	
	const handleClick = (event: React.MouseEvent) => openNavigation(id, event);

	return (
		<motion.div
			ref={ref}
			className={css("flex items-center gap-4 mb-6 sticky -top-px z-10 cursor-pointer", className)}
			style={{
				paddingTop: isStuck ? "1rem" : "0",
				paddingBottom: isStuck ? "1rem" : "0",
				backgroundColor: isStuck ? "rgba(0,0,0,0.8)" : "transparent",
				backdropFilter: isStuck ? "blur(8px)" : "none",
			}}
		>
			<h2 onClick={handleClick} className="text-2xl font-semibold text-purple-400 font-offbit">
				{title}
			</h2>
			<Separator className="flex-1 bg-purple-500/40" />
			{amount && <h4 className="text-xl text-purple-200 font-offbit">{amount}</h4>}
		</motion.div>
	);
}
