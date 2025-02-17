import { useState } from "react";
import { motion } from "framer-motion";
import { WorkCard } from "./work-card";
import { ChevronUp, ChevronDown } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import { getProjectsByCompany, WorkExperience } from "./data";
import { StickySectionHeader } from "../sticky-section-header";

export const WorkSection = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<section id="work">
			<StickySectionHeader title="Work Experience" />
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
						<AnimatedSection
							isVisible={expanded}
							className="space-y-8"
						>
							{WorkExperience.slice(3).map((work, index) => (
								<WorkCard
									key={index + 3}
									company={work.company}
									icon={work.image}
									positions={work.positions}
									projects={getProjectsByCompany(work)}
								/>
							))}
						</AnimatedSection>
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							transition={{
								type: "spring",
								stiffness: 400,
								damping: 30,
							}}
							onClick={() => setExpanded(!expanded)}
							className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 px-4 py-2 rounded-md"
						>
							{expanded ? (
								<>
									<ChevronUp className="h-4 w-4 mr-2 inline" /> Show Less
								</>
							) : (
								<>
									<ChevronDown className="h-4 w-4 mr-2 inline" /> Show More
								</>
							)}
						</motion.button>
					</>
				)}
			</div>
		</section>
	);
};
