import React from 'react';
import classNames from 'classnames'

const Input = ({outline, large, iconLeft, iconRight, fullWidth, id, label}) => {
    return (
        <div className="input-wrapper">
            <input id={id} className={classNames('input', {
                'input__type-outline': outline,
                'input__size-large': large && !outline,
                'input__size-large-outline': large && outline,
                'input__with-icon-left': iconLeft,
                'input__with-icon-right': iconRight,
                'input__full-width': fullWidth,
            })} type="text" placeholder=" " />
            <label className="input__label" htmlFor={id}>{label}</label>
            {!outline && <div className="input__bb-line-container">
                <div className="input__bb-line"/>
            </div>}
            {iconLeft || iconRight ? <div className={classNames({
                'input__icon-left': iconLeft,
                'input__icon-right': iconRight,
            })}>
                <span className="material-icons">
                    {iconLeft && iconLeft}
                    {iconRight && iconRight}
                </span>
            </div> : undefined}
        </div>
    );
};

export default Input;
