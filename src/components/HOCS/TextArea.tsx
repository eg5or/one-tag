import React, {ChangeEvent} from 'react';
import classNames from 'classnames'

interface TextAreaProps {
    name: string
    id: string
    label: string
    rows?: '1' | '2' | '3' | '4' | '5' | '6'
    value: string
    fullWidth?: boolean
    onChange: (e: ChangeEvent) => void
}

const TextArea: React.FC<TextAreaProps> = ({name, id, label, rows, onChange, value, fullWidth}) => {
    return (
        <div className={classNames('textarea-wrapper', {
            'textarea__full-width': fullWidth
        })}>
            <textarea onChange={onChange} value={value} className={classNames('textarea', {
                'textarea__rows-1': !rows || rows === '1',
                'textarea__rows-2': rows === '2',
                'textarea__rows-3': rows === '3',
                'textarea__rows-4': rows === '4',
                'textarea__rows-5': rows === '5',
                'textarea__rows-6': rows === '6',
            })} name={name} id={id} placeholder=" "/>
            <label className="textarea__label" htmlFor={id}>{label}</label>
        </div>
    );
};

export default TextArea;
