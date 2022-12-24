import React from 'react';
import styles from './styling/error.module.css';
import globalStyles from './styling/home.module.css';

import { Footer, Nav } from '.';
import { useRouter } from 'next/router';

export interface ErrorViewProps {
    title: string;
    message: string | JSX.Element;
    icon?: string | JSX.Element;
    goBack?: boolean;
}

export const ErrorView: React.FC<ErrorViewProps> = ({ title, message, icon, goBack }) => {
    let router = useRouter();
    let errorIcon = !!icon
        ? icon instanceof String
            ? <i className={`fa ${icon} fa-fw`}></i>
            : icon
        : <i className="fa fa-times-circle fa-fw"></i>;

    return (
        <main>
            <Nav />
            <div className="position-relative">
                <div className={`section section-hero section-shaped background-main ${styles.pageFooter}`}>
                    <div className="shape shape-style-3 shape-default"></div>
                    <div className={styles.pageHeader}>
                        <div className="container shape-container d-flex align-items-center py-lg">
                            <div className="col px-0">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-6 text-center">
                                        <h1 className={`${globalStyles.nameTitle} text-white display-1 mb-4`}>{errorIcon} {title}</h1>
                                        <h2 className={`${globalStyles.tagline} display-4 font-weight-normal text-white mb-5`}>
                                            {message}
                                        </h2>
                                        {
                                            goBack && (
                                                <a className="btn btn-dark btn-md bg-ilefa-dark text-lowercase shine" onClick={() => router.back()}>
                                                    <i className="fa fa-chevron-left fa-fw"></i> Click to go back
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer className="bg-dark" white />
            </div>
        </main>
    );
}