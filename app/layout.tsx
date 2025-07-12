import LocalFont from "next/font/local";

import { css } from "~/util";
import type { Metadata } from "next";
import { Footer } from "~/components/footer";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { Open_Sans, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "~/components/ui/theme-provider";

import "~/styles/globals.css";

const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });
const offbit = LocalFont({ src: './fonts/offbit-101-bold.ttf', variable: "--font-offbit" });
const offbitDots = LocalFont({ src: './fonts/offbit-dots-bold.ttf', variable: "--font-offbit-dots" });


export const metadata: Metadata = {
	title: {
		default: "Mike Medved",
		template: `Mike Medved - %s`,
	},
	description:
		"SWE @ Walmart. I love figuring out how things work and writing apps to help people.",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
			</head>
			<body
				className={css(
					"min-h-screen bg-pattern font-sans antialiased",
					sans.variable,
					mono.variable,
					offbit.variable,
					offbitDots.variable,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<div className="relative flex min-h-screen flex-col font-mono bg-black">
						<div className="flex-1">{children}</div>
						<Footer />
					</div>
					<OpenPanelComponent
						apiUrl="/api/op"
						cdnUrl={process.env.NEXT_PUBLIC_OPENPANEL_CDN_URL!}
						clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
						disabled={!process.env.NEXT_PUBLIC_LIVE}
						trackScreenViews
						trackOutgoingLinks
						trackAttributes
					/>
				</ThemeProvider>
			</body>
		</html>
	);
}
