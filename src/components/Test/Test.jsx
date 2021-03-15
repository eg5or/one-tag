import React from 'react';
import Circle from './Circle';
import Circle2 from './Circle2';

const Test = () => {
    return (
        <div className="guide-block">
            <h2>Circle</h2>
            <div className="guide-block__content">
                <Circle />
                <Circle2 />
            </div>
        </div>
    );
};

export default Test;
