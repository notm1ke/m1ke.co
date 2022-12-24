import { ReactChild } from 'react';

export interface IconCardContainerProps {
    modifiers: string;
    children: ReactChild | ReactChild[];
}

export const IconCardContainer: React.FC<IconCardContainerProps> = props => {
    let modifiers = props.modifiers || "";
    let children = props.children || undefined;

    if (!children) {
        throw new Error('Icon Card Container cannot be initialized with no children.');
    }

    return (
        <div className={"container " + modifiers}>
            <div className="row d-flex">
                { children }
            </div>
        </div>
    )
}