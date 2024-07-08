import { MdiIcon, timeRange } from "~/util";
import { mdiMapMarkerRadius } from "@mdi/js";
import { Education, EducationEntry } from "./data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const EducationSection = () => Education.map((institution, i) => (
	<InstitutionSection key={i} entry={institution} />
))

const InstitutionSection: React.FC<{ entry: EducationEntry }> = ({ entry }) => (
	<div className="max-w-[1028px] flex-col">
		<div className="flex">
			<Avatar className="w-9 h-9 border-2">
				<AvatarImage src={entry.image} alt={entry.institution} />
				<AvatarFallback>
					{entry.institution.slice(0, 2).toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div className="flex-1 ml-4 space-y-1">
				<span className={`text-lg font-mono font-semibold border-b-[2px] pb-2`}>
					{entry.institution}
				</span>
			</div>
		</div>
		
		<div className="mb-3">
			<div className="mt-4">
				<span className="text-base font-mono text-gray-300 font-semibold">
               {entry.major}, {entry.degreeType}
				</span>
				<span className="text-base text-gray-300/60 ml-3 font-mono">
					({timeRange(entry)})
				</span>
			</div>
			
			<div className="text-[0.95rem] mt-1 text-gray-400 font-mono">
				<MdiIcon path={mdiMapMarkerRadius} className="w-4 h-4 inline-block mr-2" />		
				<span className="align-text-top">{entry.location ?? "Remote"}</span>
			</div>

			<div className="text-[0.95rem] mt-1 text-gray-400">
				{entry.description ?? "No description was included for this position."}
			</div>
		</div>
	</div>
)