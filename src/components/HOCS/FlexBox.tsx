import React from 'react';
import classNames from 'classnames'

const AlignmentEnum = {
    CC: 'c-c',
    CS: 'c-s',
    CE: 'c-e',
    SC: 's-c',
    EC: 'e-c',
    SS: 's-s',
    EE: 'e-e',
    SE: 's-e',
    ES: 'e-s',
    SBC: 'sb-c',
    SBS: 'sb-s',
    SBE: 'sb-e',
    SAC: 'sa-c',
    SAS: 'sa-s',
    SAE: 'sa-e',
}

export type AlignmentType = typeof AlignmentEnum[keyof typeof AlignmentEnum]

interface FlexBoxProps {
    children: React.ReactNode
    column?: boolean
    alignment?: AlignmentType
    fullWidth?: boolean,
    className?: string
}

const FlexBox: React.FC<FlexBoxProps> = ({children, column, alignment, fullWidth, className}) => {
    return (
        <div className={classNames('flex-box', className, {
            'flex-box__direction-column': column,
            'flex-box__full-width': fullWidth,
            'flex-box__alignment_c-c': alignment === AlignmentEnum.CC,
            'flex-box__alignment_c-s': alignment === AlignmentEnum.CS,
            'flex-box__alignment_c-e': alignment === AlignmentEnum.CE,
            'flex-box__alignment_s-c': alignment === AlignmentEnum.SC,
            'flex-box__alignment_e-c': alignment === AlignmentEnum.EC,
            'flex-box__alignment_s-s': alignment === AlignmentEnum.SS,
            'flex-box__alignment_e-e': alignment === AlignmentEnum.EE,
            'flex-box__alignment_s-e': alignment === AlignmentEnum.SE,
            'flex-box__alignment_e-s': alignment === AlignmentEnum.ES,
            'flex-box__alignment_sb-c': alignment === AlignmentEnum.SBC,
            'flex-box__alignment_sb-s': alignment === AlignmentEnum.SBS,
            'flex-box__alignment_sb-e': alignment === AlignmentEnum.SBE,
            'flex-box__alignment_sa-c': alignment === AlignmentEnum.SAC,
            'flex-box__alignment_sa-s': alignment === AlignmentEnum.SAS,
            'flex-box__alignment_sa-e': alignment === AlignmentEnum.SAE,
        })}>
            {children}
        </div>
    );
};

export default FlexBox;
