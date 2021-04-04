import React from 'react';
import classNames from 'classnames'

interface InputProps {
    outline?: boolean
    large?: boolean
    iconLeft?: string
    iconRight?: string
    fullWidth?: boolean
    id: string
    label: string
    name: string
    type?: string
    value: string
    onChange: (e: React.ChangeEvent) => void
    onKeyDown?: React.KeyboardEventHandler
}

const Input: React.FC<InputProps> = ({
                                         outline,
                                         large,
                                         iconLeft,
                                         iconRight,
                                         fullWidth,
                                         id,
                                         label,
                                         name,
                                         type,
                                         onChange,
                                         onKeyDown,
                                         value
                                     }) => {
    return (
        <div className="input-wrapper">
            <input id={id} className={classNames('input', {
                'input__type-outline': outline,
                'input__size-large': large && !outline,
                'input__size-large-outline': large && outline,
                'input__with-icon-left': iconLeft,
                'input__with-icon-right': iconRight,
                'input__full-width': fullWidth,
            })} type={!type ? 'text' : type}
                   name={name}
                   placeholder=" "
                   onChange={onChange}
                   onKeyDown={onKeyDown}
                   value={value}
                   autoComplete="off"
            />
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
