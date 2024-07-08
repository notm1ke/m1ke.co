import MdiIcon from '@mdi/react';
import * as MdiIcons from '@mdi/js';

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js';

type SocialConfigLike = {
	[key: string]: {
		icon: string;
		url: string;
	}
}

export const SocialConfig: SocialConfigLike = {
	'github': {
		icon: mdiGithub,
		url: 'https://github.com/notm1ke'
	},
	'linkedin': {
		icon: mdiLinkedin,
		url: 'https://www.linkedin.com/in/mike-medved/'
	},
	'email': {
		icon: mdiEmail,
		url: 'mailto:me@m1ke.co'
	}
}

export const MdiRepo = MdiIcons as Record<string, string>;

export { MdiIcon };

export const css = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type TimeRangeLike = {
	start: string;
	end?: string;
	current?: boolean;
}

export const timeRange = (input: TimeRangeLike) => {
   let { start, end, current } = input;
   if (current) return `Since ${start}`;
   return `${start} — ${end}`;
}