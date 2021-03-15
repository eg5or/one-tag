import React from 'react';
import classNames from 'classnames'

const Icon = ({data, size, primary, secondary, danger, warning, info}) => {
    return (
        <span className={classNames('material-icons', {
            'icon__size-xxs': size === 'xxs',
            'icon__size-xs': size === 'xs',
            'icon__size-sm': size === 'sm',
            'icon__size-md': size === 'md' || !size,
            'icon__size-lg': size === 'lg',
            'icon__size-xl': size === 'xl',
            'icon__size-xxl': size === 'xxl',
            'icon__color-primary': primary,
            'icon__color-secondary': secondary,
            'icon__color-danger': danger,
            'icon__color-warning': warning,
            'icon__color-info': info,
        })}>
            {data}
        </span>
    );
};

export default Icon;
