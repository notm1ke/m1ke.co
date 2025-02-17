"use client";

import { css } from "~/util";
import { useState } from "react";
import { Project } from "../project/data";
import { ExternalLink, Slash } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "~/components/ui/card";
import { projectTypeIcons, langIndicator } from "./work-projects";

interface WorkProjectCardProps {
	project: Project;
}

const ArchivedIndicator = () => (
	<Badge variant="outline" className="bg-yellow-600 text-yellow-100">
		Archived
	</Badge>
);

const VisibilityIndicator: React.FC<{ project: Project }> = ({ project }) => (
	<>
		{
			project.visibility === "public" && (
				<Badge variant="outline" className="bg-green-600 text-green-100">
					Public
				</Badge>
			)
		}
		{
			project.visibility === "private" && (
				<Badge variant="outline" className="bg-red-500 text-red-200">
					Private
				</Badge>
			)
		}
		{
			project.visibility === "internal" && (
				<Badge variant="outline" className="bg-blue-600 text-blue-200">
					Internal
				</Badge>
			)
		}
	</>
);

export const WorkProjectCard: React.FC<WorkProjectCardProps> = ({ project }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const Icon = projectTypeIcons[project.type];
	const indicators: JSX.Element[] = [
		<VisibilityIndicator
			key="visibility"
			project={project}
		/>
	];
	
	if (project.archived) indicators.push(
		<ArchivedIndicator />
	);

	return (
		<motion.div
			layout
			initial={false}
			animate={{ scale: 1 }}
			whileHover={{ scale: isExpanded ? 1 : 1.02 }}
			whileTap={{ scale: isExpanded ? 1 : 0.98 }}
			transition={{
				layout: { type: "spring", bounce: 0.2 },
			}}
			onClick={() => setIsExpanded(!isExpanded)}
			className={isExpanded ? "" : "cursor-pointer"}
		>
			<Card className="border-purple-500/20 bg-gray-900/50 hover:bg-gray-900/80 transition-colors h-full">
				<CardContent className={`p-4 ${isExpanded ? "pb-4" : ""}`}>
					<motion.div layout="position">
						<div className="flex items-start justify-between gap-4">
							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-2 mb-2">
									<Icon className="h-4 w-4 text-purple-400" />
									<h3 className="font-medium truncate">
										{project.title}
									</h3>
								</div>
								<p className={css("text-sm text-gray-400", !isExpanded && "line-clamp-2")}>
									{
										isExpanded ? project.description : project.brief
									}
								</p>
							</div>
							{project.lang && langIndicator(project)}
						</div>
					</motion.div>
					<AnimatePresence initial={false}>
						{isExpanded && (
							<motion.div
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<div className="mt-4 border-t border-purple-500/20 pt-4">
									<div className="flex items-start justify-between space-x-2">
										{project.href && (
											<>
												<a
													href={project.href}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
												>
													<ExternalLink className="h-4 w-4" />
													Visit	
												</a>
												<Slash className="h-4 w-4 text-gray-700 mt-1" />
											</>
										)}
										<div className="flex">
											{
												indicators.map((indicator, index) => (
													<div key={index} className="flex">
														{indicator}
													</div>
												))
											}
										</div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</CardContent>
			</Card>
		</motion.div>
	);
}
