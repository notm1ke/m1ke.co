import moment from "moment";

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { ExperiencePosition } from "~/components/work/data";

type SocialConfigLike = Record<string, string>;

export const SocialConfig: SocialConfigLike = {
	github: "https://github.com/notm1ke",
	linkedin: "https://www.linkedin.com/in/mike-medved/",
	email: "mailto:me@m1ke.co",
};

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

export const calculateDuration = (positions: Array<ExperiencePosition>): string => {
	let months = positions
		.sort((a, b) => {
			const dateA = moment(a.start);
			const dateB = moment(b.start);
			return dateA.diff(dateB);
		})
		.reduce((acc, position) => {
			const { start, end } = position;
			const startDate = moment(start);
			const endDate = position.current
				? moment()
				: moment(end);
			
			return acc + endDate.diff(startDate, 'months');
		}, 0);

	return formatDuration(months);
}

export const formatDuration = (months: number): string => {
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
