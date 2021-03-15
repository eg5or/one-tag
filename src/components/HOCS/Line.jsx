import React from 'react';
import classNames from 'classnames'

const Line = (props) => {
    return <div className={classNames('line', {
        'line__color-primary': props.color === 'primary',
        'line__color-secondary': props.color === 'secondary',
        'line__color-danger': props.color === 'danger',
        'line__color-warning': props.color === 'warning',
        'line__color-info': props.color === 'info',
        'line__color-dark': props.color === 'dark',
    })} />
};

export default Line;
