import { css } from "~/util";

export const SiteFavicon: React.FC<{ url: string, className?: string }> = ({ url, className }) => (
	<img
		src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
		className={css("size-3.5 rounded-[30%]", className)}
	/>
)
