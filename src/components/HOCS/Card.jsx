import React from 'react';
import classNames from 'classnames'

const Card = (props) => {
    return (
        <div className={classNames('card')}>
            {props.children}
        </div>
    );
};

export default Card;
