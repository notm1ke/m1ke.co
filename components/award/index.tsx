import { useRef } from "react";
import { AwardGroup } from "./award-authority";
import { AwardAuthorities, Awards } from "./data";
import { StickySectionHeader } from "../section/sticky-header";

export const AwardSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="honors"
				title="Honors & Awards"
				amount={AwardAuthorities.length}
				sectionRef={sectionRef}
			/>
			
			<div className="space-y-6">
				{AwardAuthorities.map((authority) => {
					const authorityAwards = Awards.filter(
						award => award.authority === authority.id
					);
					
					return (
						<AwardGroup
							key={authority.id}
							authority={authority}
							awards={authorityAwards}
						/>
					);
				})}
			</div>
		</section>
	);
};
