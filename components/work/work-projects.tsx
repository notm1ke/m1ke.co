"use client";

import { motion } from "framer-motion";
import { Project } from "../project/data";
import { Badge } from "~/components/ui/badge";
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

export const langIndicator = ({ lang }: Project) => {
	if (lang === "ts")
		return (
			<Badge variant="secondary" className="bg-sky-600/20 text-sky-600 shrink-0 hover:bg-sky-400/10">
				{lang}
			</Badge>
		);

	if (lang === "js")
		return (
			<Badge variant="secondary" className="bg-yellow-300/20 text-yellow-300 shrink-0 hover:bg-yellow-300/10">
				{lang}
			</Badge>
		);

	if (lang === "py")
		return (
			<Badge variant="secondary" className="bg-teal-400/20 text-teal-400 shrink-0 hover:bg-teal-400/10">
				{lang}
			</Badge>
		);

	if (lang === "java")
		return (
			<Badge variant="secondary" className="bg-orange-400/20 text-orange-400 shrink-0 hover:bg-orange-400/10">
				{lang}
			</Badge>
		);

	if (lang === "html")
		return (
			<Badge variant="secondary" className="bg-red-400/20 text-red-400 shrink-0 hover:bg-red-400/10">
				{lang}
			</Badge>
		);

	if (lang === "ps")
		return (
			<Badge variant="secondary" className="bg-blue-400/20 text-blue-400 shrink-0 hover:bg-blue-400/10">
				{lang}
			</Badge>
		);
};

export function WorkProjects({ projects }: WorkProjectsProps) {
	if (!projects?.length) return null;

	return (
		<motion.div layout className="mt-6 border-t border-purple-500/20 pt-4">
			<motion.h4 layout className="text-sm font-medium text-purple-400 mb-4">
				Related Projects
			</motion.h4>
			<motion.div layout className="grid gap-4 md:grid-cols-2 relative">
				{projects.map(project => (
					<ProjectCard
						key={project.title}
						project={project}
					/>
				))}
			</motion.div>
		</motion.div>
	);
}
