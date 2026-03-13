"use client";

import { Globe, MapPin } from "lucide-react";

interface LocationDisplayProps {
	location: string;
	className?: string;
}

export function LocationDisplay({ location, className }: LocationDisplayProps) {
	const isRemote = location.toLowerCase() === "remote";

	return (
		<div className={`flex items-center gap-1 text-blue-300/80 ${className}`}>
			{isRemote ? (
				<Globe className="h-4 w-4" />
			) : (
				<MapPin className="h-4 w-4" />
			)}
			<span>{location}</span>
		</div>
	);
}
