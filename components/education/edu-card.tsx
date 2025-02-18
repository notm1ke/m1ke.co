"use client";

import Image from "next/image";

import { Badge } from "../ui/badge";
import { EducationEntry } from "./data";
import { DateDisplay } from "../date-display";
import { Card, CardContent } from "../ui/card";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export const EducationCard: React.FC<{ edu: EducationEntry }> = ({ edu }) => (
	<Card className="border-purple-500/20 bg-gray-900/50">
		<CardContent className="p-6">
			<div className="flex flex-col gap-4">
				{/* Header with Institution */}
				<Badge className="inline-flex items-center gap-2 px-3 py-1 text-base bg-purple-500/10 hover:bg-purple-500/20 transition-colors w-fit">
					<Image
						src={edu.image || "/placeholder.svg"}
						alt={edu.institution}
						width={24}
						height={24}
						className="rounded-lg [filter:hue-rotate(-10deg)_saturate(70%)_brightness(0.9)]"
					/>
					<span className="font-medium text-purple-400">
						{edu.institution}
					</span>
				</Badge>

				{/* Degree Information */}
				<div className="flex items-start justify-between gap-4 pl-3">
					<div className="space-y-1">
						<div className="flex items-center gap-2">
							<GraduationCap className="h-6 w-6 text-purple-400" />
							<h3 className="font-medium text-purple-400">
								{edu.degreeType}, {edu.major}
							</h3>
						</div>
						{edu.minor && edu.minor.length > 0 && (
							<p className="text-sm text-gray-300 pl-8">
								w/ Minor in {edu.minor.join(", ")}
							</p>
						)}
					</div>
				</div>

				{/* Description */}
				<div className="text-sm text-gray-400 px-3">{edu.description}</div>

				{/* Footer with Location and Date */}
				<div className="flex items-center gap-4 text-sm text-gray-500 pt-2 px-3 justify-between">
					<div className="flex items-center gap-2">
						<MapPin className="h-4 w-4" />
						<span>{edu.location}</span>
					</div>
					<div className="flex items-center gap-2">
						<DateDisplay showFull startDate={edu.start} endDate={edu.end} icon={<Calendar className="h-4 w-4 inline" />} />
					</div>
				</div>
			</div>
		</CardContent>
	</Card>
);
