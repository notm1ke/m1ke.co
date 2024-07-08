export type Award = {
   authority: string;
   title: string;
   description: string;
   credential: string;
   href: string;
   date: string;
}

export type AwardAuthority = {
   name: string;
   id: string;
   href: string;
   image: string;
}

export const AwardAuthorities: AwardAuthority[] = [
	{
		name: 'Cyber Skyline',
		id: 'cyber-skyline',
		href: 'https://cyberskyline.com',
		image: '/logos/cyberskyline.png'
	}
]

export const Awards: Award[] = [
	{
		authority: 'cyber-skyline',
		title: 'CyberSEED 2023',
		description: 'Placed 7th out of more than 200 teams in the CyberSEED 2023 CTF event.',
		credential: 'VQ67JEG7MF3K',
		href: 'https://cyberskyline.com/verify/VQ67JEG7MF3K',
		date: 'May 2023'
	},
	{
		authority: 'cyber-skyline',
		title: 'CyberSEED 2022',
		description: 'Placed 10th out of more than 200 teams in the CyberSEED 2022 CTF event.',
		credential: 'RBBF96HH2002',
		href: 'https://cyberskyline.com/verify/RBBF96HH2002',
		date: 'Mar 2022'
	}
]