import styles from '../components/styling/legal.module.css';

import { Footer, Nav } from '../components';

interface LinkProps {
    href: string;
    text: string;
}

const Link: React.FC<LinkProps> = ({ href, text }) => <a className={`${styles.embedLink} shine`} href={href} rel="noopener noreferrer" target="_blank">{text}</a>;

const LegalPage = () => (
    <main>
        <Nav />
        <div className="position-relative">
            <div className="section background-main">
                <div className={styles.pageHeader}>
                    <div className="container shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h1 className={`${styles.nameTitle} text-white display-1`}>Legal</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={`section section-lg ${styles.sectionSeparator} background-main`}>
                <div className="container" id="body">
                    <h4 className={`text-white ${styles.title}`}>
                        <i className="fas fa-pen-ruler fa-fw"></i> Preamble
                        <br /><span className={`text-white ${styles.tagline}`}>
                            This page outlines certain legal disclosures regarding services or projects ILEFA Labs ("ilefa", "we", "our"), or any of our subsidiaries, currently or in the future will provide.
                        </span>
                    </h4>
                    <div className="mt-5">
                        <h4 className={`text-white ${styles.title}`}>
                            <i className="fa fa-balance-scale-left fa-fw"></i> Disclosures
                            <br /><span className={`text-white ${styles.tagline}`}>
                                <ol className={`mt-2 ${styles.disclosureList}`}>
                                    <li>We, nor any of our services, are affiliated with or endorsed by the <Link href="https://uconn.edu" text="University of Connecticut" />.</li>
                                    <li>Unless explicitly stated, we do not now, or in the future intend to collect, distribute, or otherwise utilize any information regarding our users besides for clear authentication/platform purposes for any service that requires it.</li>
                                </ol>
                            </span>
                        </h4>
                    </div>
                    <div className="mt-5">
                        <h4 className={`text-white ${styles.title}`}>
                            <i className="fa fa-check-to-slot fa-fw"></i> Licensing
                            <br /><span className={`text-white ${styles.tagline}`}>
                                This section pertains to our open-source libraries. Unless otherwise stated in the repository of the specific project, all of our open-source libraries are licensed under the <Link href="https://choosealicense.com/licenses/gpl-3.0/" text="GPL-3.0" /> license.
                            </span>
                        </h4>
                    </div>
                    <div className="mt-5">
                        <h4 className={`text-white ${styles.title}`}>
                            <i className="fa fa-images fa-fw"></i> Website Assets
                            <br /><span className={`text-white ${styles.tagline}`}>
                                This section attributes the appropriate credit to several assets used on this website.
                                <ol className={`mt-2 ${styles.disclosureList}`}>
                                    <li>This website's background was captured by <Link href="https://today.uconn.edu/author/pjm02012/" text="Peter Morenus" />, and was originally featured as the header for the following <Link href="https://today.uconn.edu/2016/07/trustees-adopt-fy-17-budget" text="UConn Today" /> article.</li>
                                </ol>
                            </span>
                        </h4>
                    </div>
                    <div className="mt-5">
                        <h4 className={`text-white ${styles.title}`}>
                            <i className="fa fa-paper-plane fa-fw"></i> Contact
                            <br /><span className={`text-white ${styles.tagline}`}>
                                If you have any questions or concerns regarding the contents of this page, please contact <Link href="mailto:me@m1ke.co" text="me@m1ke.co" />.
                            </span>
                        </h4>
                    </div>
                </div>
            </section>
            <Footer className="bg-dark" white />
        </div>
    </main>
)

export default LegalPage;
