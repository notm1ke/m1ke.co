"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { DateDisplay } from "~/components/date-display";
import { ProjectCard } from "~/components/project-card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Card, CardContent } from "~/components/ui/card";
import { useSectionObserver } from "~/hooks/use-section-observer";

import {
	Github,
	Linkedin,
	Mail,
	MapPin,
	Calendar,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { WorkSection } from "~/components/work";

export default function Home() {
	const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
	const activeSection = useSectionObserver();

	// const visibleProjects = isProjectsExpanded
	// 	? [...meProjects, ...projects]
	// 	: [...meProjects, ...projects].slice(0, 9);

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="mx-auto max-w-6xl px-4 py-8">
				<div className="grid gap-8 md:grid-cols-[1fr_250px]">
					<div className="space-y-12">
						<div className="flex items-center gap-8 mt-12">
							<Image
								src="https://www.m1ke.co/me.png"
								alt="Profile"
								width={180}
								height={180}
								className="rounded-lg border border-purple-500/20"
							/>
							<div className="flex flex-col justify-center h-[180px]">
								<span className="text-2xl text-purple-500 font-extrabold font-mono tracking-tighter">
									Mike Medved
								</span>
								<div className="mt-3">
									<span className="text-lg text-gray-200">
										SWE @ Walmart, CS Alumni @ UConn
									</span>
									<br />
									<span className="text-lg text-gray-400">
										Full Stack Software Engineer
									</span>
									<div className="flex items-center gap-4 mt-4">
										<div className="flex items-center gap-1 text-md text-purple-400">
											<MapPin className="h-6 w-6 mr-1" />
											Bay Area
										</div>
										<Separator
											orientation="vertical"
											className="h-6 bg-purple-500/20"
										/>
										<div className="flex items-center gap-4">
											<a
												href="https://github.com/notm1ke"
												className="text-purple-400 hover:text-purple-300"
											>
												<Github className="h-6 w-6" />
											</a>
											<a
												href="https://linkedin.com/in/mike-medved"
												className="text-purple-400 hover:text-purple-300"
											>
												<Linkedin className="h-6 w-6" />
											</a>
											<a
												href="mailto:me@m1ke.co"
												className="text-purple-400 hover:text-purple-300"
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
						{/* <section id="projects">
							<StickySectionHeader title="Personal Projects" />
							<div className="grid gap-6 md:grid-cols-2">
								{visibleProjects.slice(0, 9).map((project) => (
									<ProjectCard key={project.title} project={project} />
								))}
							</div>
							{visibleProjects.length > 9 && (
								<Button
									variant="ghost"
									className="w-full mt-4 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
									onClick={() =>
										setIsProjectsExpanded(!isProjectsExpanded)
									}
								>
									{isProjectsExpanded ? (
										<>
											<ChevronUp className="h-4 w-4 mr-2" /> Show
											Less
										</>
									) : (
										<>
											<ChevronDown className="h-4 w-4 mr-2" /> Show
											More
										</>
									)}
								</Button>
							)}
						</section> */}

						{/* Education */}
						{/* <section id="education">
							<StickySectionHeader title="Education" />
							<Card className="border-purple-500/20 bg-gray-900/50">
								<CardContent className="p-6">
									<Badge className="inline-flex items-center gap-2 px-3 py-1 text-base bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
										<Image
											src="https://www.m1ke.co/logos/uconn.jpeg"
											alt="UConn"
											width={24}
											height={24}
											className="rounded-lg [filter:hue-rotate(-10deg)_saturate(70%)_brightness(0.9)]"
										/>
										<span className="font-medium text-purple-400">
											University of Connecticut
										</span>
									</Badge>
									<div className="mt-4">
										<p className="text-gray-400">
											Computer Science, B.S.
										</p>
										<div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
											<MapPin className="h-4 w-4" />
											Storrs, CT
											<Calendar className="h-4 w-4 ml-2" />
											<DateDisplay date="Aug 2020 → May 2024" />
										</div>
									</div>
								</CardContent>
							</Card>
						</section> */}

						{/* Honors & Awards */}
						{/* <section id="honors">
							<StickySectionHeader title="Honors & Awards" />
							<Card className="border-purple-500/20 bg-gray-900/50">
								<CardContent className="p-6">
									<div className="space-y-4">
										<div>
											<h3 className="font-medium">FIRST Skyline</h3>
											<p className="text-sm text-gray-400">
												FRC#2265 2023 → 2024
											</p>
										</div>
										<div>
											<h3 className="font-medium">FIRST Skyline</h3>
											<p className="text-sm text-gray-400">
												FRC#2265 2022 → 2023
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</section> */}
					</div>

					{/* Sidebar */}
					<div className="sticky top-8 h-screen pt-12">
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
											className={`block text-sm ${
												activeSection === section
													? "text-purple-400"
													: "text-gray-400 hover:text-purple-400"
											}`}
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
