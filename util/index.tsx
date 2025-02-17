import MdiIcon from "@mdi/react";
import * as MdiIcons from "@mdi/js";

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";
import { ExperiencePosition } from "~/components/work/data";

type SocialConfigLike = {
	[key: string]: {
		icon: string;
		url: string;
	};
};

export const SocialConfig: SocialConfigLike = {
	github: {
		icon: mdiGithub,
		url: "https://github.com/notm1ke",
	},
	linkedin: {
		icon: mdiLinkedin,
		url: "https://www.linkedin.com/in/mike-medved/",
	},
	email: {
		icon: mdiEmail,
		url: "mailto:me@m1ke.co",
	},
};

export const MdiRepo = MdiIcons as Record<string, string>;

export { MdiIcon };

export const css = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type TimeRangeLike = {
	start: string;
	end?: string;
	current?: boolean;
};

export const timeRange = (input: TimeRangeLike) => {
	let { start, end, current } = input;
	if (current) return start;

	const [startMonth, startYr] = start.split(" ");
	const [endMonth, endYr] = end!.split(" ");
	if (startYr === endYr) return `${startMonth} ➜ ${endMonth} ${endYr}`;

	return `${start} ➜ ${end}`;
};

export type GroupedBy<T> = {
	[key: string]: T[];
};

/**
 * Groups elements by a given key.
 *
 * @param xs the elements to group
 * @param key the key to group them by
 */
export const groupBy = <T,>(xs: T[], key: keyof T): GroupedBy<T> =>
	xs.reduce(
		(rv, x) => {
			let rvKey = x[key as keyof T] as string;
			(rv[rvKey] = rv[rvKey] || []).push(x);
			return rv;
		},
		{} as Record<string, T[]>,
	);

export function calculateDuration(
	positions: Array<ExperiencePosition>,
): string {
	const now = new Date();
	let totalMonths = 0;

	// Sort positions by start date
	positions.sort((a, b) => {
		const dateA = parseDate(a.start.split(" → ")[0]);
		const dateB = parseDate(b.start.split(" → ")[0]);
		return dateA.getTime() - dateB.getTime();
	});

	positions.forEach((position) => {
		const { start, end } = position;
		const startDate = parseDate(start);
		const endDate = end ? parseDate(end) : now;

		totalMonths += monthDiff(startDate, endDate);
	});

	return formatDuration(totalMonths);
}

function parseDate(dateString: string): Date {
	const [month, year] = dateString.split(" ");
	return new Date(parseInt(year), getMonthIndex(month));
}

function getMonthIndex(month: string): number {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	return months.indexOf(month);
}

function monthDiff(d1: Date, d2: Date): number {
	let months = (d2.getFullYear() - d1.getFullYear()) * 12;
	months -= d1.getMonth();
	months += d2.getMonth();
	return months <= 0 ? 0 : months;
}

function formatDuration(months: number): string {
	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	if (years === 0) {
		return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
	} else if (remainingMonths === 0) {
		return `${years}y`;
	} else {
		return `${years}y, ${remainingMonths}m`;
	}
}
