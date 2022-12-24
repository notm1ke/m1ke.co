import cardStyles from './styling/card.module.css';
import { Badge } from 'reactstrap';

export interface FeaturedWorkCardProps {
    icon: JSX.Element;
    title: string;
    titleColor?: string;
    containerStyle?: string;
    description: JSX.Element | string;
    tracking: JSX.Element | string;
    attributes: Attribute[];
    attributeStyles: string;
    link?: string;
}

export type Attribute = {
    name: string;
    value: string;
    icon: JSX.Element;
}

export const FeaturedWorkCard: React.FC<FeaturedWorkCardProps> = ({
    icon, title, titleColor, containerStyle, description,
    tracking, attributes, attributeStyles, link
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

                    <div className="mt-3">
                        {description}
                    </div>

                    <div className={attributeStyles ?? 'mt-3'}>
                        {tracking}
                    </div>

                    <div className="mt-3">
                        {attributes.map((attribute, i) => (
                            <Badge color="primary" className="badge-md mr-1 text-capitalize" key={i}>
                                {attribute.icon} {attribute.name}: {attribute.value}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
)