import type { JSX, PropsWithChildren } from "react";

export type EducationEntry = {
	institution: string;
	location: string;
	image: string;
	degreeType: string;
	major: string;
	minor?: string[];
	start: string;
	end?: string;
	description?: string | JSX.Element;
};

const Link: React.FC<PropsWithChildren<{ href: string }>> = ({ href, children }) => (
	<a className="text-purple-300 hover:text-purple-400 transition-all duration-500" href={href} target="_blank">
		{children}
	</a>
);

export const Education: Array<EducationEntry> = [
	{
		institution: "University of Connecticut",
		location: "Storrs, CT",
		image: "/logos/uconn.jpeg",
		degreeType: "B.S",
		major: "Computer Science",
		minor: ["Mathematics"],
		start: "Aug 2020",
		end: "May 2024",
		description: (
			<div className="space-y-4">
				<div>
					Concentrated in Computational Data Analytics, with relevant
					coursework containing:
					<ul className="[&>li]:ml-5 [&>li]:list-disc">
						<li>Big Data Analytics</li>
						<li>Database Systems</li>
						<li>AI / Machine Learning</li>
						<li>Network Design and Security</li>
					</ul>
				</div>
				<p>
					While in school, I collaborated with clubs and organizations such as{" "}
					<Link href="https://husky-developers.github.io/">Husky Developers</Link> and {" "}
					<Link href="https://computing.engineering.uconn.edu/about/diversity-and-inclusion/">BEACH</Link>{" "}
					to give talks about my own UConn-related projects and give guidance to students regarding various technologies and tools.
				</p>
				<p>
					Since graduating, most of my coursework has been open-sourced at the <Link href="https://github.com/UConnCS">@UConnCS</Link> organization on GitHub,
					and all of my projects have been open-sourced at the <Link href="https://github.com/ilefa">@ilefa</Link> organization.
				</p>
			</div>
		),
	},
];
