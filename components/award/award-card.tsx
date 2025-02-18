"use client";

import { Award } from "./data";
import { Card, CardContent } from "../ui/card";
import { Trophy, Calendar, AwardIcon } from "lucide-react";

export const AwardCard: React.FC<{ award: Award }> = ({ award }) => {
	return (
		<Card className="border-purple-500/20 bg-gray-900/80">
			<CardContent className="p-4">
				<div className="flex flex-col gap-3">
					<div className="flex items-start gap-3">
						<Trophy className="h-4 w-4 text-yellow-500 shrink-0 mt-1.5" />
						<div className="space-y-1 min-w-0">
							<h3 className="font-medium text-gray-200">
								{award.title}
							</h3>
							<p className="text-sm text-gray-400">
								{award.description}
							</p>
						</div>
					</div>

					<div className="flex items-center justify-between gap-4 text-sm pt-2">
						<a
							href={award.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
						>
							<AwardIcon className="h-4 w-4" />
							<span>Credential</span>
						</a>
						<div className="flex items-center gap-2 text-gray-500">
							<Calendar className="h-4 w-4" />
							<span>{award.date}</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
