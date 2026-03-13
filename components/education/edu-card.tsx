"use client";

import Image from "next/image";

import { EducationEntry } from "./data";

export const EducationCard: React.FC<{ edu: EducationEntry }> = ({ edu }) => (
	<div key={`${edu.institution}-${edu.degreeType}`} className="sm:border-l-2 border-purple-500/20 sm:ml-0.5">
		<div className="sm:px-4 py-3">
			<div className="flex items-start justify-between gap-4 mb-3">
				<div className="flex items-start gap-3 flex-1">
					<div className="flex items-center justify-center w-9 h-9 flex-shrink-0">
						<Image
							src={edu.image}
							alt={edu.institution}
							width={64}
							height={64}
							className="rounded [filter:brightness(0.9)]"
						/>
					</div>
					<div className="min-w-0">
						<h3 className="font-mono font-semibold text-sm text-white">
							{edu.degreeType} {edu.major}
						</h3>
						<p className="text-xs text-gray-400">
							{edu.institution} · {edu.location}
						</p>
					</div>
				</div>
				<span className="text-xs font-mono text-gray-500 flex-shrink-0 whitespace-nowrap">
					{edu.start} – {edu.end}
				</span>
			</div>
			<div className="text-xs text-gray-300 leading-relaxed">
				{edu.description}
			</div>
			{edu.minor && edu.minor.length > 0 && (
				<div className="mt-3 pt-3 border-t border-white/5">
					<p className="text-xs text-gray-500">Minor: {edu.minor.join(', ')}</p>
				</div>
			)}
		</div>
	</div>
);
