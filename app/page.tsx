"use client";

import Image from "next/image";

import { css, SocialConfig } from "~/util";
import { Banner } from "~/components/ui/banner";
import { WorkSection } from "~/components/work";
import { AwardSection } from "~/components/award";
import { Separator } from "~/components/ui/separator";
import { ProjectSection } from "~/components/project";
import { ScrollArea } from "~/components/ui/scroll-area";
import { EducationSection } from "~/components/education";
import { Github, Linkedin, Mail, MapPinned } from "lucide-react";
import { useSectionObserver } from "~/hooks/use-section-observer";

export default function Home() {
	const activeSection = useSectionObserver();

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="relative w-full backdrop-blur-md backdrop-filter blur-md">
				<Banner
		        height="6rem"
		        variant="rainbow"
		      />
			</div>
			<div className="mx-auto max-w-6xl px-4 -mt-6 sm:mt-0 sm:pt-1 pb-8">
				<div className="grid gap-8 md:grid-cols-[1fr_250px]">
					<div className="space-y-12">
						<div className="flex items-center gap-8 mt-2 sm:mt-12">
							<Image
								src="https://www.m1ke.co/me.png"
								alt="Mike Medved"
								width={180}
								height={180}
								className="rounded-lg border-3 mt-2 border-purple-500/60 hidden sm:inline"
								style={{ filter: `sepia(100%) saturate(175%) brightness(95%) hue-rotate(222deg)` }}
							/>
							<div className="flex flex-col justify-center h-[120px] mt-8 sm:mt-0 sm:h-[180px]">
								<span className="text-2xl text-purple-500 font-extrabold font-mono tracking-tighter">
									Mike Medved
								</span>
								<div className="mt-3">
									<span className="text-md sm:text-lg font-semibold text-gray-200">
										SWE @ Walmart, CS Alumni @ UConn
									</span>
									<br />
									<span className="text-md sm:text-lg text-gray-400">
										Full Stack Software Engineer
									</span>
									<div className="flex items-center gap-4 mt-4">
										<div className="flex items-center gap-1 text-md text-purple-300">
											<MapPinned className="h-6 w-6 mr-1" />
											Bay Area
										</div>
										<Separator
											orientation="vertical"
											className="h-6 bg-purple-500/40"
										/>
										<div className="flex items-center gap-4">
											<a
												href={SocialConfig.github}
												data-track="header:github"
												className="text-purple-300 hover:text-purple-100 transition-all duration-250"
											>
												<Github className="h-6 w-6" />
											</a>
											<a
												href={SocialConfig.linkedin}
												data-track="header:linkedin"
												className="text-purple-300 hover:text-purple-100 transition-all duration-250"
											>
												<Linkedin className="h-6 w-6" />
											</a>
											<a
												href={SocialConfig.email}
												data-track="header:email"
												className="text-purple-300 hover:text-purple-100 transition-all duration-250"
											>
												<Mail className="h-6 w-6" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						{/* Work Experience */}
						<WorkSection />
						
						{/* Personal Projects */}
						<ProjectSection />

						{/* Education */}
						<EducationSection />

						{/* Honors & Awards */}
						<AwardSection />	
					</div>

					{/* Sidebar */}
					<div className="sticky top-8 h-screen pt-12 hidden sm:inline">
						<ScrollArea className="h-[calc(100vh-6rem)]">
							<nav className="space-y-2">
								<h3 className="mb-4 text-lg font-bold text-purple-400">
									On This Page
								</h3>
								{["work", "projects", "education", "honors"].map(
									(section) => (
										<a
											key={section}
											href={`#${section}`}
											className={css(
												`block text-sm transition-all duration-250`,
													activeSection === section && "text-purple-400",
													activeSection !== section && "text-gray-400 hover:text-purple-400"
											)}
										>
											{section.charAt(0).toUpperCase() +
												section.slice(1)}
										</a>
									),
								)}
							</nav>
						</ScrollArea>
					</div>
				</div>
			</div>
		</div>
	);
}
