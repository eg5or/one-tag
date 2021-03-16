import React from 'react';
import AddTask from '../Actions/AddTask/AddTask';
import RateTask from '../Actions/RateTask/RateTask';
import DoTask from '../Actions/DoTask/DoTask';
import RateDoneTask from '../Actions/RateDoneTask/RateDoneTask';

const Main = () => {
    return <div className="main-wrapper">
        <AddTask />
        <RateTask />
        <DoTask />
        <RateDoneTask />
    </div>
};

export default Main;
