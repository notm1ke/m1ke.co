"use client";

import { css } from "~/util";
import { createPortal } from "react-dom";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

interface SectionMetadata {
	id: string;
	title: string;
	ref: React.RefObject<HTMLElement>;
}

interface SectionControlsContextType {
	registerSection: (metadata: SectionMetadata) => void;
	unregisterSection: (id: string) => void;
	openNavigation: (sectionId: string, event: React.MouseEvent) => void;
	closeNavigation: () => void;
	navigateToSection: (sectionId: string) => void;
	activeSection: string | null;
	isActive: boolean;
}

const SectionControlsContext = createContext<SectionControlsContextType | null>(null);

interface SectionControlsProviderProps {
	children: ReactNode;
}

export function SectionControlsProvider({ children }: SectionControlsProviderProps) {
	const [sections, setSections] = useState<Map<string, SectionMetadata>>(new Map());
	const [activeSection, setActiveSection] = useState<string | null>(null);
	
	const [isMobile, setIsMobile] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });
	
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	useEffect(() => {
		if (activeSection) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "unset"
		}

		return () => {
			document.body.style.overflow = "unset"
		}
	}, [activeSection])

	const registerSection = (metadata: SectionMetadata) => setSections(
		prev => new Map(prev).set(metadata.id, metadata)
	);

	const unregisterSection = (id: string) => setSections(prev => {
		const newMap = new Map(prev)
		newMap.delete(id)
		return newMap
	});

	const openNavigation = (sectionId: string, event: React.MouseEvent) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const sectionsArray = Array.from(sections.values());
		const currentSectionIndex = sectionsArray.findIndex((s) => s.id === sectionId);

		if (isMobile) {
			setOverlayPosition({ 
				top: window.innerHeight / 2 - 200,
				left: 20
			})
		} else {
			const itemHeight = 56;
			const paddingTop = 24;
			const sectionsAboveCount = currentSectionIndex;
			const separatorHeight = sectionsAboveCount > 0
				? 20
				: 0;

			const activeItemOffset = paddingTop + sectionsAboveCount * itemHeight + separatorHeight;
			let top = rect.top - activeItemOffset;
			const left = rect.left;

			const minTopOffset = 20;
			if (top < minTopOffset) top = minTopOffset;

			const overlayHeight = 400; 
			const maxTop = window.innerHeight - overlayHeight - 20;
			if (top > maxTop) top = maxTop;

			setOverlayPosition({ top, left })
		}

		setActiveSection(sectionId)
		setIsClosing(false)
	}

	const closeNavigation = () => {
		setIsClosing(true)
		setTimeout(() => {
			setActiveSection(null)
			setIsClosing(false)
		}, 400)
	}
	
	const navigateToSection = (targetSectionId: string) => {
		const targetSection = sections.get(targetSectionId)
		console.log(sections);
		if (targetSection?.ref.current) {
			console.log(targetSectionId, targetSection);
			// Use the simple scrollIntoView method that was working before
			targetSection.ref.current.scrollIntoView({
				behavior: "smooth",
				block: "start", // This will scroll to the top of the element
			})
		}
		closeNavigation()
	}

	// Render overlay
	const sectionsArray = Array.from(sections.values())
	const currentSectionIndex = sectionsArray.findIndex((s) => s.id === activeSection)
	const sectionsAbove = currentSectionIndex > 0 ? sectionsArray.slice(0, currentSectionIndex) : []
	const sectionsBelow = currentSectionIndex < sectionsArray.length - 1 ? sectionsArray.slice(currentSectionIndex + 1) : []
	const currentSection = sectionsArray.find(s => s.id === activeSection)

	const overlay = (activeSection || isClosing) && typeof window !== "undefined"
		? createPortal(
			<div className="fixed inset-0 z-50">
				<style jsx>{`
					@keyframes blurIn {
						from {
							backdrop-filter: blur(0px);
							background-color: rgba(0, 0, 0, 0);
						}
						to {
							backdrop-filter: blur(12px);
							background-color: rgba(0, 0, 0, 0.6);
						}
					}
					
					@keyframes blurOut {
						from {
							backdrop-filter: blur(12px);
							background-color: rgba(0, 0, 0, 0.6);
						}
						to {
							backdrop-filter: blur(0px);
							background-color: rgba(0, 0, 0, 0);
						}
					}
					
					@keyframes fadeIn {
						from { opacity: 0; }
						to { opacity: 1; }
					}
					
					@keyframes fadeOut {
						from { opacity: 1; }
						to { opacity: 0; }
					}
					
					.blur-animate-in {
						animation: blurIn 400ms ease-in-out forwards;
					}
					
					.blur-animate-out {
						animation: blurOut 400ms ease-in-out forwards;
					}
					
					.fade-animate-in {
						animation: fadeIn 400ms ease-in-out forwards;
					}
					
					.fade-animate-out {
						animation: fadeOut 400ms ease-in-out forwards;
					}
					`}
				</style>

				<div
					onClick={closeNavigation}
					className={css(
						"absolute inset-0",
						isClosing ? "blur-animate-out" : "blur-animate-in"
					)}
				/>

				<div
					className={css(
						"absolute max-h-[80vh] overflow-y-auto",
						isClosing ? "fade-animate-out" : "fade-animate-in",
						isMobile 
							? "inset-x-4 w-auto"
							: "min-w-80 max-w-md" 
					)}
					style={
						isMobile
							? {
									top: overlayPosition.top,
									transform: "translateY(-10px)",
								}
							: {
								top: overlayPosition.top,
								left: overlayPosition.left,
								transform: "translateY(-10px)",
							}
					}
				>
					<div className="p-6 space-y-3">
						{sectionsAbove.length > 0 && (
							<div className="space-y-2">
								{sectionsAbove.map((section) => (
									<button
										key={section.id}
										onClick={() => navigateToSection(section.id)}
										className="w-full p-3 text-left rounded-lg hover:bg-purple-500/20 transition-colors text-purple-200/60 hover:text-purple-200 font-offbit cursor-pointer"
									>
										<span className="font-medium">{section.title}</span>
									</button>
								))}
							</div>
						)}

						{currentSection && (
							<div className="p-3 bg-purple-500/30 rounded-lg">
								<span className="font-semibold text-purple-200 font-offbit cursor-not-allowed">{currentSection.title}</span>
							</div>
						)}

						{sectionsBelow.length > 0 && (
							<div className="space-y-2">
								{sectionsBelow.map((section) => (
									<button
										key={section.id}
										onClick={() => navigateToSection(section.id)}
										className="w-full p-3 text-left rounded-lg hover:bg-purple-500/20 transition-colors text-purple-200/60 hover:text-purple-200 font-offbit cursor-pointer"
									>
										<span className="font-medium">{section.title}</span>
									</button>
								))}
							</div>
						)}
					</div>
				</div>
			</div>,
			document.body,
		)
		: null

	const contextValue: SectionControlsContextType = {
		registerSection,
		unregisterSection,
		openNavigation,
		closeNavigation,
		navigateToSection,
		activeSection,
		isActive: !!activeSection,
	}

	return (
		<SectionControlsContext.Provider value={contextValue}>
			{children}
			{overlay}
		</SectionControlsContext.Provider>
	)
}

export function useSectionControls() {
	const context = useContext(SectionControlsContext);
	if (!context) {
		throw new Error(
			"useSectionControls must be used within a SectionControlsProvider",
		);
	}
	return context;
}
