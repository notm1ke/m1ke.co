export type EducationEntry = {
   institution: string;
   location: string;
   image: string;
   degreeType: string;
   major: string;
   minor?: string[];
   start: string;
	end?: string;
	description?: string | JSX.Element;
}

export const Education: Array<EducationEntry> = [
	{
		institution: 'University of Connecticut',
		location: 'Storrs, CT',
		image: 'logos/uconn.jpeg',
		degreeType: 'B.S.',
		major: 'Computer Science',
		minor: ['Mathematics'],
		start: 'Aug 2020',
		end: 'May 2024',
		description: (
			<>
				<p>
               Concentration in <span className="font-semibold">Computational Data Analytics</span>,{" "}
               with a <span className="font-semibold">Mathematics</span> minor.
            </p>
			</>
		)
	}
] 