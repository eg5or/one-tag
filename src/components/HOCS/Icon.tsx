import React from 'react';
import classNames from 'classnames'

const IconSizeEnum = {
    XXS: 'xxs',
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    XXL: 'xxl'
}

type IconSizeType = typeof IconSizeEnum[keyof typeof IconSizeEnum]

interface IconProps {
    data: string
    size?: IconSizeType
    primary?: boolean
    secondary?: boolean
    danger?: boolean
    warning?: boolean
    info?: boolean
}

const Icon: React.FC<IconProps> = ({data, size, primary, secondary, danger, warning, info}) => {
    return (
        <span className={classNames('material-icons', {
            'icon__size-xxs': size === IconSizeEnum.XXS,
            'icon__size-xs': size === IconSizeEnum.XS,
            'icon__size-sm': size === IconSizeEnum.SM,
            'icon__size-md': size === IconSizeEnum.MD || !size,
            'icon__size-lg': size === IconSizeEnum.LG,
            'icon__size-xl': size === IconSizeEnum.XL,
            'icon__size-xxl': size === IconSizeEnum.XXL,
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
