"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { AwardCard } from "./award-card";
import { Card, CardContent } from "../ui/card";
import { Award, AwardAuthority } from "./data";

interface AwardGroupProps {
	authority: AwardAuthority;
	awards: Award[];
}

export const AwardGroup: React.FC<AwardGroupProps> = ({
	authority,
	awards,
}) => {
	return (
		<motion.div
			layout
			initial={false}
			animate={{ scale: 1 }}
			whileHover={{ scale: 1.01 }}
			transition={{ type: "spring", bounce: 0.2 }}
		>
			<Card className="border-purple-500/20 bg-gray-900/50">
				<CardContent className="p-4.5 md:p-6">
					<div className="space-y-6">
						{/* Authority Badge */}
						<Badge className="inline-flex items-center gap-2 px-3 py-1 text-base bg-purple-500/10 hover:bg-purple-500/20 transition-colors w-fit">
							<Image
								src={authority.image}
								alt={authority.name}
								width={24}
								height={24}
								className="rounded-lg [filter:hue-rotate(-10deg)_saturate(70%)_brightness(0.9)]"
							/>
							<span className="font-medium text-purple-400">
								{authority.name}
							</span>
						</Badge>

						{/* Awards Grid */}
						<div className="grid gap-4 md:grid-cols-2">
							{awards.map((award) => (
								<AwardCard key={award.credential} award={award} />
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};
