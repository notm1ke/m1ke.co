import { mdiMedal } from "@mdi/js";
import { groupBy, MdiIcon } from "~/util";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Award, AwardAuthorities, AwardAuthority, Awards } from "./data";

export const AwardSection = () => AwardAuthorities.map((authority, i) => (
   <AwardAuthoritySection key={i} authority={authority} />
));

const AwardAuthoritySection: React.FC<{ authority: AwardAuthority }> = ({ authority }) => {
   let awards = groupBy(Awards, 'authority');
   let entries = awards[authority.id];
   if (!entries) return null;
   
   return (
	   <div className="max-w-[1028px] flex-col">
			<div className="flex">
				<Avatar className="w-9 h-9 border-2">
					<AvatarImage
						src={authority.image}
						alt={authority.name[0]}
						style={{ filter: `sepia(100%) saturate(175%) brightness(80%) hue-rotate(212deg)` }}
					/>
					<AvatarFallback>
						{authority.name.slice(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div className="flex-1 ml-4 space-y-1">
					<a href={authority.href} className="text-lg font-mono text-purple-300 font-semibold align-text-top shine">
						{authority.name}
					</a>
				</div>
			</div>
			
			{
				entries.map((entry, i) => (
					<AwardEntry key={i} award={entry} />
				))
			}
		</div>	
   )
}

const AwardEntry: React.FC<{ award: Award }> = ({ award }) => (
	<div className="mb-3">
		<div className="mt-4">
			<span className="text-base font-mono text-gray-300 font-semibold">
				{award.title}
			</span>
			<span className="text-base text-gray-300/60 ml-3 font-mono">
				({award.date})
			</span>
		</div>

		<div className="text-[0.95rem] mt-1 text-gray-300 font-mono">
			<MdiIcon path={mdiMedal} className="w-4 h-4 inline-block mr-2" />
			<span className="align-text-top">
				Credential ID:{" "}
				<a href={award.href} className="text-blue-300 shine">
					{award.credential}
				</a>
			</span>
		</div>

		<div className="text-[0.95rem] mt-1 text-gray-400">
			{award.description ?? "No description was included for this award."}
		</div>
	</div>
);
