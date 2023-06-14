import styles from '../styling/home.module.css';

import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

type ExperienceEntry = {
   company: string;
   color?: string;
   image: string;
   positions: Position[];
}

type Position = {
   title: string;
   type: PositionType;
   description?: string | JSX.Element;
   from: string;
   to?: string;
   current?: boolean;
}

type PositionType = 'Full Time' | 'Part Time' | 'Contract' | 'Internship';

const EXPERIENCE: ExperienceEntry[] = [
   {
      company: 'Walmart Global Tech',
      color: 'primary',
      image: '/images/wgt.jpeg',
      positions: [
         {
            title: 'Software Engineer II Intern',
            type: 'Internship',
            description: 'Full Stack SWE Intern working on the Walmart Health Virtual Care team.',
            from: 'May 2023',
            to: 'August 2023'
         }
      ]
   },
   {
      company: 'University of Connecticut',
      color: 'primary',
      image: '/images/uconn.jpg',
      positions: [
         {
            title: 'Systems Administrator',
            type: 'Part Time',
            description: 'Created and maintained critical university infrastructure using JavaScript, SQL, C#. Implemented integrations with VMware vSphere, Zabbix, and Splunk for monitoring applications. Collaborated on a large scale with other university departments to deliver breaking changes effectively, as well as drafted documentation and onboarding materials for other IT staff and students.',
            from: 'January 2022',
            current: true
         },
         {
            title: 'Advanced Device Support Technician',
            type: 'Part Time',
            description: 'Assisted students, faculty, and staff both in person and over the Jira ticketing system. Monitored and ensured accountability for operating system patching and loaner devices. Trained, mentored, and created onboarding documentation for newly-hired technicians.',
            from: 'August 2021',
            to: 'January 2022'
         }
      ]
   },
   {
      company: 'EyesUp, Inc.',
      color: 'primary',
      image: '/images/rosc.png',
      positions: [
         {
            title: 'Full Stack Software Engineer',
            type: 'Contract',
            description: 'Oversaw development team operations and infrastructure planning, as well as used TypeScript and Firebase, to create a scalable cloud backend to ingest mobile application data. Assisted with the creation of a responsive mobile application using React Native. Communicated with Epic to implement secure integration with patient charting services.',
            from: 'December 2020',
            to: 'August 2021'
         }
      ]
   }
];

export const ExperienceSection: React.FC = () => {
   const [selected, setSelected] = useState(0);
   const [desktop, setDesktop] = useState(true);

   useEffect(() => {
      if (isMobile) setDesktop(false);
   }, []);

   return (
      <div className="mt-2">
         <div className="row">
            <div className="col-md-1">
               <div className={`nav ${desktop ? 'flex-column' : 'flex-row'}`} id="v-pills-tab" role="tablist" aria-orientation={desktop ? 'vertical' : 'horizontal'}>
                  {
                     EXPERIENCE.map((entry, index) => (
                        <a className={`nav-link cursor ${index === selected ? `active ${styles.experienceCompanyTabActive}` : 'shine'} mb-2 ${styles.experienceCompanyTab}`} id={`v-pills-${index}-tab`} data-toggle="pill" role="tab" aria-controls={`v-pills-${index}`} aria-selected="true" onClick={() => setSelected(index)}>
                           <img src={entry.image} width={60} height={60} />
                        </a>
                     ))
                  }
               </div>
            </div>
            <div className="col-md-11">
               <div className="card card-stats mb-4 mb-xl-0">
                  <h4 className={`card-title ${styles.experienceCompanyName} text-${EXPERIENCE[selected].color ?? 'muted'} text-uppercase mb-0 ml-4 mt-4 font-weight-bold`}>
                     {EXPERIENCE[selected].company}
                  </h4>
                  <div className="card-body">
                     <div className="item-list">
                        {
                           EXPERIENCE[selected].positions.map((position, index) => (
                              <div className="item" key={index}>
                                 <div className="item-label mb-3">
                                    <div className="mb-2">
                                       {position.title}
                                       {!desktop && <br />}
                                       <span className={`font-weight-300 ${desktop ? 'ml-1' : ''} item-date`}>
                                          ({position.type}, {position.from} - {position.current ? 'Now' : position.to})
                                                    </span>
                                    </div>

                                    <div className="item-description">
                                       {position.description ?? 'No description was included for this position.'}
                                    </div>
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
