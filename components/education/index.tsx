import { MdiIcon, timeRange } from "~/util";
import { Education, EducationEntry } from "./data";
import { mdiCalendarToday, mdiMapMarkerRadius } from "@mdi/js";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const EducationSection = () => Education.map((institution, i) => (
	<InstitutionSection key={i} entry={institution} />
))

const InstitutionSection: React.FC<{ entry: EducationEntry }> = ({ entry }) => (
	<div className="max-w-[1028px] flex-col">
		<div className="flex">
			<Avatar className="w-9 h-9 border-2">
				<AvatarImage
					src={entry.image}
					alt={entry.institution}
					style={{ filter: `sepia(100%) saturate(175%) brightness(80%) hue-rotate(212deg)` }}
				/>
				<AvatarFallback>
					{entry.institution.slice(0, 2).toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div className="flex-1 ml-4 space-y-1">
				<span className="text-lg font-mono text-purple-300 font-semibold align-text-top">
					{entry.institution}
				</span>
			</div>
		</div>
		
		<div className="mb-3">
			<div className="mt-4">
				<span className="text-base font-mono text-gray-300 font-semibold">
               {entry.major}, {entry.degreeType}
				</span>
			</div>
			
			<div className="flex space-x-3 items-center text-[0.95rem] mt-1 text-gray-300 font-mono tracking-tighter">
				<div>
					<span className="text-purple-100">
						<MdiIcon path={mdiMapMarkerRadius} className="w-4 h-4 inline-block mr-2" />		
						<span className="align-text-top">{entry.location ?? "Remote"}</span>
					</span>
				</div>
				<div className="h-5 border-l-[2px] border-solid border-gray-500 mt-1"></div>
				<div>
					<span className="align-text-top">
						<MdiIcon path={mdiCalendarToday} className="w-4 h-4 inline-block mr-2" />
						{timeRange(entry)}
					</span>
				</div>
			</div>

			<div className="text-[0.95rem] mt-1 text-gray-400">
				{entry.description ?? "No description was included for this position."}
			</div>
		</div>
	</div>
)