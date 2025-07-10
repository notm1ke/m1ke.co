import { PersonalProjects } from "./data";
import { ProjectCard } from "./project-card";
import { StickySectionHeader } from "../sticky-section-header";

export const ProjectSection = () => {
	const projects = PersonalProjects;

	return (
		<section id="projects">
			<StickySectionHeader title="Personal Projects" />
			<div className="grid gap-6 md:grid-cols-2">
				{projects.map(project => (
					<ProjectCard
						key={project.title}
						project={project}
					/>
				))}
			</div>
		</section>
	);
};
