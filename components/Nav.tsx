import React from 'react';
import Link from 'next/link';
import styles from './styling/nav.module.css';

import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Navbar, UncontrolledCollapse } from 'reactstrap';

export const Nav: React.FC = () => {
    const [classes, setClasses] = useState('');
    const onExiting = () => setClasses('collapsing-out');
    const onExited = () => setClasses('');

    const elements = [
        {
            icon: 'fa fa-home',
            href: '/',
            name: 'Home',
            key: 'home',
            type: 'link',
            title: true
        },
        {
            icon: 'fa fa-layer-group',
            href: '/#projects',
            name: 'Projects',
            key: 'projects',
            type: 'link',
            title: true
        }
    ];

    return (
        <header className="header-global">
            <Navbar className="navbar-main navbar-transparent navbar-light mt-2" expand="lg">
                <div className="container">
                    <Link href="/">
                        <a className={`mr-lg-1 navbar-brand ${styles.navBrandText}`}>
                            Mike Medved
                        </a>
                    </Link>
                    <button className="navbar-toggler" id="navbar_global">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse
                        toggler="#navbar_global"
                        navbar
                        className={classes}
                        onExiting={onExiting}
                        onExited={onExited}
                    >
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <Link href="/">
                                    <a className={`navbar-collapse-title text-primary ${styles.navBrandMobileText}`}>
                                        Mike Medved
                                    </a>
                                    </Link>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button className={`navbar-toggler ${styles.navBrandMobileCloser}`} id="navbar_global">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                            {
                                elements.map(element => 
                                    <li className="nav-item" key={element.key}>
                                        {
                                            element.type === 'action' && (
                                                <a className={`nav-link ${styles.navLink} text-`}>
                                                    <i className={`${element.icon} fa-fw`}></i>{(isMobile || element.title) && " "} {(isMobile || element.title) && element.name}
                                                </a>
                                            )
                                        }
                                        {
                                            element.type === 'link' && (
                                                <Link href={element.href}>
                                                    <a className={`nav-link ${styles.navLink} fron`}>
                                                        <i className={`${element.icon} fa-fw`}></i> {(isMobile || element.title) && element.name}
                                                    </a>
                                                </Link>
                                            )
                                        }
                                    </li>
                                )
                            }
                        </ul>
                    </UncontrolledCollapse>
                </div>
            </Navbar>
        </header>
    );
}