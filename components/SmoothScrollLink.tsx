import React from 'react';

import { Link } from 'react-scroll';

export type SmoothScrollLinkProps = {
    target: string;
}

export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ target, children }) => (
    <Link to={target}>
        {children}
    </Link>
)