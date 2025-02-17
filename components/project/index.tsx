import { MdiIcon } from "~/util";
import { Circle } from 'lucide-react';
import { Project, Projects } from "./data";
import { ResponsiveModal } from "../ui/responsive-modal";

import {
   mdiArchiveOutline,
   mdiCodeTags,
   mdiConsole,
   mdiDomain,
   mdiEye,
   mdiGithub,
   mdiLink,
   mdiLock,
   mdiPackageVariantClosed,
   mdiWeb,
} from "@mdi/js";

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "../ui/card";

export const ProjectOrgSection: React.FC<{ org: string }> = ({ org }) => {
	let projects = Projects.filter((p) => p.org === org);
	if (!projects) return null;

	return (
		<div className="mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
			{
				projects.map((project) => (
					<ResponsiveModal
						key={project.title}
						title={
							<span className="font-mono font-semibold">
								{project.title}{" "}
								{
									project.href && (
		                        <a
											href={project.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-400"
										>
											<MdiIcon path={mdiLink} size="20px" className="inline" />
										</a>
									)
								}
							</span>
						}
						description={project.description}
						trigger={<ProjectCard key={project.title} project={project} />}
					>
						<div className="space-x-4 text-sm text-muted-foreground hidden md:flex">
							<div className="flex items-center">
								{langIndicator(project)}
							</div>
							<div className="flex items-center">
								{visibilityIndicator(project)}
							</div>
							{repoIndicator(project)}
							{archivalIndicator(project)}
						</div>
					</ResponsiveModal>
				))
			}
		</div>
	);
};

const projectIcon = ({ type }: Project) => {
	if (type === "app") return mdiConsole;
	if (type === "lib") return mdiPackageVariantClosed;
	if (type === "web") return mdiWeb;
	return mdiCodeTags;
}

const langIndicator = ({ lang }: Project) => {
	if (lang === 'ts') return (
		<>
			<Circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" /> TypeScript
		</>
	)
	
	if (lang === 'js') return (
		<>
			<Circle className="mr-1 h-3 w-3 fill-yellow-300 text-yellow-300" /> JavaScript
		</>
	)
	
	if (lang === 'py') return (
		<>
			<Circle className="mr-1 h-3 w-3 fill-teal-400 text-teal-400" /> Python
		</>
	)
	
	if (lang === 'java') return (
		<>
			<Circle className="mr-1 h-3 w-3 fill-orange-400 text-orange-400" /> Java
		</>
	)
	
	if (lang === 'html') return (
		<>
			<Circle className="mr-1 h-3 w-3 fill-red-400 text-red-400" /> HTML
		</>
	)
	
	if (lang === 'ps') return (
		<>
			<Circle className="mr-1 h-3 w-3 fill-blue-400 text-blue-400" /> PowerShell
		</>
	)
}

const visibilityIndicator = ({ visibility }: Project) => {
	if (visibility === 'public') return (
		<>
			<MdiIcon path={mdiEye} className="inline text-green-500 mr-1" size="17px" /> Public
		</>
	)
	
	if (visibility === 'private') return (
		<>
			<MdiIcon path={mdiLock} className="inline text-red-400 mr-1" size="17px" /> Private
		</>
	)
	
	if (visibility === 'internal') return (
		<>
			<MdiIcon path={mdiDomain} className="inline text-blue-400 mr-1" size="17px" /> Internal
		</>
	)
}

const repoIndicator = ({ href }: Project) => {
   if (!href) return null;
   if (!href.includes('github.com')) return null;
   
   return (
      <div className="flex items-center">
         <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
         >
            <MdiIcon path={mdiGithub} className="mr-1" size="17px" />
            <span>GitHub</span>
         </a>
      </div>
   );
}

const archivalIndicator = ({ archived }: Project) => {
   if (!archived) return null;
   
   return (
	   <div className="flex items-center">
		   <MdiIcon path={mdiArchiveOutline} className="inline text-orange-400 mr-1" size="17px" /> Archived 
		</div>
   )
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
	<Card className="hover:border-gray-500 hover:bg-zinc-900 ease-in-out transition-all duration-300 cursor-pointer">
		<CardHeader className="gap-4 space-y-0">
			<div className="space-y-1">
				<CardTitle>
					<MdiIcon
						path={projectIcon(project)}
						className="mr-1 inline"
						size={1}
					/>{" "}
					{project.title}
				</CardTitle>
				<CardDescription>{project.brief}</CardDescription>
			</div>
		</CardHeader>
		<CardContent>
			<div className="flex space-x-4 text-sm text-muted-foreground">
				<div className="flex items-center">
					{langIndicator(project)}
				</div>
				<div className="flex items-center">
					{visibilityIndicator(project)}
				</div>
				{archivalIndicator(project)}
			</div>
		</CardContent>
	</Card>
);