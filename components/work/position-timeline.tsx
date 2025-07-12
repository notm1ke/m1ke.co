"use client";

import moment from "moment";

import { css } from "~/util";
import { motion } from "motion/react";
import { DateDisplay } from "../date-display";
import { Calendar, Clock } from "lucide-react";
import { LocationDisplay } from "../location-display";
import { ExperiencePosition, isIrregularEmployment } from "./data";

export const PositionTimeline: React.FC<{
	positions: Array<ExperiencePosition>
}> = ({ positions }) => {
	const hasMultiplePositions = positions.length > 1;
	const sorted = positions.sort((a, b) => {
		if (a.current && !b.current) return -1;
		if (!a.current && b.current) return 1;
		return moment(b.start).diff(moment(a.start));
	});
	
	return (
		<motion.div exit={{opacity: 0, y: -20}} layout className="mt-6 relative">
			{sorted.map((position, posIndex, arr) => (
				<motion.div
					layout
					key={posIndex}
					className={css(
						'relative pb-6 last:pb-0',
						hasMultiplePositions && 'sm:pl-10',
						hasMultiplePositions && posIndex !== 0 && "-mt-1"
					)}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
					transition={{
						delay: posIndex * 0.1,
						layout: { type: "spring", bounce: 0.2 },
					}}
				>
					{hasMultiplePositions && (
						<div className="absolute left-[14px] top-2 bottom-0 flex-col items-center hidden sm:flex">
							<motion.div layout className="w-3 h-3 rounded-full bg-purple-500/40 ring-4 ring-purple-500/20" />
							{posIndex !== positions.length - 1 && (
								<motion.div layout className="w-0.5 flex-1 bg-purple-500/20" />
							)}
						</div>
					)}
					
					<motion.div layout>
						<div className="flex flex-col gap-2">
							<div className="block sm:flex items-start gap-4">
								<div className="flex-1">
									<h4 className="font-medium mb-2">
										{position.title}
										{isIrregularEmployment(position) && (
											<span className="text-gray-400 text-sm ml-2">
												({position.type})
											</span>
										)}
									</h4>
									<p className="text-sm text-gray-400">
										{position.description}
									</p>
								</div>
								<div className="flex flex-row sm:flex-col sm:items-end gap-6 sm:gap-1 mt-3 sm:mt-0 text-sm text-gray-500 shrink-0">
									<LocationDisplay location={position.location} />
									<div className="flex items-center gap-2">
										<DateDisplay
											icon={
												position.end
													? <Clock className="h-4 w-4 inline" />
													: <Calendar className="h-4 w-4 inline" />
											}
											current={position.current}
											startDate={position.start}
											endDate={position.end}
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			))}
		</motion.div>
	);
};
