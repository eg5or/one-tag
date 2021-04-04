import React from 'react';
import classNames from 'classnames'

interface CardProps {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({children}) => {
    return (
        <div className={classNames('card')}>
            {children}
        </div>
    );
};

export default Card;
