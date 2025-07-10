"use client";

import Image from "next/image";

import { useState } from "react";
import { Project } from "../project/data";
import { calculateDuration } from "~/util";
import { ExperiencePosition } from "./data";
import { Badge } from "~/components/ui/badge";
import { WorkProjects } from "./work-projects";
import { ChevronDown, Slash } from "lucide-react";
import { PositionTimeline } from "./position-timeline";
import { Card, CardContent } from "~/components/ui/card";
import { Disclosure, DisclosureContent, DisclosureTrigger } from "../ui/disclosure";

interface WorkCardProps {
	company: string;
	icon: string;
	positions: Array<ExperiencePosition>;
	projects?: Array<Project>;
	collapsed?: boolean;
}

export const WorkCard: React.FC<WorkCardProps> = ({ company, icon, positions, projects, collapsed: collasped }) => {
	const [expanded, setExpanded] = useState(!collasped);
	const duration = calculateDuration(positions);

	return (
		<Disclosure
			open={expanded}
			onOpenChange={setExpanded}
			className="motion-safe:hover:scale-[1.01] transition-transform"
		>
			<Card className="border-purple-500/20 bg-gray-900/50">
				<CardContent className="p-6">
					<DisclosureTrigger>
						<div className="flex items-center justify-between cursor-pointer">
							<Badge className="inline-flex items-center gap-2 px-3 py-1 text-base bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
								<Image
									src={icon}
									alt={company}
									width={24}
									height={24}
									className="rounded-lg [filter:hue-rotate(-10deg)_saturate(70%)_brightness(0.9)]"
								/>
								<span className="font-medium text-purple-400">
									{company}
								</span>
							</Badge>
							<div className="flex items-center gap-4">
								{!expanded && (
									<div className="hidden sm:inline text-sm text-gray-400">
										{duration}
										<Slash className="inline size-3.5 mx-2 text-gray-700" />
										{positions.length} position
										{positions.length !== 1 ? "s" : ""}
										{(projects && projects.length > 0) && <Slash className="inline size-3.5 mx-2 text-gray-700" />}
										{projects?.length
											? `${projects.length} project${projects.length !== 1 ? "s" : ""}`
											: ""}
									</div>
								)}
								<ChevronDown 
									className="h-5 w-5 text-purple-400 transition-transform"
									style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
								/>
							</div>
						</div>
					</DisclosureTrigger>
					<DisclosureContent>
						<div className="pt-4">
							<PositionTimeline positions={positions} />
							<WorkProjects projects={projects} />
						</div>
					</DisclosureContent>
				</CardContent>
			</Card>
		</Disclosure>
	);
}
