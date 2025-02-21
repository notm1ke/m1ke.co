"use client";

import { css } from "~/util";
import { Project } from "./data";
import { JSX, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "~/components/ui/card";
import { projectTypeIcons, langIndicator } from "../work/work-projects";

import {
	Archive,
	BriefcaseBusiness,
	Earth,
	EarthLock,
	ExternalLink,
	FolderGit2,
	Unlink
} from "lucide-react";

interface WorkProjectCardProps {
	project: Project;
	posIndex: number;
}

const ArchivedIndicator = () => (
	<Badge variant="outline" className="bg-yellow-600 text-yellow-100">
		<Archive className="w-4 h-4 mr-2" /> Archived
	</Badge>
);

const VisibilityIndicator: React.FC<{ project: Project }> = ({ project }) => (
	<>
		{
			project.visibility === "public" && (
				<Badge variant="outline" className="bg-green-600 text-green-100">
					<Earth className="w-4 h-4 mr-2" /> Public
				</Badge>
			)
		}
		{
			project.visibility === "private" && (
				<Badge variant="outline" className="bg-red-500 text-red-200">
					<EarthLock className="w-4 h-4 mr-2" /> Private
				</Badge>
			)
		}
		{
			project.visibility === "internal" && (
				<Badge variant="outline" className="bg-blue-600 text-blue-200">
					<BriefcaseBusiness className="w-4 h-4 mr-2" /> Internal
				</Badge>
			)
		}
	</>
);

const GoLink: React.FC<{ href?: string }> = ({ href }) => {
	if (!href) return (
		<div className="flex items-center gap-2 text-red-400 hover:text-red-300">
			<Unlink className="w-4 h-4 mr-1" /> Not Accessible
		</div>
	)
	
	if (href && /http(s)*:\/{2}((github|gitlab).com)\/([a-zA-Z0-9\-_])+\/([a-zA-Z0-9\-_])+(.git)*/.test(href)) return (
		<a
			href={href}
			target="_blank"
			data-track="project:visit:repo"
			className="flex items-center gap-2"
		>
			<FolderGit2 className="w-4 h-4 mr-1" /> Repo
		</a>
	)
	
	return (
		<a
			href={href}
			target="_blank"
			data-track="project:visit:website"
			rel="noopener noreferrer"
			className="flex items-center gap-2"
		>
			<ExternalLink className="w-4 h-4 mr-1" /> Visit
		</a>
	)
}

export const ProjectCard: React.FC<WorkProjectCardProps> = ({ project, posIndex }) => {
	const [expanded, setExpanded] = useState(false);
	
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
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
			whileHover={{ scale: expanded ? 1 : 1.02 }}
			whileTap={{ scale: expanded ? 1 : 0.98 }}
			transition={{
				delay: posIndex * 0.1,
				layout: { type: "spring", bounce: 0.2 },
			}}
			onClick={() => setExpanded(!expanded)}
			className={expanded ? "" : "cursor-pointer"}
		>
			<Card className="border-purple-500/20 bg-gray-900/50 hover:bg-gray-900/80 transition-colors h-full">
				<CardContent className={`p-4 ${expanded ? "pb-4" : ""}`}>
					<motion.div layout="position">
						<div className="flex items-start justify-between gap-4">
							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-2 mb-2">
									<Icon className="h-4 w-4 text-purple-400" />
									<h3 className="font-medium truncate">
										{project.title}
									</h3>
								</div>
								<p className={css("text-sm text-gray-400", !expanded && "line-clamp-2")}>
									{
										expanded ? project.description : project.brief
									}
								</p>
							</div>
							{project.lang && langIndicator(project)}
						</div>
					</motion.div>
					<AnimatePresence initial={false}>
						{expanded && (
							<motion.div
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<div className="mt-4 border-t border-purple-500/20 pt-4">
									<div className="flex items-start justify-between">
										<div className="basis-sm">
											<div className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
												<GoLink href={project.href} />
											</div>
										</div>
										<div className="basis-lg">
											<div className="flex space-x-1 justify-end">
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
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</CardContent>
			</Card>
		</motion.div>
	);
}
