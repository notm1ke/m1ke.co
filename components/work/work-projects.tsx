"use client";

import { motion } from "motion/react";
import { Project } from "../project/data";
import { Globe, Code2, Library } from "lucide-react";
import { ProjectCard } from "../project/project-card";

interface WorkProjectsProps {
	projects?: Project[];
}

interface IconProps {
	className?: string;
}

export const projectTypeIcons: Record<Project["type"], React.FC<IconProps>> = {
	web: Globe,
	lib: Library,
	app: Code2,
	misc: Code2,
};

export function WorkProjects({ projects }: WorkProjectsProps) {
	if (!projects?.length) return null;

	return (
		<motion.div layout className="flex flex-row flex-wrap gap-2">
			{projects.map((project, i) => (
				<ProjectCard
					key={project.title}
					project={project}
					i={i}
				/>
			))}
		</motion.div>
	);
}
