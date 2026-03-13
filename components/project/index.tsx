import { PersonalProjects } from "./data";
import { ProjectCard } from "./project-card";
import { StickySectionHeader } from "../section/sticky-header";
import { useRef } from "react";
import { ProjectRow } from "./project-row";

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
			
			{/*<div className="flex flex-wrap gap-2">
				{PersonalProjects.map(project => (
					<ProjectCard
						key={project.title}
						project={project}
						i={-1}
					/>
				))}
			</div>*/}
			<div className="space-y-px">
				{PersonalProjects.map((project, idx) => (
					<ProjectRow
						key={project.title}
						project={project}
						i={idx}
					/>
				))}
			</div>
		</section>
	)
};
