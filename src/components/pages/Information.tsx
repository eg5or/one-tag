import React from 'react';
import MessageBox from '../HOCS/MessageBox';
import Line from '../HOCS/Line';
import CircularProgress from '../HOCS/CircularProgress';


const Information: React.FC = () => {
    return (
            <div>
                <MessageBox primary>Текст</MessageBox>
                <Line color='secondary'/>
                <CircularProgress value={325} size='xl' maxValue={500} type='percent' color='primary' fill='info'/>
            </div>

    );
};

export default Information;
