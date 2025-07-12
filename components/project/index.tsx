import { PersonalProjects } from "./data";
import { ProjectCard } from "./project-card";
import { StickySectionHeader } from "../sticky-section-header";

export const ProjectSection = () => (
	<section id="projects">
		<StickySectionHeader
			title="Personal Projects"
			amount={PersonalProjects.length}
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
);
