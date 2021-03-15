import React from 'react';
import classNames from 'classnames'

const CodeBox = ({children}) => {
    console.log(children)
    return (
        <code className={classNames('code-box')}>
            {children}
        </code>
    );
}

export default CodeBox;
