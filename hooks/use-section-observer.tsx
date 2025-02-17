"use client";

import { useEffect, useState } from "react";

export function useSectionObserver() {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					} else {
						// Find the previous visible section when scrolling up
						const sections = Array.from(
							document.querySelectorAll("section[id]"),
						);
						const currentIndex = sections.findIndex(
							(section) => section.id === entry.target.id,
						);

						if (currentIndex > 0) {
							const previousSection = sections[currentIndex - 1];
							const rect = previousSection.getBoundingClientRect();
							if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
								setActiveSection(previousSection.id);
							}
						}
					}
				});
			},
			{
				rootMargin: "-20% 0px -80% 0px",
				threshold: [0, 1],
			},
		);

		const sections = document.querySelectorAll("section[id]");
		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return activeSection;
}
