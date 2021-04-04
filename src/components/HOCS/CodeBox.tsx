import React from 'react';
import classNames from 'classnames'

interface CodeBoxProps {
    children: React.ReactNode
}

const CodeBox: React.FC<CodeBoxProps> = ({children}) => {
    return (
        <code className={classNames('code-box')}>
            {children}
        </code>
    );
}

export default CodeBox;
