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
	description?: string | string[] | JSX.Element;
	assets?: string[];
	start: string;
	end?: string;
	current?: boolean;
	location: string;
};

export const getProjectsByCompany = (work: ExperienceEntry) => Projects.filter(
	project => project.org === work.orgKey
);

// todo: add others if they come up
export const isIrregularEmployment = (position: ExperiencePosition) => position.type === 'Contract';

type PositionType = "Full Time" | "Part Time" | "Contract" | "Internship" | "Other";

export const WorkExperience: ExperienceEntry[] = [
	{
		company: "Twocents",
		orgKey: "2c",
		href: "https://twocents.com",
		image: "/logos/twocents.png",
		positions: [
			{
				title: "Software Engineer",
				type: "Full Time",
				description: "Stay tuned!",
				start: "2026-03-16",
				current: true,
				location: "San Francisco, CA"
			}
		],
	},
	{
		company: "Walmart Labs",
		orgKey: "wmt",
		href: "https://tech.walmart.com",
		image: "/logos/wgt.jpeg",
		positions: [
			{
				title: "Software Engineer II",
				type: "Full Time",
				description: [
					'Conducted AI-powered experiments such as livestream highlights, product asset enhancement, and smart filtering which boosted user engagement by ∼5-10% on average per experiment affecting over 1.5M users across web and mobile.',
					'Architected and developed GCP-based data pipelines (using Dataproc, Hive, Spark, Airflow) processing 50,000+ pieces of social content that power all on-site social modules (Walmart.com homepage, deals page, mobile discover tab), enhancing product discovery by over 10% and user conversion by ∼5% across platforms.',
					'Designed and implemented the backend of a standardized holiday performance dashboard for use by SVPs during the peak retail season (Thanksgiving/Black Friday), tracking $10B+ of orders and hundreds of millions of engagements; led data integration effort across 12 teams.',
					'Created and productionized several internal libraries, including an AI SDK provider for our LLM Gateway, currently adopted by 10+ teams, standardizing integrations and allowing teams to collaborate and build AI features more efficiently.',
					'Engineered a scalable, infinite-scroll reels feed on Walmart.com, serving social content through a familiar feed UX to enable surfacing products to the user and showcasing our collection of 100,000+ pieces of social content.'
				],
				start: "2024-07-08",
				end: "2026-03-17",
				location: "Sunnyvale, CA",
			},
			{
				title: "Software Engineer Intern",
				type: "Internship",
				description: [
					'Improved the patient care portal experience, increasing appointment uptake by 25% and optimized provider telehealth and caseload views, building features with Angular, TypeScript, and AWS Lambda.',
					'Streamlined the care coordinator portal, reducing provider assignment time by up to 5 seconds per patient and allowing coordinators to on average manage 25 more patients weekly.',
					'Enhanced telehealth portal reliability and performance by optimizing WebRTC flows and addressing rigidness in the scheduling flow, reducing dropped sessions by 70% and streamlining the patient experience.'
				],
				start: "2023-05-31",
				end: "2023-08-11",
				location: "Bentonville, AR",
			},
		],
	},
	{
		company: "UConn",
		orgKey: "uconn",
		href: "https://its.uconn.edu",
		image: "/logos/uconn.jpeg",
		positions: [
			{
				title: "Software Engineer",
				type: "Part Time",
				description: [
					'Developed Srvmon, a realtime observability platform for monitoring over 5,000 pieces of A/V equipment, and several thousand digital signs. Utilized by IT across 5 campuses and over 350 classrooms to prevent the need for support calls and drastically reduce the time to detection and remediation of classroom unavailability incidents by 90%.',
					'Created tooling and conducted network security audits on over 10,000+ devices on UConn networks, interfacing with Splunk, Defender ATP, and Cisco Prime to identify risks and collaborate with InfoSec on remediation efforts.',
					'Created device and software management workflows in Intune, SCCM, and JAMF, enabling consistent policy enforcement across a wide range of devices and environments, including labs, classrooms, and admin offices.'
				],
				start: "2022-01-01",
				end: "2024-05-30",
				location: "Storrs, CT",
			},
			{
				title: "Device Support Technician",
				type: "Part Time",
				description: [
					'Assisted students, faculty, and staff both in person and over the Jira ticketing system.',
					'Monitored and ensured accountability for operating system patching and loaner devices.',
					'Trained, mentored, and created onboarding documentation for newly-hired technicians.'
				],
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
				title: "Contributor",
				type: "Other",
				description: "I am one of the contributors of Warp Studios, a software development organization responsible for making small games and other assorted applications.",
				start: "2020-01-01",
				current: true,
				location: "Remote"
			},
		],
	},
	{
		company: "EyesUp",
		orgKey: "eyesup",
		image: "/logos/rosc.png",
		positions: [
			{
				title: "Software Engineer",
				type: "Contract",
				description: "Oversaw development team operations and infrastructure planning, as well as used TypeScript and Firebase, to create a scalable cloud backend to ingest mobile application data. Assisted with the creation of a responsive mobile application using React Native. Communicated with Epic to implement secure integration with patient charting services.",
				start: "2020-12-01",
				end: "2021-08-01",
				location: "New York, NY",
			},
		],
	},
];
