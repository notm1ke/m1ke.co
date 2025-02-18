"use client";

import { css } from "~/util";
import { useEffect, useRef, useState } from "react";

interface AnimatedRevealAvatarProps {
	src: string;
}

export const AnimatedRevealAvatar: React.FC<AnimatedRevealAvatarProps> = ({ src }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [revealProgress, setRevealProgress] = useState(0);

	useEffect(() => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.src = src;

		img.onload = () => {
			if (canvasRef.current) {
				const canvas = canvasRef.current;
				const ctx = canvas.getContext("2d");

				canvas.width = img.width;
				canvas.height = img.height;

				if (ctx) {
					ctx.imageSmoothingEnabled = false;

					const initialPixelSize = 48;
					const animationDuration = 1500; // 1 second
					const startTime = performance.now();

					const animate = (currentTime: number) => {
						const elapsedTime = currentTime - startTime;
						const progress = Math.min(elapsedTime / animationDuration, 1);
						setRevealProgress(progress);

						// Clear canvas
						ctx.clearRect(0, 0, canvas.width, canvas.height);

						// Calculate current pixel size
						const currentPixelSize = Math.max(
							1,
							initialPixelSize * (1 - progress),
						);

						// Draw scaled down version
						ctx.drawImage(
							img,
							0,
							0,
							canvas.width,
							canvas.height,
							0,
							0,
							canvas.width / currentPixelSize,
							canvas.height / currentPixelSize,
						);

						// Scale it back up
						ctx.drawImage(
							canvas,
							0,
							0,
							canvas.width / currentPixelSize,
							canvas.height / currentPixelSize,
							0,
							0,
							canvas.width,
							canvas.height,
						);

						if (progress < 1) {
							requestAnimationFrame(animate);
						} else {
							// Ensure the final frame is the original image
							ctx.drawImage(img, 0, 0);
						}
					};

					setIsLoaded(true);
					requestAnimationFrame(animate);
				}
			}
		};
	}, []);

	return (
		<div
			className={css(
				// "w-[16.75rem] h-[16.75rem]",
				"md:w-[11.75rem] md:h-[11.75rem]",
				"relative transition-opacity",
				isLoaded ? "opacity-100" : "opacity-0",
				isLoaded && 'border-2 border-purple-600 [background:linear-gradient(45deg,#172033,--theme(--color-slate-800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),--theme(--color-slate-600/.48)_80%,--theme(--color-indigo-500)_86%,--theme(--color-indigo-300)_90%,--theme(--color-indigo-500)_94%,--theme(--color-slate-600/.48))_border-box] rounded-2xl border-transparent animate-border' 
			)}
			style={{ filter: `sepia(100%) saturate(175%) brightness(95%) hue-rotate(222deg)` }}
		>
			<canvas
				ref={canvasRef}
				className="max-w-full h-auto rounded-lg shadow-2xl"
				aria-label="Image with pixelation reveal effect"
			/>
			<div className="absolute inset-0 pointer-events-none">
				<div
					className="absolute inset-0 bg-linear-to-b from-black/20 to-transparent"
					style={{
						opacity: 1 - revealProgress,
					}}
				/>
			</div>
		</div>
	);
};
