// Icons by TheRedXD, licensed under Lucide and ISC licenses - https://github.com/TheRedXD/zed-icons-colored-theme

import { CommonLang } from "./data";
import { LangHtmlIcon } from "./langs/html"
import { LangJavaIcon } from "./langs/java";
import { LangPythonIcon } from "./langs/python";
import { LangJavaScriptIcon } from "./langs/javascript";
import { LangTypeScriptIcon } from "./langs/typescript";
import { LangShellIcon } from "./langs/script";
import { LangJsonIcon } from "./langs/json";

export const getLangIcon = (lang?: CommonLang) => {
	switch (lang) {
		case "html": return LangHtmlIcon;
		case "java": return LangJavaIcon;
		case "js": return LangJavaScriptIcon;
		case "py": return LangPythonIcon;
		case "ts": return LangTypeScriptIcon; 
		case "dataset": return LangJsonIcon;
		default: return LangShellIcon;
	}
}