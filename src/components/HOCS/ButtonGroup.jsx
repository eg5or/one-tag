import React from 'react';
import classNames from 'classnames'

const ButtonsGroup = ({children, fullWidth}) => {
    return (
        <div className={classNames('buttons-group', {
            'buttons-group__full-width': fullWidth
        })}>
            {children}
        </div>
    );
};

export default ButtonsGroup;
