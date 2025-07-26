import { Education } from "./data";
import { EducationCard } from "./edu-card";
import { StickySectionHeader } from "../section/sticky-header";
import { useRef } from "react";

export const EducationSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="education"
				title="Education"
				amount={Education.length}
				sectionRef={sectionRef}
			/>
			
			<div className="space-y-8">
				{Education.map((edu) => (
					<EducationCard key={edu.institution} edu={edu} />
				))}
			</div>
		</section>
	);
};