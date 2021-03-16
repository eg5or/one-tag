import React from 'react';
import classNames from 'classnames'

const Button = ({
                    onClick,
                    primary,
                    secondary,
                    outline,
                    danger,
                    warning,
                    info,
                    icon,
                    uppercase,
                    lowercase,
                    bolder,
                    bold,
                    extraBold,
                    size,
                    iconLeft,
                    iconRight,
                    noMargin,
                    children,
                    fullWidth,
                    disabled
                }) => {
    return (
        <div className={classNames('btn-wrapper', {
            'btn__full-width': fullWidth,
        })}>
            <button disabled={disabled} onClick={onClick} className={classNames('btn', {
                'btn__type-primary': primary,
                'btn__type-secondary': secondary,
                'btn__type-outline': outline,
                'btn__type-danger': danger,
                'btn__type-warning': warning,
                'btn__type-info': info,
                'btn__type-icon': icon,
                'btn__text-uppercase': uppercase,
                'btn__text-lowercase': lowercase,
                'btn__text-bolder': bolder,
                'btn__text-bold': bold,
                'btn__text-extra-bold': extraBold,
                'btn__size-sm': size === 'sm',
                'btn__size-lg': size === 'lg',
                'btn__size-xl': size === 'xl',
                'btn__with-icon-left': iconLeft,
                'btn__with-icon-right': iconRight,
                'btn__no-text': !children,
                'btn__no-margin': noMargin,
                'btn__full-width': fullWidth,
                'btn__disabled': disabled,
            })}>
                {iconLeft && <div className="btn__icon-left">
                <span className="material-icons">
                    {iconLeft && iconLeft}
                </span>
                </div>}
                {children}
                {iconRight && <div className="btn__icon-right">
                <span className="material-icons">
                    {iconRight && iconRight}
                </span>
                </div>}
            </button>
        </div>
    );
};

export default Button;
