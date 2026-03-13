import { Project } from "./data";
import { capitalizeFirst } from "~/util";
import { getLangIcon } from "./lang-icon";
import { Disclosure, DisclosureContent, DisclosureTrigger } from "../ui/disclosure";

interface PersonalProjectCardProps {
	project: Project;
	i: number;
}

export const ProjectRow: React.FC<PersonalProjectCardProps> = ({ project, i }) => {
	const Icon = getLangIcon(project.lang);
	return (
		<Disclosure>
			<DisclosureTrigger>
				<div key={`personal-project-${i}`} className="sm:border-l-2 border-purple-500/20 hover:border-purple-500/30 transition-colors sm:ml-0.5">
					<button className="w-full text-left sm:px-4 py-3 hover:bg-purple-500/10 transition-colors group flex items-center justify-between gap-3">
						<div className="flex items-start gap-3 flex-1 min-w-0">
							<div className="text-gray-400 group-hover:text-gray-300 transition-colors flex-shrink-0 mt-0.5">
								<Icon className="size-6" />
							</div>
							<div className="min-w-0">
								<h3 className="font-mono font-semibold text-sm text-white">
									{project.title}
								</h3>
								<p className="text-xs text-gray-400">
									{project.description}
								</p>
							</div>
						</div>
					</button>
				</div>
			</DisclosureTrigger>
			<DisclosureContent>
				<div className="px-4 py-3 bg-white/[0.02] border-white/5">
					<p className="text-xs text-gray-300 leading-relaxed mb-3">
						{project.description}
					</p>
					<div className="flex items-center justify-between">
						{project.href && (
							<a
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
							>
								Visit
							</a>
						)}
						
						<div className="flex items-center gap-2">
							{project.archived && (
								<span className="inline-block px-2 py-1 bg-red-500/10 text-red-300 rounded border border-red-500/20 font-mono text-xs">
									Archived
								</span>
							)}
							{project.visibility && !project.archived && (
								<span className="font-mono text-xs text-gray-500">
									{capitalizeFirst(project.visibility)}
								</span>
							)}
						</div>
					</div>
				</div>
			</DisclosureContent>
		</Disclosure>
	)
} 