import React from 'react';
import classNames from 'classnames'

interface ButtonGroupProps {
    fullWidth: boolean
}

const ButtonsGroup: React.FC<ButtonGroupProps> = ({children, fullWidth}) => {
    return (
        <div className={classNames('buttons-group', {
            'buttons-group__full-width': fullWidth
        })}>
            {children}
        </div>
    );
};

export default ButtonsGroup;
