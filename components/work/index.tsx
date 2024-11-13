import { MdiIcon, timeRange } from "~/util";
import { ProjectOrgSection } from "../project";
import { ExperienceEntry, WorkExperience } from "./data";
import { mdiCalendarToday, mdiMapMarkerRadius } from "@mdi/js";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const ExperienceSection = () =>
	WorkExperience.map((experience, i) => (
		<CompanySection key={i} entry={experience} />
	));

const CompanySection: React.FC<{ entry: ExperienceEntry }> = ({ entry }) => (
	<div className="max-w-[1028px] flex-col">
		<div className="flex">
			<Avatar className="w-8 h-8 rounded-md border-2">
				<AvatarImage
					src={entry.image}
					alt={entry.company}
					style={{ filter: `sepia(100%) saturate(175%) brightness(80%) hue-rotate(212deg)` }}
				/>
				<AvatarFallback>
					{entry.company.slice(0, 2).toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div className="flex-1 ml-4 space-y-1">
				{
					entry.href && (
						<a href={entry.href} className="text-[1.115rem] font-mono text-purple-300 font-semibold shine align-text-top">
							{entry.company}
						</a>
					)
				}
				
				{
					!entry.href && (
						<span className="text-lg font-mono text-purple-300 font-semibold align-text-top">
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
						<span className="text-base font-mono text-purple-200 font-semibold tracking-tight">
							{position.title}
						</span>
					</div>
	
					<div className="flex space-x-3 items-center text-[0.95rem] mt-1 text-gray-300 font-mono tracking-tighter">
						<div>
							<span className="text-purple-100">
								<MdiIcon path={mdiMapMarkerRadius} className="w-4 h-4 inline-block mr-2" />		
								<span className="align-text-top">{position.location ?? "Remote"}</span>
							</span>
						</div>
						<div className="h-5 border-l-[2px] border-solid border-gray-500 mt-1"></div>
						<div>
							<span className="align-text-top">
								<MdiIcon path={mdiCalendarToday} className="w-4 h-4 inline-block mr-2" />
								{timeRange(position)}
							</span>
						</div>
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
