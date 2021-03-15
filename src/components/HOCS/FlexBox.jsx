import React from 'react';
import classNames from 'classnames'

const FlexBox = ({children, column, alignment, fullWidth, className}) => {
    return (
        <div className={classNames('flex-box', className, {
            'flex-box__direction-column': column,
            'flex-box__full-width': fullWidth,
            'flex-box__alignment_c-c': alignment === 'c-c',
            'flex-box__alignment_c-s': alignment === 'c-s',
            'flex-box__alignment_c-e': alignment === 'c-e',
            'flex-box__alignment_s-c': alignment === 's-c',
            'flex-box__alignment_e-c': alignment === 'e-c',
            'flex-box__alignment_s-s': alignment === 's-s',
            'flex-box__alignment_e-e': alignment === 'e-e',
            'flex-box__alignment_s-e': alignment === 's-e',
            'flex-box__alignment_e-s': alignment === 'e-s',
            'flex-box__alignment_sb-c': alignment === 'sb-c',
            'flex-box__alignment_sb-s': alignment === 'sb-s',
            'flex-box__alignment_sb-e': alignment === 'sb-e',
            'flex-box__alignment_sa-c': alignment === 'sa-c',
            'flex-box__alignment_sa-s': alignment === 'sa-s',
            'flex-box__alignment_sa-e': alignment === 'sa-e',
        })}>
            {children}
        </div>
    );
};

export default FlexBox;
