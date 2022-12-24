import styles from './styling/work.module.css';
import cardStyles from './styling/card.module.css';

const repositoryKeywords = (link: string) => {
    if (!link.startsWith('https://github.com/')
            && !link.startsWith('https://gitlab.com/')
            && !link.startsWith('https://bitbucket.org/'))
        return link.split('https://')[1];

    return link.split(/(http|https):\/\/(github|gitlab|bitbucket).(com|org)/)[4].substring(1);
};

const getIconForLink = (link: string) => {
    if (link.startsWith('https://gitlab.com')) return 'fab fa-gitlab';
    if (link.startsWith('https://bitbucket.org')) return 'fab fa-bitbucket';
    if (!link.startsWith('https://github.com')) return 'fa fa-globe-americas';

    return 'fab fa-github';
}

export interface WorkCardProps {
    icon: JSX.Element;
    title: string;
    titleColor?: string;
    containerStyle?: string;
    description: JSX.Element | string;
    link?: string;
    hideExtraLink?: boolean;
}

export const WorkCard: React.FC<WorkCardProps> = ({
    icon, title, titleColor, containerStyle, description, link, hideExtraLink
}) => (
    <div className={`card shadow shadow-lg--hover ${containerStyle ?? 'mt-5'} ${cardStyles.rgCardSm}`}>
        <div className="card-body">
            <div className="d-flex">
                <div>
                    {
                        link !== '#' && (
                            <h5>
                                <a
                                    href={link}
                                    className={`${cardStyles.cardSectionTitle} ${titleColor ?? 'text-primary'} shine`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        {icon ?? ''}{title}
                                </a>
                            </h5>
                        )
                    }

                    {
                        link === '#' && (
                            <h5>
                                <span className={`${cardStyles.cardSectionTitle} ${titleColor ?? 'text-primary'} cursor-pointer`}>
                                    {icon ?? ''}{title}
                                </span>
                            </h5>
                        )
                    }

                    {description}

                    {
                        !hideExtraLink && link && link !== '#' && (
                            <div className={styles.projectCardLink}>
                                <a 
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-dark btn-sm text-lowercase shine">
                                        <i className={`${getIconForLink(link)} fa-fw`}></i> {repositoryKeywords(link)}
                                </a>
                            </div>
                        )
                    }
                    {
                        !hideExtraLink && link === '#' && (
                            <div className={styles.projectCardLink}>
                                <a 
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-red btn-sm text-lowercase shine">
                                        <i className="fa fa-times-circle fa-fw"></i> no links available
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
)