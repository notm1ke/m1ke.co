"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Separator } from "~/components/ui/separator";

interface StickyHeaderProps {
	title: string;
	amount?: number;
	className?: string;
}

export function StickySectionHeader({ title, amount, className }: StickyHeaderProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isStuck, setIsStuck] = useState(false);
	const headerHeight = 40; // Approximate height of the header

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

	return (
		<motion.div
			ref={ref}
			className={`flex items-center gap-4 mb-6 sticky -top-px z-10 ${className}`}
			style={{
				paddingTop: isStuck ? "1rem" : "0",
				paddingBottom: isStuck ? "1rem" : "0",
				backgroundColor: isStuck ? "rgba(0,0,0,0.8)" : "transparent",
				backdropFilter: isStuck ? "blur(8px)" : "none",
			}}
		>
			<h2 className="text-2xl font-semibold text-purple-400 font-offbit">
				{title}
			</h2>
			<Separator className="flex-1 bg-purple-500/40" />
			{amount && <h4 className="text-xl text-purple-200 font-offbit">{amount}</h4>}
		</motion.div>
	);
}
