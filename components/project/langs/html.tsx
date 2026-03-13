import { css } from "~/util";

export const LangHtmlIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={css(className)}
	>
		<path
			d="M9.15741 4.17108L6.84277 11.8289"
			stroke="#dd7d51"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
		<path
			d="M4.74951 6L2.74951 8L4.74951 10"
			stroke="#dd7d51"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M11.25 10L13.25 8L11.25 6"
			stroke="#dd7d51"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
