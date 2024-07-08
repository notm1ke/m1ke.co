import { css, MdiIcon, SocialConfig } from "~/util";
import { ExperienceSection } from "~/components/work";
import { ProjectOrgSection } from "~/components/project";
import { EducationSection } from "~/components/education";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import {
	mdiBriefcaseVariant,
	mdiMapMarkerRadius,
	mdiMedal,
	mdiSchool,
	mdiSourceRepository,
} from "@mdi/js";
import { AwardSection } from "~/components/award";

export default function Home() {
	return (
		<>
			<div className="container relative">
				<section className="flex max-w-[1028px] flex-col mt-7 md:py-12 lg:pt-24 lg:pb-12">
					<div className="flex flex-col w-full md:flex-row">
						<div className="md:w-1/4 sm:w-full space-y-3">
							<Avatar className="w-[11.75rem] h-[11.75rem] border-2 border-purple-600 [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border-transparent animate-border">
								<AvatarImage src="/me.png" alt="Mike Medved" />
								<AvatarFallback>MM</AvatarFallback>
							</Avatar>
						</div>
						<div className="md:w-3/4 sm:w-full">
							<p className="max-w-[500px] font-mono mt-5 tracking-tighter text-xl">
								<span className="text-2xl text-purple-500 font-extrabold font-mono tracking-tighter">
									Mike Medved
								</span>
								<br />
								<div className="mt-3">
									<span className="font-semibold">
										SWE @ Walmart, CS Alumni @ UConn
									</span>
									<br />
									<span className="text-gray-200/90">
										Full Stack Software Engineer
									</span>
									<br />
									<div className="mt-3">
										<span className="text-purple-300">
											<MdiIcon
												path={mdiMapMarkerRadius}
												className="inline-block"
												size={1}
											/>{" "}
											Bay Area
										</span>
										<div className="text-purple-300 ml-3 mr-2 inline align-middle">
											&middot;
										</div>
										<div className="inline">
											{
												Object.values(SocialConfig).map(
													({ url, icon }, i, arr) => (
														<a
															key={i}
															href={url}
															target="_blank"
															rel="noopener noreferrer"
															className={css(
																"align-middle px-3 shine",
																i === 0 && "pl-1",
																i === arr.length - 1 && "pr-0",
															)}
														>
															<MdiIcon
																path={icon}
																className="inline-block text-purple-300"
																size={1}
															/>
														</a>
													),
												)
											}
										</div>
									</div>
								</div>
							</p>
						</div>
					</div>
				</section>
				<hr className="py-3" />
				<div className="flex flex-col w-full md:flex-row">
					<div className="md:w-3/4 sm:w-full">
						<section className="flex max-w-[1028px] flex-col py-8">
							<div id="experience" className="flex flex-col gap-10 w-full">
								<h2 className="text-2xl font-bold font-mono">
									<MdiIcon
										path={mdiBriefcaseVariant}
										className="inline-block"
										size="32px"
									/>{" "}
									Work Experience
								</h2>
								<ExperienceSection />
							</div >
						</section>
						<section className="flex max-w-[1028px] flex-col py-8">
							<div id="projects" className="flex flex-col gap-10 w-full">
								<h2 className="text-2xl font-bold font-mono">
									<MdiIcon
										path={mdiSourceRepository}
										className="inline-block"
										size="32px"
									/>{" "}
									Personal Projects
								</h2>
								<ProjectOrgSection org="me" />
							</div>
						</section>
						<section className="flex max-w-[1028px] flex-col py-8">
							<div id="education" className="flex flex-col gap-10 w-full">
								<h2 className="text-2xl font-bold font-mono">
									<MdiIcon
										path={mdiSchool}
										className="inline-block"
										size="32px"
									/>{" "}
									Education
								</h2>
								<EducationSection />
							</div>
						</section>
						<section className="flex max-w-[1028px] flex-col py-8">
							<div id="honors" className="flex flex-col gap-10 w-full">
								<h2 className="text-2xl font-bold font-mono">
									<MdiIcon
										path={mdiMedal}
										className="inline-block"
										size="32px"
									/>{" "}
									Honors &amp; Awards
								</h2>
								<AwardSection />
							</div>
						</section>
					</div>
				</div>
			</div>
			{/* <div className="md:w-1/4 sm:w-full space-y-3">
				<div className="hidden text-sm xl:block">
					<div className="sticky top-16 pt-4">
						<ScrollArea className="pb-10">
							<div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12 ml-3">
								<QuickNav elements={QuickNavConfig} />
							</div>
						</ScrollArea>
					</div>
				</div>
			</div> */}
		</>
	);
}
