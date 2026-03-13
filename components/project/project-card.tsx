"use client";

import { css } from "~/util";
import { Project } from "./data";
import { motion } from "motion/react";
import { getLangIcon } from "./lang-icon";
import { SiteFavicon } from "../site-favicon";
import { PreviewCard } from "../ui/preview-card";

interface WorkProjectCardProps {
	project: Project;
	i: number;
}

const getProjectIcon = (project: Project, className?: string) => {
	if (project.type === "web" && project.href) return (
		<SiteFavicon
			url={project.href}
			className={css(className)}
		/>
	);
	
	const Icon = getLangIcon(project.lang);
	return <Icon className={css("size-4 shrink-0 text-purple-200", className)} />
}

const WorkProjectPill: React.FC<WorkProjectCardProps> = ({ project, i}) => {
	return (
		<motion.div
			className="flex flex-row space-x-1.5 p-1 rounded-lg items-center bg-purple-900/40 border border-purple-900/60 cursor-pointer"
			initial={{ opacity: 0, scale: 0.8, x: -10 }}
			animate={{ opacity: 1, scale: 1.0, x: 0 }}
			transition={{ delay: i * (50 / 1000) }}
		>
			{getProjectIcon(project)}
			<span className="text-xs">{project.title}</span>
		</motion.div>
	);
}

export const ProjectCard: React.FC<WorkProjectCardProps> = ({ project, i }) => {
	return (
		<PreviewCard
			href={project.href}
			trigger={<WorkProjectPill project={project} i={i} />}
		>
			<div className="p-2 flex flex-col space-y-2 text-sm">
				<div className="flex flex-row justify-between">
					<span className="flex flex-row items-center gap-2 font-bold">
						{getProjectIcon(project)}
						{project.title}
					</span>
				</div>
				
				<span className="text-xs break-words">
					{project.description}
				</span>
				
				{project.href && (
					<span className="text-xs text-blue-400">
						Click to open in new tab
					</span>
				)}
				
				{!project.href && project.visibility !== "public" && (
					<span className="text-xs text-red-400">
						No link - this is a{project.visibility === "internal" ? "n" : ""} {project.visibility} project
					</span>
				)}
			</div>
		</PreviewCard>
	);
};
