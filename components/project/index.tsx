import { useState } from "react";
import { Button } from "../ui/button";
import { PersonalProjects } from "./data";
import { ProjectCard } from "./project-card";
import { ChevronUp, ChevronDown } from "lucide-react";
import { StickySectionHeader } from "../sticky-section-header";

export const ProjectSection = () => {
	const visibleProjects = PersonalProjects;
	const [expanded, setExpanded] = useState(false);

	return (
		<section id="projects">
			<StickySectionHeader title="Personal Projects" />
			<div className="grid gap-6 md:grid-cols-2">
				{visibleProjects.slice(0, 9).map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
			{visibleProjects.length > 9 && (
				<Button
					variant="ghost"
					className="w-full mt-4 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
					onClick={() => setExpanded(!expanded)}
				>
					{expanded ? (
						<>
							<ChevronUp className="h-4 w-4 mr-2" /> Show Less
						</>
					) : (
						<>
							<ChevronDown className="h-4 w-4 mr-2" /> Show More
						</>
					)}
				</Button>
			)}
		</section>
	);
};
