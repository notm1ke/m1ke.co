import Image from 'next/image';
import styles from '../styling/card.module.css';

import { ReactElement } from 'react';

export interface IconCardGlyphProps {
    title?: string;
    titleColor?: string;
    icon?: string;
    iconColor?: string;
    content: ReactElement | string;
    glyph: any;
    glyphAlt?: string;
    className?: string;
}

export const IconCardGlyph: React.FC<IconCardGlyphProps> = props => {
    let title = props.title || 'Default Title';
    let titleColor = props.titleColor || 'text-primary';
    let icon = props.icon || 'fa fa-exclamation-triangle';
    let iconColor = props.iconColor || 'bg-primary';
    
    let content = props.content || undefined;
    if (!content) {
        throw new Error('IconCard with Glyph cannot be initialized without content.');
    }

    let glyphSrc = props.glyph || undefined;
    let glyphAlt = props.glyphAlt || 'glyph';
    if (!glyphSrc) {
        throw new Error('IconCard with Glyph cannot be initialized without Glyph source.');
    }

    let className = props.className;

    return (
        <div className={`card shadow border-0${className ? ' ' + className : ''}`}>
            <div className="card-body py-5">
            <div className={`row row-grid align-items-center ${styles.rgCard}`}>
                    <div className="col-md-4 order-md-2">
                        <Image
                            src={glyphSrc}
                            alt={glyphAlt}
                            width={200}
                            height={200}
                            className={`img-fluid ${styles.iconHwSpecialized}`} />
                    </div>
                    <div className="col-md-8 order-md-1">
                        <div className="pr-md-5">
                            <div className="row">
                                    <div className={`col-md-2 ${styles.iconDpositionSpecialized}`}>
                                        <div className={`icon icon-shape ${iconColor} rounded-circle text-white mb-4`}>
                                        <i className={icon}></i>
                                        </div>
                                    </div>
                                    <div className={`col-md-10 ${styles.sectionIconPosition}`}>
                                        <h4 className={`${styles.cardSectionTitle} ${titleColor}`}>{title}</h4>
                                    </div>
                            </div>
                            { content }
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}