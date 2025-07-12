import type { JSX } from "react";

export type Project = {
   type: 'web' | 'lib' | 'app' | 'misc';
   org?: string;
   lang?: string;
   title: string;
   archived?: boolean;
   visibility: 'public' | 'private' | 'internal';
   href?: string;
   brief: string | JSX.Element;
   description: string | JSX.Element;
}

export type ProjectOrg = {
   name: string;
   key: string;
}

export const Orgs: ProjectOrg[] = [
	{
		name: 'ILEFA Labs',
		key: 'ilefa',
	},
	{
		name: 'Personal Projects',
		key: 'me',
	},
	{
		name: 'Warp Studios',
		key: 'warp',
	},
	{
		name: 'Walmart Global Tech',
		key: 'wmt',
	},
	{
		name: 'University of Connecticut',
		key: 'uconn',
	}
]

const wmtProjects: Project[] = []; 

const ilefaProjects: Project[] = [
	{
		type: 'web',
		org: 'ilefa',
		lang: 'ts',
		title: 'Cobalt',
		visibility: 'public',
		href: 'https://cobalt.m1ke.co',
		brief: 'Cobalt is a centralized hub for all things UConn.',
		description: 'Cobalt is a centralized hub for all things UConn. It provides ease-of-access to a variety of services including searching courses, professor ratings, dining hall menus, room schedules, recreation center occupancy insights, residence hall imagery, and a whole lot more.',
		archived: true
	},
	{
		type: 'web',
		org: 'ilefa',
		lang: 'ts',
		title: 'ILEFA Website',
		visibility: 'public',
		href: 'https://ilefa.vercel.app/',
		brief: 'The official website for ILEFA Labs. It contains a list of our projects.',
		description: 'The official website for ILEFA Labs. It contains a list of our projects and is built with Next.js, serving as the main listing of our projects.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/husky',
		visibility: 'public',
		href: 'https://github.com/ilefa/husky',
		brief: 'Husky is a library for interacting with UConn resources.',
		description: 'Husky is a library for interacting with UConn resources. It allows easy access to the course catalog, service statuses, and building codes.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/passport-uconn',
		visibility: 'public',
		href: 'https://github.com/ilefa/passport-uconn',
		brief: 'Passport strategy for authenticating with UConn\'s CAS service.',
		description: 'Passport strategy for authenticating with UConn\'s CAS service.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/adtools',
		visibility: 'public',
		href: 'https://github.com/ilefa/adtools',
		brief: 'A promise-based library for interacting with Active Directory.',
		description: 'A promise-based library for interacting with Active Directory.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/blueplate',
		visibility: 'public',
		href: 'https://github.com/ilefa/blueplate',
		brief: 'Blueplate is a library for interacting with UConn Dining.',
		description: 'Blueplate is a library for interacting with UConn Dining. It allows you to retrieve UConn Dining related resources such as dining hall menus, schedules, and more.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/bluefit',
		visibility: 'public',
		href: 'https://github.com/ilefa/bluefit',
		brief: 'Bluefit is a library for extracting the realtime Rec Center occupancy.',
		description: 'Bluefit is a library for extracting the realtime Rec Center occupancy.'
	},
	{
      type: 'lib',
      org: 'ilefa',
      lang: 'ts',
      title: '@ilefa/bluepages',
      visibility: 'public',
      href: 'https://github.com/ilefa/bluepages',
      brief: 'Bluepages is a library for interacting with UConn\'s directory.',
      description: 'Bluepages is a library for interacting with UConn\'s directory. It queries the UConn Phonebook and allows you to retrieve publicly available information and faculty and staff.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/bluestudy',
		visibility: 'public',
		href: 'https://github.com/ilefa/bluestudy',
		brief: 'Bluestudy is a library for interacting with UConn\'s Library Study Rooms.',
		description: 'Bluestudy is a library for interacting with UConn\'s Library Study Rooms.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/bluetrade',
		visibility: 'public',
		href: 'https://github.com/ilefa/bluetrade',
		brief: 'Bluetrade is a library for interacting with UConn\'s Course Equivalencies.',
		description: 'Bluetrade is a library for interacting with UConn\'s Course Equivalencies. It is lightweight and makes querying other academic institutions\' equivalent courses simple.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/snapshots',
		visibility: 'public',
		href: 'https://github.com/ilefa/snapshots',
		brief: 'Snapshots is a public UConn data archival repository.',
		description: 'Snapshots is a public UConn data archival repository. It contains courses, professors, campus info, and more, over the course of several semesters. It contains both the snapshotted data and a toolkit for taking snapshots.'
	},
	{
		type: 'lib',
		org: 'ilefa',
		lang: 'ts',
		title: '@ilefa/ivy',
		visibility: 'public',
		archived: true,
      href: 'https://github.com/ilefa/ivy',
      brief: 'Ivy is a Discord.js library that makes creating complex Discord bots simple.',
      description: 'Ivy is a Discord.js library that makes creating complex Discord bots simple. It is made using TypeScript and uses a class-based approach for commands, modules, and other extensible features.',
	},
	{
		type: 'app',
		org: 'ilefa',
		lang: 'ts',
		title: 'Monolith',
		visibility: 'public',
		archived: true,
		href: 'https://github.com/ilefa/monolith',
		brief: 'Monolith is a Discord bot created for a UConn Discord server.',
		description: 'Monolith is a Discord bot created for a UConn Discord server. It is built using Discord.js and @ilefa/ivy, and can perform many tasks such as displaying UConn dining hall menus, allow course lookup, fetch status for the community Minecraft server, and more.'
	},
	{
		type: 'app',
		org: 'ilefa',
		lang: 'ts',
		title: 'Cartographer',
		visibility: 'public',
		archived: true,
		href: 'https://github.com/ilefa/cartographer',
		brief: 'Cartographer is an internal map-making tool for Cobalt Maps.',
		description: 'Cartographer is an internal map-making tool for Cobalt Maps. It allows users to place pins on the map and configure their settings for points of interest.'
	},
	{
		type: 'app',
		org: 'ilefa',
		lang: 'ts',
		title: 'rkt',
		visibility: 'public',
		archived: true,
		href: 'https://github.com/ilefa/rkt',
		brief: 'rkt is a Discord bot created providing a toolkit for tracking stocks.',
		description: 'rkt is a Discord bot created providing a toolkit for tracking stocks. It was created for a UConn discord server and later archived.'
	},
]

const uconnProjects: Project[] = [
	{
		type: 'web',
		org: 'uconn',
		lang: 'ts',
      title: 'Srvmon',
      visibility: 'internal',
      href: 'https://srvmon.its.uconn.edu',
      brief: 'Srvmon is a classroom observability suite for UConn.',
      description: 'Srvmon is a classroom observability suite for UConn. It allows users to view the status of over 400 classrooms across 5 campuses in real-time. Additionally, it provides many other features such as room schedules, occupancy insights, lab utilization metrics, digital signage management, loaner device tracking, security alerting, and more.'
	},
	{
		type: 'app',
		org: 'uconn',
		lang: 'ts',
		title: 'EMS Conversion Utility',
		visibility: 'public',
		href: 'https://github.com/notm1ke/ems-conversion-utility',
		brief: 'Built out a tool to convert EMS events to RSS feeds for UConn Digital Signage.',
		description: 'Built out a tool to convert EMS events to RSS feeds for UConn Digital Signage. This tool is used to convert EMS Cloud events to a format that can be read by UConn\'s digital signage system, which is used to display room schedules across campus signage players.'
	},
	{
		type: 'app',
		org: 'uconn',
		lang: 'ps',
		title: 'Patch Compliance Tools',
		visibility: 'internal',
		brief: 'Built out patch compliance tooling to help create automations.',
		description: 'Built out patch compliance tooling to help create automations. This tooling is used internally to detect unpatched or end-of-life machines and create alerts via Jira that are dispatched to the end-user as detected through ActiveDirectory.'
	},
	{
		type: 'app',
		org: 'uconn',
		lang: 'ts',
		title: 'Git Fragments Scanner',
		visibility: 'internal',
		brief: 'Built out a tool to scan UConn sites for dangling .git directories.',
		description: 'Built out a tool to scan UConn sites for dangling .git directories. This tool is used to detect and alert on sites that have exposed .git directories, which can lead to sensitive information disclosure.'
	},
	{
		type: 'app',
		org: 'uconn',
		lang: 'py',
		title: 'HTC Logout',
		visibility: 'internal',
		brief: 'Built out a tool to automatically log out users from classroom machines.',
		description: 'Built out a tool to automatically log out users from classroom machines. This tool is used to ensure that classroom machines are logged out after a certain period of inactivity.'
	},
	{
		type: 'app',
		org: 'uconn',
		lang: 'ts',
		title: 'SignStatus',
		visibility: 'internal',
		brief: 'Built out a tool to automatically restart stale Digital Signage.',
		description: 'Built out a tool to automatically restart stale Digital Signage. This tool is used to ensure that Digital Signage is always running and up-to-date.'
	},
	{
		type: 'app',
		org: 'uconn',
		lang: 'ts',
		title: 'vStart',
		visibility: 'internal',
		brief: 'Built out a tool to automatically start up classroom machines.',
		description: 'Built out a tool to automatically start up classroom machines. This tool is used to ensure that classroom machines are always ready for use.'
	},
	{
		type: 'app',
		org: 'uconn',
		lang: 'py',
		title: 'Bulk Computer Resolver',
		visibility: 'internal',
		brief: 'Built out a tool to resolve computer names to IP addresses in bulk.',
		description: 'Built out a tool to resolve computer names to IP addresses in bulk. This tool integrates with Infoblox to bulk resolve classroom computers in the AV DNS zone.'
	},
	{
		type: 'app',
		org: 'uconn',
		lang: 'py',
		title: 'A11y PDF Metadata',
		visibility: 'public',
		href: 'https://github.com/notm1ke/pdf-metadata',
		brief: 'Built out a tool to bulk download and extract accessibility information.',
		description: 'Built out a tool to bulk download and extract accessibility information. This tool is used to bulk audit published PDFs across various UConn domains.'
	}
]

const warpProjects: Project[] = [
	{
		type: 'web',
		org: 'warp',
		lang: 'ts',
		title: 'Warp Website',
		visibility: 'public',
		href: 'https://wrp.sh',
		brief: 'The official website for Warp Studios. It will be built out in the future.',
		description: 'The official website for Warp Studios. It will be built out in the future.'
	},
	{
		type: 'app',
		org: 'warp',
		lang: 'java',
		title: 'Bonsai',
		visibility: 'public',
		href: 'https://github.com/bywarp/Bonsai',
		brief: 'A BungeeCord plugin that supervises proxy operations for Melon Games servers.',
		description: 'A BungeeCord plugin that supervises proxy operations for Melon Games servers. More specifically it handles messages from the server deployment system and tracks where players are throughout the downstream servers.'
	},
	{
		type: 'app',
		org: 'warp',
		lang: 'java',
		title: 'Tangerine',
		visibility: 'public',
		href: 'https://github.com/bywarp/Tangerine',
		brief: 'The lobby plugin used by Melon Games.',
		description: 'The lobby plugin used by Melon Games. It provides a variety of features such as server browsing and fun interactivity.'
	},
	{
		type: 'app',
		org: 'warp',
		lang: 'java',
		title: 'MapAgent',
		visibility: 'public',
		href: 'https://github.com/bywarp/MapAgent',
		brief: 'A map parsing suite used by Melon Games.',
		description: 'A map parsing suite used by Melon Games. It has a bunch of tools to make builders\' lives easier, such as data-blocks based parsing, map validation, and other custom tooling needed for map development.'
	},
	{
		type: 'app',
		org: 'warp',
		lang: 'java',
		title: 'Ditto',
		visibility: 'public',
		href: 'https://github.com/bywarp/Ditto',
		brief: 'A tool used in Melon Docker images to help bootstrap servers.',
		description: 'A tool used in Melon Docker images to help bootstrap servers. More specifically, it helps clone down environment-specific assets, configure server preferences, and ensure managed server instances are ready for players.'
	},
	{
		type: 'lib',
		org: 'warp',
		lang: 'java',
		title: '@bywarp/lightkit4j',
		visibility: 'public',
		href: 'https://github.com/bywarp/lightkit4j',
		brief: 'A Java Library providing various utilities useful for building larger applications.',
		description: 'A Java Library providing various utilities useful for building larger applications.'
	},
	{
		type: 'lib',
		org: 'warp',
		lang: 'html',
		title: '@bywarp/melon-ghost-css',
		visibility: 'public',
		href: 'https://github.com/bywarp/melon-ghost-css',
		brief: 'A simple, clean, and responsive Ghost v3 Theme formerly used by Melon Games.',
		description: 'A simple, clean, and responsive Ghost v3 Theme formerly used by Melon Games.'
	},
	{
		type: 'lib',
		org: 'warp',
		lang: 'java',
		title: '@bywarp/stash',
		visibility: 'public',
      href: 'https://github.com/bywarp/stash',
      brief: 'A simple multi-source caching library built for Java.',
      description: 'A simple multi-source caching library built for Java.'
	}
]

const meProjects: Project[] = [
	{
		type: 'web',
		org: 'me',
		lang: 'ts',
		title: 'Portfolio',
		visibility: 'public',
		href: 'https://github.com/notm1ke/m1ke.co',
		brief: 'This website containing all of my projects, experience, and more.',
		description: 'This website! It is built with Next.js, TypeScript, Tailwind, and shadcn/ui.'
	},
	{
		type: 'web',
		org: 'me',
		lang: 'ts',
		title: 'Airside',
		visibility: 'public',
		href: 'https://airside.info',
		brief: 'A beautifully designed and performant platform for all things travel.',
		description: 'A beautifully designed and performant platform to track trips, view accurate real-time airport info, submit reviews, and visualize travel history. Built with TypeScript, Next.js, Postgres, Redis, S3, n8n.'
	},
	{
		type: 'lib',
		org: 'me',
		lang: 'ts',
		title: 'Lounges',
		visibility: 'public',
		href: 'https://github.com/notm1ke/lounges',
		brief: 'A comprehensive open source database of airport lounges in the US.',
		description: 'A comprehensive open source database of airport lounges in the US.'
	},
	{
		type: 'web',
		org: 'me',
		lang: 'ts',
		title: 'ctplates',
		visibility: 'public',
		href: 'https://ctplates.m1ke.co',
		brief: 'CTPlates is a simple web app to lookup Connecticut vanity license plates.',
		description: 'CTPlates is a simple web app to lookup Connecticut vanity license plates. It uses the Connecticut DMV\'s vanity plate API to provide real-time information.'
	},
	{
		type: 'lib',
		org: 'me',
		lang: 'ts',
		title: 'vpro',
		visibility: 'public',
		href: 'https://github.com/notm1ke/vpro',
		brief: 'vPro is a Node.js library to interact with Intel EMA instances.',
		description: 'vPro is a Node.js library to interact with Intel EMA instances. It wraps most commonly used EMA commands and provides a simple API to interact with them.'
	},
	{
		type: 'lib',
		org: 'me',
		lang: 'ts',
		title: 'fping',
		visibility: 'public',
		href: 'https://github.com/notm1ke/fping',
		brief: 'fping is a Node.js library to ping multiple hosts concurrently.',
		description: 'fping is a Node.js library to ping multiple hosts concurrently. It is built on top of the popular fping utility and provides a simple API to interact with it.'
	},
	{
		type: 'lib',
		org: 'me',
		lang: 'java',
		title: 'Matrix',
		archived: true,
		visibility: 'public',
		href: 'https://github.com/notm1ke/matrix',
		brief: 'Matrix is a Java plugin runtime library I created while learning Java.',
		description: 'Matrix is a Java plugin runtime library I created while learning Java. It provides a simple API to load, unload, and manage plugins loaded from external JAR files.'
	},
	{
		type: 'lib',
		org: 'me',
		lang: 'java',
		title: 'Basic',
		archived: true,
		visibility: 'public',
		href: 'https://github.com/notm1ke/basic',
		brief: 'Basic is a Java library I created while learning Java, containing basic utilities.',
		description: 'Basic is a Java library I created while learning Java, containing basic utilities.'
	},
	{
		type: 'app',
		org: 'me',
		lang: 'java',
		title: 'GamesBoat',
		archived: true,
		visibility: 'public',
		href: 'https://github.com/notm1ke/gamesboat',
		brief: 'GamesBoat is a Discord bot built for Discord\'s Hackweek Hackathon.',
		description: 'GamesBoat is a Discord bot built for Discord\'s Hackweek Hackathon. It uses the JDA library and allows users to play games such as Tic Tac Toe, Connect Four, and more.'
	},
	{
		type: 'app',
		org: 'me',
		lang: 'js',
		title: 'BeastBurger',
		archived: true,
		visibility: 'public',
		href: 'https://github.com/notm1ke/beastburger',
		brief: 'BeastBurger was a React project that mapped all Mr Beast Burger locations.',
		description: 'BeastBurger was a React project that mapped all Mr Beast Burger locations.'
	},
	{
		type: 'app',
		org: 'me',
		lang: 'java',
		title: 'Royale',
		archived: true,
		visibility: 'public',
		href: 'https://github.com/notm1ke/royale',
		brief: 'Royale is a React project used to query Clash Royale statistics.',
		description: 'Royale is a React project used to query Clash Royale statistics. It used an unofficial API that has since been shut down to provide real-time information about players, clans, and more.'
	}
]

export const Projects: Project[] = [
	...wmtProjects,
	...ilefaProjects,
	...uconnProjects,
	...meProjects,
	...warpProjects
]

export const PersonalProjects = meProjects;