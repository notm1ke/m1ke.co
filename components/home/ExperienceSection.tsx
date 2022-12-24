import styles from '../styling/home.module.css';

import { useState } from 'react';

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

type PositionType = 'Full Time' | 'Part Time' | 'Contract';

const EXPERIENCE: ExperienceEntry[] = [
    {
        company: 'University of Connecticut',
        color: 'primary',
        image: '/images/uconn.jpg',
        positions: [
            {
                title: 'Lead Student Systems Administrator',
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
        image: 'data:image/png;base64,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',
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

    return (
        <div className="mt-2">
            <div className="row">
                <div className="col-md-1">
                    <div className="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {EXPERIENCE.map((entry, index) => (
                            <a className={`nav-link ${index === selected ? `active ${styles.experienceCompanyTabActive}` : 'shine'} mb-2 ${styles.experienceCompanyTab}`} id={`v-pills-${index}-tab`} data-toggle="pill" href={`#v-pills-${index}`} role="tab" aria-controls={`v-pills-${index}`} aria-selected="true" onClick={() => setSelected(index)}>
                                <img src={entry.image} width={60} height={60} />
                            </a>
                        ))}
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
                                                    <span className="font-weight-300 ml-1 item-date">
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