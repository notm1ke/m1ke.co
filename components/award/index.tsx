import { AwardGroup } from "./award-authority";
import { AwardAuthorities, Awards } from "./data";
import { StickySectionHeader } from "../sticky-section-header";

export const AwardSection = () => (
	<section id="honors">
		<StickySectionHeader title="Honors & Awards" />
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
