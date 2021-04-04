import React from 'react';
import classNames from 'classnames'

interface MessageBoxProps {
    children: React.ReactNode
    primary?: boolean
    secondary?: boolean
    warning?: boolean
    danger?: boolean
    info?: boolean
    icon?: string
}

const MessageBox: React.FC<MessageBoxProps> = ({children, primary, secondary, warning, danger, info, icon}) => {

    return <div className={classNames('message-box', {
        'message-box__color-primary': primary,
        'message-box__color-secondary': secondary,
        'message-box__color-warning': warning,
        'message-box__color-danger': danger,
        'message-box__color-info': info,
    })}>
        {icon && <div className="message-box__icon">
            <span className='material-icons'>
                {icon}
            </span>
        </div>}
        {children}
    </div>
};

export default MessageBox;
