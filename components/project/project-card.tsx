"use client";

import { css } from "~/util";
import { Project } from "./data";
import { JSX, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { TextEffect } from "../ui/text-effect";
import { Card, CardContent } from "~/components/ui/card";
import { projectTypeIcons, langIndicator } from "../work/work-projects";
import { Disclosure, DisclosureContent, DisclosureTrigger } from "../ui/disclosure";

import {
	Archive,
	BriefcaseBusiness,
	Earth,
	EarthLock,
	ExternalLink,
	FolderGit2,
	Unlink,
} from "lucide-react";

interface WorkProjectCardProps {
	project: Project;
}

const ArchivedIndicator = () => (
	<Badge variant="outline" className="bg-yellow-600 text-yellow-100">
		<Archive className="w-4 h-4 mr-2" /> Archived
	</Badge>
);

const VisibilityIndicator: React.FC<{ project: Project }> = ({ project }) => (
	<>
		{project.visibility === "public" && (
			<Badge variant="outline" className="bg-green-600 text-green-100">
				<Earth className="w-4 h-4 mr-2" /> Public
			</Badge>
		)}
		{project.visibility === "private" && (
			<Badge variant="outline" className="bg-red-500 text-red-200">
				<EarthLock className="w-4 h-4 mr-2" /> Private
			</Badge>
		)}
		{project.visibility === "internal" && (
			<Badge variant="outline" className="bg-blue-600 text-blue-200">
				<BriefcaseBusiness className="w-4 h-4 mr-2" /> Internal
			</Badge>
		)}
	</>
);

const GoLink: React.FC<{ href?: string }> = ({ href }) => {
	if (!href)
		return (
			<div className="flex items-center gap-2 text-red-400 hover:text-red-300">
				<Unlink className="w-4 h-4 mr-1" /> No Link
			</div>
		);

	if (
		href &&
		/http(s)*:\/{2}((github|gitlab).com)\/([a-zA-Z0-9\-_])+\/([a-zA-Z0-9\-_])+(.git)*/.test(
			href,
		)
	)
		return (
			<a href={href} target="_blank" className="flex items-center gap-2">
				<FolderGit2 className="w-4 h-4 mr-1" /> Repo
			</a>
		);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center gap-2"
		>
			<ExternalLink className="w-4 h-4 mr-1" /> Visit
		</a>
	);
};

export const ProjectCard: React.FC<WorkProjectCardProps> = ({ project }) => {
	const [expanded, setExpanded] = useState(false);

	const Icon = projectTypeIcons[project.type];
	const indicators: JSX.Element[] = [
		<VisibilityIndicator key="visibility" project={project} />,
	];

	if (project.archived) indicators.push(<ArchivedIndicator />);

	const trigger = () => {
		if (expanded) {
			setTimeout(() => setExpanded(false), 500);
			return;
		}

		setExpanded(true);
	};

	return (
		<Disclosure
			open={expanded}
			onOpenChange={trigger}
			className={css(expanded && "cursor-pointer")}
		>
			<Card className="border-purple-500/20 bg-gray-900/50 hover:bg-gray-900/80 transition-colors h-full">
				<CardContent className={css("p-3 md:p-4", expanded && "pb-4")}>
					<DisclosureTrigger>
						<div className="flex items-start justify-between gap-4">
							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-2 mb-2">
									<Icon className="h-4 w-4 text-purple-400" />
									<h3 className="font-medium truncate">
										{project.title}
									</h3>
								</div>
								<p
									className={css(
										"text-sm text-gray-400",
										!expanded && "line-clamp-2",
									)}
								>
									{!expanded && project.brief}
								</p>
							</div>
							{project.lang && langIndicator(project)}
						</div>
					</DisclosureTrigger>
					<DisclosureContent>
						<>
							{typeof project.description === "string" && (
								<TextEffect
									as="p"
									per="char"
									preset="fade"
									speedReveal={15.0}
									speedSegment={15.0}
									className="text-sm text-gray-400"
								>
									{project.description}
								</TextEffect>
							)}

							{typeof project.description === "function" && project.description}

							<div className="mt-4 md:border-t border-purple-500/20 pt-0 md:pt-4">
								<div className="flex items-start justify-between mt-4">
									<div className="basis-sm">
										<div className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
											<GoLink href={project.href} />
										</div>
									</div>
									<div className="basis-lg">
										<div className="flex space-x-1 justify-end">
											{indicators.map((indicator, index) => (
												<div key={index} className="flex">
													{indicator}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</>
					</DisclosureContent>
				</CardContent>
			</Card>
		</Disclosure>
	);
};
