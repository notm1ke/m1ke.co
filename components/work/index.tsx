import { useRef } from "react";
import { WorkCard } from "./work-card";
import { getProjectsByCompany, WorkExperience } from "./data";
import { StickySectionHeader } from "../section/sticky-header";

export const WorkSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="work"
				title="Work Experience"
				amount={WorkExperience.length}
				sectionRef={sectionRef}
			/>
			
			<div className="space-y-8">
				{WorkExperience.map((work, index) => (
					<WorkCard
						key={index}
						company={work.company}
						icon={work.image}
						positions={work.positions}
						projects={getProjectsByCompany(work)}
					/>
				))}
			</div>
		</section>
	);
};
