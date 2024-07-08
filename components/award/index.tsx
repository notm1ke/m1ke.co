import { MdiIcon } from "~/util";
import { mdiMedal } from "@mdi/js";
import { Award, Awards } from "./data";

export const AwardSection = () => Awards.map((award, i) => (
	<AwardEntry key={i} award={award} />
));

const AwardEntry: React.FC<{ award: Award }> = ({ award }) => (
	<div className="max-w-[1028px] flex-col">
		<div className="flex">
			<div className="flex-1 space-y-1">
				<span
					className={`text-lg font-mono font-semibold border-b-[2px] pb-2`}
				>
					{award.authority}
				</span>
			</div>
		</div>

		<div className="mb-3">
			<div className="mt-4">
				<span className="text-base font-mono text-gray-300 font-semibold">
					{award.title}
				</span>
				<span className="text-base text-gray-300/60 ml-3 font-mono">
					({award.date})
				</span>
			</div>

			<div className="text-[0.95rem] mt-1 text-gray-400 font-mono">
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
	</div>
);
