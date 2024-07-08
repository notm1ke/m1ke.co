import { MdiIcon } from "~/util";
import { mdiMapMarkerRadius } from "@mdi/js";
import { ProjectOrgSection } from "../project";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ExperienceEntry, ExperiencePosition, WorkExperience } from "./data";

export const ExperienceSection = () =>
	WorkExperience.map((experience, i) => (
		<CompanySection key={i} entry={experience} />
	));

const workedSince = (position: ExperiencePosition) => {
   let { start, end, current } = position;
   if (current) return `Since ${start}`;
   return `${start} — ${end}`;
}

const CompanySection: React.FC<{ entry: ExperienceEntry }> = ({ entry }) => (
	<div className="max-w-[1028px] flex-col">
		<div className="flex">
			<Avatar className={`w-9 h-9 border-2 border-${entry.color}`}>
				<AvatarImage src={entry.image} alt={entry.company} />
				<AvatarFallback>
					{entry.company.slice(0, 2).toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div className="flex-1 ml-4 space-y-1">
				{
					entry.href && (
						<a href={entry.href} className="text-lg font-mono font-semibold border-b-[2px] pb-2 shine">
							{entry.company}
						</a>
					)
				}
				
				{
					!entry.href && (
						<span className={`text-lg font-mono font-semibold border-b-[2px] pb-2`}>
							{entry.company}
						</span>
					)
				}
			</div>
		</div>
		
		{
			entry.positions.map((position, i) => (
				<div key={i} className="mb-3">
					<div className="mt-4">
						<span className="text-base font-mono text-gray-300 font-semibold">
							{position.title}
						</span>
						<span className="text-base text-gray-300/60 ml-3 font-mono">
							({workedSince(position)})
						</span>
					</div>
	
					<div className="text-[0.95rem] mt-1 text-gray-400 font-mono">
						<MdiIcon path={mdiMapMarkerRadius} className="w-4 h-4 inline-block mr-2" />		
						<span className="align-text-top">{position.location ?? "Remote"}</span>
					</div>
					
					<div className="text-[0.95rem] mt-1 text-gray-400">
						{position.description ?? "No description was included for this position."}
					</div>
				</div>
			))
		}
		
		{
			entry.orgKey && (
				<div className="mt-5">
					<ProjectOrgSection org={entry.orgKey} />
				</div>
			)
		}
	</div>
);
