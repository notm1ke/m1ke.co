import { PersonalProjects } from "./data";
import { ProjectCard } from "./project-card";
import { StickySectionHeader } from "../section/sticky-header";
import { useRef } from "react";

export const ProjectSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="projects"
				title="Personal Projects"
				amount={PersonalProjects.length}
				sectionRef={sectionRef}
			/>
			
			<div className="grid gap-6 md:grid-cols-2">
				{PersonalProjects.map(project => (
					<ProjectCard
						key={project.title}
						project={project}
					/>
				))}
			</div>
		</section>
	)
};
