"use client";

import { Navigation } from "./nav";

export const Header: React.FC = () => (
	<header className="top-3 z-40 w-full">
		<div className="container md:mt-3 flex h-16 items-center space-x-4">
			<Navigation />
		</div>
	</header>
);
