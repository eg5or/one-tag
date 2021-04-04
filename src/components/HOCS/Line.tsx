import React from 'react';
import classNames from 'classnames'

interface LineProps {
    color: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'dark'
}

const Line: React.FC<LineProps> = ({color}) => {
    return <div className={classNames('line', {
        'line__color-primary': color === 'primary',
        'line__color-secondary': color === 'secondary',
        'line__color-danger': color === 'danger',
        'line__color-warning': color === 'warning',
        'line__color-info': color === 'info',
        'line__color-dark': color === 'dark',
    })} />
};

export default Line;
