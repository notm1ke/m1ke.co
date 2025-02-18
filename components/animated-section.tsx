"use client";

import type React from "react";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AnimatedSection({
	children,
	isVisible,
	className,
}: {
	children: React.ReactNode;
	isVisible: boolean;
	className?: string;
}) {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<motion.div layout>
			<AnimatePresence initial={false}>
				{isVisible && (
					<motion.div
						ref={containerRef}
						initial={{ height: 0 }}
						animate={{
							height: "auto",
							transition: {
								height: { type: "spring", bounce: 0.2, duration: 0.6 },
							},
						}}
						exit={{
							height: 0,
							transition: {
								height: { type: "spring", bounce: 0.2, duration: 0.6 },
							},
						}}
						className="overflow-hidden"
					>
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									opacity: { duration: 0.2 },
									y: { type: "spring", bounce: 0.2, duration: 0.6 },
								},
							}}
							exit={{
								opacity: 0,
								y: -10,
								transition: {
									opacity: { duration: 0.2 },
									y: { type: "spring", bounce: 0.2, duration: 0.6 },
								},
							}}
						>
							<div className={className}>{children}</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
