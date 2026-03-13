"use client";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { Award, AwardAuthority } from "./data";

interface AwardGroupProps {
	authority: AwardAuthority;
	awards: Award[];
}

export const AwardGroup: React.FC<AwardGroupProps> = ({
	authority,
	awards,
}) => {
	return (
		<div key={authority.name} className="sm:ml-0.5">
			<div className="sm:px-4 py-3 bg-white/[0.02] sm:border-l-2 border-purple-500/20">
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-center w-9 h-9 flex-shrink-0">
						<Image
							src={authority.image}
							alt={authority.name}
							width={64}
							height={64}
							className="rounded [filter:brightness(0.9)]"
						/>
					</div>
					
					<div className="min-w-0">
						<h3 className="font-mono font-semibold text-sm text-white">
							{authority.name}
						</h3>
						<p className="text-xs text-gray-400">
							{authority.href}
							{/*{edu.institution} · {edu.location}*/}
						</p>
					</div>
				</div>
			</div>
			<div className="space-y-px">
				{awards.map((award, idx) => (
					<div key={idx} className="sm:px-4 py-3 sm:border-l-2 border-purple-500/20 hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors">
						<div className="flex items-start justify-between gap-4 mb-2">
							<div className="min-w-0">
								<h4 className="font-mono font-semibold text-sm text-white">
									{award.title}
								</h4>
							</div>
							<span className="text-xs font-mono text-gray-500 flex-shrink-0 whitespace-nowrap">
								{award.date}
							</span>
						</div>
						<p className="text-xs text-gray-300 leading-relaxed mb-2">
							{award.description}
						</p>
						<div className="flex items-center gap-3">
							<span className="text-xs text-gray-500">
								ID: <code className="text-gray-400">{award.credential}</code>
							</span>
							<a
								href={award.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
							>
								Verify <ArrowUpRight className="size-4" />
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
