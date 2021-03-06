import React from 'react'
import {Route} from 'react-router-dom';
import Guide from './components/Guide/Guide';
import Header from './components/Header/Header';
import Main from './components/pages/Main';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Information from './components/pages/Information';


const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content-wrapper">
                <Route path='/guide' component={Guide}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/information' component={Information}/>
                <Route path='/' exact component={Main}/>
            </div>
        </div>
    );
}

export default App;
