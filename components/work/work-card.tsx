"use client";

import moment from "moment";
import Image from "next/image";

import { useState } from "react";
import { Project } from "../project/data";
import { calculateDuration } from "~/util";
import { ExperiencePosition } from "./data";
import { PositionTimeline } from "./position-timeline";
import { Disclosure, DisclosureContent, DisclosureTrigger } from "../ui/disclosure";

interface WorkCardProps {
	company: string;
	icon: string;
	positions: Array<ExperiencePosition>;
	projects: Array<Project>;
}

export const WorkCard: React.FC<WorkCardProps> = ({ company, icon, positions, projects }) => {
	const [expanded, setExpanded] = useState(false);
	const latestPosition = positions[0];
	const duration = calculateDuration([latestPosition]);

	return (
		<Disclosure open={expanded} onOpenChange={setExpanded}>
			<DisclosureTrigger>
				<div className="flex gap-4 items-stretch cursor-pointer px-3 py-2 -mx-3 -my-2 rounded-md transition-colors duration-150 hover:bg-purple-500/10">
					<div className="flex items-center justify-center w-9 h-9 flex-shrink-0">
						<Image
							src={icon}
							alt={company}
							width={64}
							height={64}
							className="rounded [filter:brightness(0.9)]"
						/>
					</div>
					<div className="space-y-1">
						<div className="flex flex-wrap items-baseline gap-2">
							<h3 className="text-sm font-medium text-foreground">
								{company}
							</h3>
							<p className="text-sm text-muted-foreground">
								{latestPosition.title}
							</p>
						</div>
						<div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/70">
							<span>{
								latestPosition.current
								? duration
									: `${moment(latestPosition.start).format('MMM YYYY')} - ${moment(latestPosition.end).format('MMM YYYY')}`
							}</span>
							<span>•</span>
							<span>{latestPosition.location}</span>
						</div>
					</div>
				</div>
			</DisclosureTrigger>
			<DisclosureContent>
				<PositionTimeline positions={positions} projects={projects} />
			</DisclosureContent>
		</Disclosure>
	);
}
