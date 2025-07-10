import { Button } from "./ui/button";
import { SocialConfig } from "~/util";
import { Dither } from "./ui/dithering";
import { GithubIcon } from "./ui/icons/github";
import { LinkedinIcon } from "./ui/icons/linkedin";

export const Footer: React.FC = () => (
	<footer className="relative md:px-8 py-3 md:py-6 bg-black overflow-hidden">
		<div className="absolute inset-0 z-0 opacity-40">
			<Dither
				waveColor={[0.5, 0.5, 0.5]}
				disableAnimation={false}
				enableMouseInteraction={false}
				colorNum={4}
				waveAmplitude={0.23}
				waveFrequency={3.9}
				waveSpeed={0.02}
			/>
		</div>
		
		<div className="container flex flex-row items-center justify-between gap-4 m:6-24">
			<div className="font-mono text-center text-white md:text-left z-10">
				<a
					href="https://www.m1ke.co"
					className="font-bold text-white hover:text-white/60"
				>
					<img
						className="inline"
						src="/brand.svg"
						width={25}
						height={25}
						loading="lazy"
						style={{ filter: 'brightness(5.5)' }}
					/>
				</a>{" "}
				&copy; 2016-{new Date().getFullYear()}
			</div>
			<div className="flex gap-3">
				<Button
					asChild
					variant="link"
				>
					<a
						href={SocialConfig.github}
						rel="noopener noreferrer"
						target="_blank"
						className="hover:text-purple-500 transition-all duration-500 scale-125"
					>
						<GithubIcon size={24} />
					</a>
				</Button>
				<Button
					asChild
					variant="link"
				>
					<a
						href={SocialConfig.linkedin}
						rel="noopener noreferrer"
						target="_blank"
						className="hover:text-purple-500 transition-all duration-500 scale-125"
					>
						<LinkedinIcon size={100} />
					</a>
				</Button>
			</div>
		</div>
	</footer>
);
