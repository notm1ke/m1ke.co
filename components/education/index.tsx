import { Education } from "./data";
import { EducationCard } from "./edu-card";
import { StickySectionHeader } from "../sticky-section-header";

export const EducationSection = () => (
	<section id="education">
		<StickySectionHeader
			title="Education"
			amount={Education.length}
		/>
		
		<div className="space-y-8">
			{Education.map((edu) => (
				<EducationCard key={edu.institution} edu={edu} />
			))}
		</div>
	</section>
);