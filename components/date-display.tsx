"use client";

import moment from "moment";

import { JSX } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "~/components/ui/tooltip";
import { css } from "~/util";

interface DateDisplayProps {
	icon: JSX.Element;
	current?: boolean;
	startDate: string;
	endDate?: string;
	showFull?: boolean;
	className?: string;
}

const formatDate = (startDate: string, endDate?: string, current?: boolean, showFull?: boolean): [string, string] => {
	if (showFull && startDate && endDate) return [
		`${startDate} - ${endDate}`,
		`${startDate} - ${endDate}`
	]
	
	const start = moment(startDate);
	const startString = start.format("MMM YYYY");
	
	if (current) return [
		startString,
		`Since ${startString}`
	];

	const end = moment(endDate);
	const months =
		(end.year() - start.year()) * 12 +
		(end.month() - start.month());

	if (months < 12) {
		const displayText = `${months}mo`;
		return [displayText, `${startString} - ${end.format("MMM YYYY")}`];
	}

	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	let displayText;
	if (remainingMonths === 0) {
		displayText = `${years}yr${years === 1 ? "" : "s"}`;
	} else {
		displayText = `${years}y ${remainingMonths}mo`;
	}

	return [displayText, `${startString} - ${end.format("MMM YYYY")}`];
};

export const DateDisplay: React.FC<DateDisplayProps> = ({ current, icon, startDate, endDate, showFull, className }) => {
	const [display, tooltip] = formatDate(startDate, endDate, current, showFull);
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger className={css("cursor-help", className)}>{icon} {display}</TooltipTrigger>
				<TooltipContent side="bottom">
					<p>{tooltip}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
