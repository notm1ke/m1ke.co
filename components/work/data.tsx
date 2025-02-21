import { JSX } from "react";
import { Projects } from "../project/data";

export type ExperienceEntry = {
	company: string;
	orgKey?: string;
	href?: string;
	image: string;
	positions: ExperiencePosition[];
};

export type ExperiencePosition = {
	title: string;
	type: PositionType;
	description?: string | JSX.Element;
	assets?: string[];
	start: string;
	end?: string;
	current?: boolean;
	location: string;
};

export const getProjectsByCompany = (work: ExperienceEntry) => Projects.filter(
	project => project.org === work.orgKey
);

export const isIrregularEmployment = (position: ExperiencePosition) => 
	position.type !== 'Full Time'
	&& position.type !== 'Part Time'
	&& position.type !== 'Internship';

type PositionType = "Full Time" | "Part Time" | "Contract" | "Internship" | "Other";

export const WorkExperience: ExperienceEntry[] = [
	{
		company: "Walmart Global Tech",
		orgKey: "wmt",
		href: "https://tech.walmart.com",
		image: "/logos/wgt.jpeg",
		positions: [
			{
				title: "Software Engineer II",
				type: "Full Time",
				description: "Full Stack Engineer working on Social Commerce to create realtime customer-facing experiences on Walmart.com",
				start: "2024-07-08",
				current: true,
				location: "Sunnyvale, CA",
			},
			{
				title: "Software Engineer Intern",
				type: "Internship",
				description: "Full Stack Engineering Intern working on the Walmart Health Virtual Care team (formerly MeMD) to support and enhance the Virtual Care Telehealth platform. During my time on the team, I developed new user-facing features, helped develop internal tools, and assisted with migrating core infrastructure on AWS.",
				start: "2023-05-31",
				end: "2023-08-11",
				location: "Bentonville, AR",
			},
		],
	},
	{
		company: "University of Connecticut",
		orgKey: "uconn",
		href: "https://its.uconn.edu",
		image: "/logos/uconn.jpeg",
		positions: [
			{
				title: "Software Engineer",
				type: "Part Time",
				description: "Created academic facilities observability infrastructure using TypeScript, Redis, and Next.js. Implemented integrations with VMware vSphere, Zabbix, and Splunk for monitoring applications. Collaborated on a large scale with other university departments to deliver breaking changes effectively, as well as drafted documentation and onboarding materials for other IT staff and students.",
				start: "2022-01-01",
				end: "2024-05-30",
				location: "Storrs, CT",
			},
			{
				title: "Advanced Device Support Technician",
				type: "Part Time",
				description: "Assisted students, faculty, and staff both in person and over the Jira ticketing system. Monitored and ensured accountability for operating system patching and loaner devices. Trained, mentored, and created onboarding documentation for newly-hired technicians.",
				start: "2021-08-31",
				end: "2022-01-01",
				location: "Storrs, CT",
			},
		],
	},
	{
		company: "ILEFA Labs",
		orgKey: "ilefa",
		href: "https://ilefa.club",
		image: "/logos/ilefa.png",
		positions: [
			{
				title: "Founder",
				type: "Other",
				description: "I am a founder and full-stack software engineer at ILEFA Labs. I work on websites, open-source libraries, and other projects at the organization.",
				start: "2020-12-01",
				end: "2024-05-30",
				location: "Storrs, CT",
			},
		],
	},
	{
		company: "Warp Studios",
		orgKey: "warp",
		href: "https://wrp.sh",
		image: "/logos/warp.png",
		positions: [
			{
				title: "Co-Founder",
				type: "Other",
				description: "I am one of the founders of Warp Studios, a software development organization responsible for making small games and applications.",
				start: "2020-01-01",
				current: true,
				location: "Remote"
			},
		],
	},
	{
		company: "EyesUp, Inc.",
		orgKey: "eyesup",
		image: "/logos/rosc.png",
		positions: [
			{
				title: "Full Stack Software Engineer",
				type: "Contract",
				description: "Oversaw development team operations and infrastructure planning, as well as used TypeScript and Firebase, to create a scalable cloud backend to ingest mobile application data. Assisted with the creation of a responsive mobile application using React Native. Communicated with Epic to implement secure integration with patient charting services.",
				start: "2020-12-01",
				end: "2021-08-01",
				location: "New York, NY",
			},
		],
	},
];
