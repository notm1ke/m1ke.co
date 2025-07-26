import { useRef, useState } from "react";
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
				{WorkExperience.slice(0, 3).map((work, index) => (
					<WorkCard
						key={index}
						company={work.company}
						icon={work.image}
						positions={work.positions}
						projects={getProjectsByCompany(work)}
					/>
				))}
				{WorkExperience.length > 3 && (
					<>
						{WorkExperience.slice(3).map((work, index) => (
							<WorkCard
								key={index + 3}
								company={work.company}
								icon={work.image}
								positions={work.positions}
								projects={getProjectsByCompany(work)}
								collapsed
							/>
						))}
					</>
				)}
			</div>
		</section>
	);
};
