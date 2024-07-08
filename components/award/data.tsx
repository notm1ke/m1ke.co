export type Award = {
   authority: string;
   title: string;
   description: string;
   credential: string;
   href: string;
   date: string;
}

export const Awards: Award[] = [
	{
		authority: 'Cyber Skyline',
		title: 'CyberSEED 2023',
		description: 'Placed 7th out of more than 200 teams in the CyberSEED 2023 CTF event.',
		credential: 'VQ67JEG7MF3K',
		href: 'https://cyberskyline.com/verify/VQ67JEG7MF3K',
		date: 'May 2023'
	},
	{
		authority: 'Cyber Skyline',
		title: 'CyberSEED 2022',
		description: 'Placed 10th out of more than 200 teams in the CyberSEED 2022 CTF event.',
		credential: 'RBBF96HH2002',
		href: 'https://cyberskyline.com/verify/RBBF96HH2002',
		date: 'Mar 2022'
	}
]