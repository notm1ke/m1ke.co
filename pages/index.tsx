import MdiIcon from '@mdi/react';
import styles from '../components/styling/home.module.css';

import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import {
    ExperienceSection,
    FeaturedWorkCard,
    Footer,
    Nav,
    WorkCard,
    WorkCardProps
} from '../components';

import {
    mdiAccountMultiple,
    mdiBadgeAccountHorizontal,
    mdiCalendar,
    mdiChartTimelineVariant,
    mdiChessRook,
    mdiDogSide,
    mdiFeather,
    mdiFileImport,
    mdiFruitWatermelon,
    mdiGamepadSquare,
    mdiGhost,
    mdiHamburger,
    mdiHammerScrewdriver,
    mdiLeaf,
    mdiLightbulbOn,
    mdiLogin,
    mdiPail,
    mdiPokeball,
    mdiRemoteDesktop,
    mdiRss,
    mdiSchool,
    mdiTableClock,
    mdiVectorUnion
} from '@mdi/js';

type EnumerableProject = WorkCardProps & {
    key: string;
}

const PROJECTS: EnumerableProject[] = [
    {
        key: 'ilefa',
        title: 'ILEFA Labs',
        description: 'ILEFA is a development group dedicated to creating software to help students succeed.',
        containerStyle: styles.rowCardTopSpacing,
        icon: <MdiIcon path={mdiDogSide} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://www.ilefa.club',
        hideExtraLink: true
    },
    {
        key: 'snapshots',
        title: 'Snapshots',
        description: 'A public-domain data warehouse for historical UConn information.',
        containerStyle: styles.rowCardTopSpacingSecondary,
        icon: <MdiIcon path={mdiTableClock} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://snapshots.ilefa.club',
        hideExtraLink: true
    },
    {
        key: 'husky',
        title: 'Husky',
        description: 'A useful collection of utilities pertaining to various UConn services.',
        containerStyle: 'mr--1 mt-2',
        icon: <MdiIcon path={mdiSchool} size="21px" className={`${styles.workCardIcon} fa-fw mr-2`} />,
        link: 'https://github.com/ilefa/husky',
    },
    {
        key: 'ivy',
        title: 'Ivy',
        description: 'A versatile Discord.js-based TypeScript framework for building Discord bots.',
        containerStyle: 'ml--3 mr--1 mt-2',
        icon: <MdiIcon path={mdiLeaf} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/ilefa/ivy',
    },
    {
        key: 'adtools',
        title: 'adtools',
        description: 'A promise safe on-premises ActiveDirectory TypeScript toolkit for domain applications.',
        containerStyle: 'ml--3 mr--1 mt-2',
        icon: <MdiIcon path={mdiBadgeAccountHorizontal} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/ilefa/adtools'
    },
    {
        key: 'passport-uconn',
        title: 'UConn SSO Strategy',
        description: 'A Passport.js authentication strategy allowing integrations with UConn SSO.',
        containerStyle: 'mr--1 mt-2',
        icon: <MdiIcon path={mdiLogin} size="21px" className={`${styles.workCardIcon} fa-fw mr-2`} />,
        link: 'https://github.com/ilefa/passport-uconn',
    },
    {
        key: 'warp',
        title: 'Warp Studios',
        description: 'Warp is an organization focused on creating innovative software.',
        containerStyle: styles.rowCardTopSpacingSecond,
        icon: <MdiIcon path={mdiFeather} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://bywarp.co'
    },
    {
        key: 'lightkit4j',
        title: 'Lightkit',
        description: 'An advanced library and toolkit for Java.',
        containerStyle: 'ml--3 mr--1 mt-5',
        icon: <MdiIcon path={mdiLightbulbOn} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/bywarp/lightkit4j',
    },
    {
        key: 'melon-ghost-theme',
        title: 'Melon Ghost Theme',
        description: 'A simple, clean, and responsive Ghost v3 Theme.',
        containerStyle: 'ml--3 mr--1 mt-5',
        icon: <MdiIcon path={mdiFruitWatermelon} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/bywarp/melon-ghost-theme',
    },
    {
        key: 'stash',
        title: 'Stash',
        description: 'A simple multi-source caching library built for Java.',
        containerStyle: 'mr--1 mt-2',
        icon: <MdiIcon path={mdiPail} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/bywarp/stash',
    },
    {
        key: 'me',
        title: 'Mike Medved (me)',
        description: 'As by no doubt you\'ve noticed, this is my personal website.',
        containerStyle: styles.rowCardTopSpacingSecond,
        icon: <MdiIcon path={mdiGhost} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://m1ke.co',
    },
    {
        key: 'srvmon',
        title: 'srvmon',
        description: 'An extensive service monitoring suite for UConn.',
        containerStyle: 'ml--3 mr--1 mt-5',
        icon: <MdiIcon path={mdiPokeball} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://srvmon.its.uconn.edu',
    },
    {
        key: 'beastburger',
        title: 'BeastBurger',
        description: 'A responsive map of all the BeastBurger locations in the US.',
        containerStyle: 'ml--3 mr--1 mt-5',
        icon: <MdiIcon path={mdiHamburger} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://beastburger.m1ke.co',
    },
    {
        key: 'vpro',
        title: 'vPro',
        description: 'An API wrapper for the Intel EMA platform, aka vPro.',
        containerStyle: 'mr--1 mt-2',
        icon: <MdiIcon path={mdiRemoteDesktop} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/notm1ke/vpro',
    },
    {
        key: 'ems-conversion-utility',
        title: 'EMS Conversion Util',
        description: 'EMS Cloud Events ➔ RSS-readable XML for UConn Room Signage.',
        containerStyle: 'ml--3 mr--1 mt-2',
        icon: <MdiIcon path={mdiRss} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/notm1ke/ems-conversion-utility'
    },
    {
        key: 'matrix',
        title: 'Matrix',
        description: 'A Java-based plugin runtime used for testing.',
        containerStyle: 'ml--3 mr--1 mt-2',
        icon: <MdiIcon path={mdiFileImport} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/notm1ke/matrix',
    },
    {
        key: 'gamesboat',
        title: 'GamesBoat',
        description: 'A unique chat-based games bot built for the Discord\'s Hackweek.',
        containerStyle: 'mr--1 mt-2',
        icon: <MdiIcon path={mdiGamepadSquare} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/notm1ke/gamesboat',
    },
    {
        key: 'basic',
        title: 'Basic',
        description: 'A simple and lightweight Java-based utility framework.',
        containerStyle: 'ml--3 mr--1 mt-2',
        icon: <MdiIcon path={mdiHammerScrewdriver} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/notm1ke/basic',
    },
    {
        key: 'royale',
        title: 'Royale',
        description: 'Clash Royale statistic viewer website (data API discontinued).',
        containerStyle: 'ml--3 mr--1 mt-2',
        icon: <MdiIcon path={mdiChessRook} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/notm1ke/royale',
    },
]

interface CobaltCardProps {
    desktop: boolean
}

const CobaltCard: React.FC<CobaltCardProps> = ({ desktop }) => (
    <FeaturedWorkCard
        title="Cobalt"
        link="https://cobalt.lol"
        icon={<MdiIcon path={mdiVectorUnion} size="22px" className={`${styles.featuredWorkCardIcon} fa-fw`} />}
        description={
            <p>
                Cobalt is a centralized hub for all things UConn. It provides ease-of-access to a variety of services including searching courses, professor ratings, dining hall menus, room schedules, recreation center occupancy insights, residence hall imagery, and a whole lot more.
            </p>
        }
        tracking={
            <div className="mt-3">
                <p>
                    Currently tracking <b>8,045 courses</b>, <b>4,019 professors</b>, <b>323 classrooms</b>, and more across all of UConn's campuses.
                </p>
            </div>
        }
        containerStyle={desktop ? styles.cobaltFeaturedCard : 'mt-1'}
        attributeStyles={desktop ? styles.cobaltBoxSpacing : ''}
        attributes={[
            {
                name: 'Unique Visitors',
                value: '30K+',
                icon: <MdiIcon path={mdiAccountMultiple} size="17px" className="fa-fw vaTextTop" />
            },
            {
                name: 'Monthly Views',
                value: '80K+',
                icon: <MdiIcon path={mdiCalendar} size="17px" className="fa-fw vaTextTop" />
            },
            {
                name: 'Lifetime Views',
                value: '1M+',
                icon: <MdiIcon path={mdiChartTimelineVariant} size="17px" className="fa-fw vaTextTop" />
            }
        ]}
    />
);

const HomePage = () => {
    const [desktop, setDesktop] = useState(true);

    useEffect(() => {
        if (isMobile) setDesktop(false);
    }, []);

    return (
        <main>
            <Nav />
            <div className="position-relative">
                <div className="section section-hero section-shaped background-main">
                    <div className="shape shape-style-3 shape-default"></div>
                    <div className={styles.pageHeader}>
                        <div className="container shape-container d-flex align-items-center py-lg">
                            <div className="col px-0">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-6 text-center">
                                        <img src="/logo.svg" width={200} height={200} />
                                        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white cursor`}>
                                            <b>CS @ UConn</b> — Full Stack Software Engineer
                                        </h2>
                                        <div className="btn-wrapper mt-4">
                                            <a href="https://www.github.com/notm1ke" className="btn btn-dark bg-ilefa-dark btn-icon mt-3 mb-sm-0 shine text-lowercase">
                                                <span className="btn-inner--icon"><i className="fab fa-github"></i></span>
                                                <span className="btn-inner--text">Visit my GitHub</span>
                                            </a>
                                            <a href="https://www.linkedin.com/in/mike-medved" className="btn btn-dark bg-ilefa-dark btn-icon mt-3 mb-sm-0 shine text-lowercase">
                                                <span className="btn-inner--icon"><i className="fab fa-linkedin"></i></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={`section section-lg ${styles.sectionSeparator} background-main`}>
                    <div className="container" id="body">
                        <h4 className={`text-white ${styles.workTitle}`}>
                            <i className="fas fa-person-circle-question fa-fw"></i> A little bit about me
                            <br /><span className={`text-white ${styles.workTagline}`}>
                                Hey there! My name is Mike, and I am currently a Junior Computer Science major (and Information Assurance + Math minor) at UConn. I have interests in Web Development (full stack), Security, Cloud Systems, and Distributed Systems. While pursuing my degree, I am also working for UConn as a Software Engineer / Systems Administrator.
                            </span>
                        </h4>

                        <div className="mt-6 mb-4">
                            <h4 className={`text-white ${styles.workTitle}`}>
                                <i className="fas fa-briefcase fa-fw"></i> Where I've worked
                                <br /><span className={`text-white ${styles.workTagline}`}>
                                    I have been working in various places in the software industry since 2020, and have worked on a variety of projects for the below companies.
                                </span>
                            </h4>
                        </div>

                        <ExperienceSection />

                        <div className="mt-6 mb--4" id="projects">
                            <h4 className={`text-white ${styles.workTitle}`}>
                                <i className="fas fa-layer-group fa-fw"></i> My technical projects
                                <br /><span className={`text-white ${styles.workTagline}`}>
                                    I have worked on a variety of projects, both personal and professional - below are some of my most notable ones.
                                </span>
                            </h4>
                        </div>

                        {/* ilefa projects */}
                        <div className="row">
                            <div className={`col-md-4 ${desktop ? 'ml--3' : ''} align-items-stretch`}>
                                <WorkCard {...PROJECTS[0]} sectionHeader mobile={!desktop} />
                                <WorkCard {...PROJECTS[1]} mobile={!desktop} />
                            </div>

                            <div className="col-md-8 align-items-stretch">
                                <CobaltCard desktop={desktop} />
                            </div>

                            {
                                PROJECTS.slice(2, 6).map(project => (
                                    <div className="col-md-4" key={project.key}>
                                        <WorkCard {...project} mobile={!desktop} />
                                    </div>
                                ))
                            }
                        </div>

                        {/* warp projects */}
                        <div className="row">
                            <div className="col-md-4 align-items-stretch">
                                <WorkCard {...PROJECTS[6]} sectionHeader mobile={!desktop} />
                            </div>

                            {
                                PROJECTS.slice(7, 10).map(project => (
                                    <div className="col-md-4 align-items-stretch" key={project.key}>
                                        <WorkCard {...project} mobile={!desktop} />
                                    </div>
                                ))
                            }
                        </div>

                        {/* personal/uconn projects */}
                        <div className="row">
                            <div className="col-md-4 align-items-stretch">
                                <WorkCard {...PROJECTS[10]} sectionHeader mobile={!desktop} />
                            </div>

                            {
                                PROJECTS.slice(11, 20).map(project => (
                                    <div className="col-md-4 align-items-stretch" key={project.key}>
                                        <WorkCard {...project} mobile={!desktop} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <Footer className="bg-dark" white />
            </div>
        </main>
    )
}

export default HomePage;
