import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon } from 'lucide-react';

export const Footer: React.FC = () => (
	<footer className="md:px-8 py-6 bg-brand-gradient">
		<div className="container flex flex-row items-center justify-between gap-4 m:6-24">
			<div className="font-mono text-center text-muted-background md:text-left">
				<a
					href="https://www.m1ke.co"
					className="font-bold text-white hover:text-white/60"
				>
					<img className="inline" src="/brand.svg" width={25} height={25} loading="lazy" />
				</a>{" "}
				&copy; 2016-{new Date().getFullYear()}
				<br />
				<span className="text-gray-300/70 text-sm">
					All rights reserved.
				</span>
				<br />
			</div>
			<div className="flex gap-4">
				<Button
					asChild
					variant="link"
				>
					<a
						href="https://github.com/notm1ke"
						rel="noopener noreferrer"
						target="_blank"
						className="hover:text-purple-300 transition-all duration-500 scale-125"
					>
						<GithubIcon size={100} />
					</a>
				</Button>
				<Button
					asChild
					variant="link"
				>
					<a
						href="https://linkedin.com/in/mike-medved"
						rel="noopener noreferrer"
						target="_blank"
						className="hover:text-purple-300 transition-all duration-500 scale-125"
					>
						<LinkedinIcon size={100} />
					</a>
				</Button>
			</div>
		</div>
	</footer>
);
