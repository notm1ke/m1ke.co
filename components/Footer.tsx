import styles from './styling/footer.module.css';

import {
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
} from 'reactstrap';

export interface FooterProps {
    white?: boolean;
    noBackground?: boolean;
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ white, noBackground, className }) => (
    <footer className={`footer ${className ?? ''} ${white ? noBackground ? '' : ' ' : ''}`}>
        <Container className="container-lg">
            <Row className="align-items-center justify-content-md-between">
                <div className="col-6">
                    <div className={`copyright ${styles.footerBrand} ${white ? " text-white" : ""}`}>  
                        <a href="https://www.m1ke.co" className={`${white ? "text-white" : ""} shine`}>
                            <img src="/brand.svg" width={25} height={25} className="mt--1" />
                        </a>
                        {" "} © 2016-{new Date().getFullYear()}{" "}
                        <br />
                        <small className="text-muted">
                            All rights reserved.
                        </small>
                    </div>
                </div>
                <div className="col-6">
                    <Nav className="nav-footer justify-content-end">
                        <NavItem>
                            <NavLink
                                className="nav-link-icon footer-icon"
                                href='https://www.github.com/notm1ke'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={"fab fa-github fa-fw" + (white ? " text-white" : "")} />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="nav-link-icon footer-icon"
                                href='https://www.linkedin.com/mike-medved'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={"fab fa-linkedin fa-fw" + (white ? " text-white" : "")} />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="nav-link-icon footer-icon"
                                href='mailto:me@m1ke.co'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={"fas fa-envelope-open-text fa-fw" + (white ? " text-white" : "")} />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Row>
        </Container>
    </footer>
);