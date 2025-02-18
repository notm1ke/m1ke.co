"use client";

import Image from "next/image";

import { useState } from "react";
import { Project } from "../project/data";
import { ChevronDown } from "lucide-react";
import { calculateDuration } from "~/util";
import { ExperiencePosition } from "./data";
import { Badge } from "~/components/ui/badge";
import { WorkProjects } from "./work-projects";
import { PositionTimeline } from "./position-timeline";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "~/components/ui/card";

interface WorkCardProps {
	company: string;
	icon: string;
	positions: Array<ExperiencePosition>;
	projects?: Array<Project>;
}

export const WorkCard: React.FC<WorkCardProps> = ({ company, icon, positions, projects }) => {
	const [isExpanded, setIsExpanded] = useState(true);
	const duration = calculateDuration(positions);

	return (
		<motion.div
			layout
			initial={false}
			animate={{ scale: 1 }}
			whileHover={{ scale: 1.01 }}
			transition={{
				layout: { type: "spring", bounce: 0.2 },
				scale: { type: "spring", bounce: 0.2 },
			}}
		>
			<Card className="border-purple-500/20 bg-gray-900/50">
				<CardContent className="p-6">
					<motion.div layout="position">
						<div
							className="flex items-center justify-between cursor-pointer"
							onClick={() => setIsExpanded(!isExpanded)}
						>
							<Badge className="inline-flex items-center gap-2 px-3 py-1 text-base bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
								<Image
									src={icon}
									alt={company}
									width={24}
									height={24}
									className="rounded-lg [filter:hue-rotate(-10deg)_saturate(70%)_brightness(0.9)]"
								/>
								<span className="font-medium text-purple-400">
									{company}
								</span>
							</Badge>
							<div className="flex items-center gap-4">
								{!isExpanded && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="hidden sm:inline text-sm text-gray-400"
									>
										{duration} · {positions.length} position
										{positions.length !== 1 ? "s" : ""}
										{projects?.length
											? ` · ${projects.length} project${projects.length !== 1 ? "s" : ""}`
											: ""}
									</motion.div>
								)}
								<motion.div
									animate={{ rotate: isExpanded ? 180 : 0 }}
									transition={{ duration: 0.2 }}
								>
									<ChevronDown className="h-5 w-5 text-purple-400" />
								</motion.div>
							</div>
						</div>
					</motion.div>
					<AnimatePresence initial={false}>
						{isExpanded && (
							<motion.div
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{
									layout: { type: "spring", bounce: 0.2 },
									opacity: { duration: 0.2 },
								}}
							>
								<PositionTimeline positions={positions} />
								<WorkProjects projects={projects} />
							</motion.div>
						)}
					</AnimatePresence>
				</CardContent>
			</Card>
		</motion.div>
	);
}
