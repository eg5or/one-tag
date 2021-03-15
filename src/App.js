import React from 'react'
import {Route} from 'react-router-dom';
import Guide from './components/Guide/Guide';
import Test from './components/Test/Test';
import Header from './components/Header/Header';
import Main from './components/pages/Main';


function App() {


    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content-wrapper">
                <Route path='/guide' component={Guide}/>
                <Route path='/test' component={Test}/>
                <Route path='/' exact component={Main}/>
            </div>
        </div>
    );
}

export default App;
