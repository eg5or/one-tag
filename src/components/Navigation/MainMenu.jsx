import React from 'react';
import {NavLink} from 'react-router-dom';
import Icon from '../HOCS/Icon';
import Button from '../HOCS/Button';

const MainMenu = ({openBurger, onCloseBurgerMenu}) => {
    return (
        <nav className="main-menu" style={{right: openBurger && 0}}>
            <div className="main-menu__header">
                <div className="main-menu__header-text">Меню</div>
                <div className="main-menu__header-close">
                    <Button onClick={onCloseBurgerMenu} noMargin icon size="xl" iconLeft="close" />
                </div>
            </div>
            <NavLink exact={true} to='/' >
                <div className="main-menu__icon"><Icon size="sm" data="home"/></div>
                <div className="main-menu__text">Home</div>
            </NavLink>
            <NavLink to='/guide' >
                <div className="main-menu__icon"><Icon size="sm" data="assignment"/></div>
                <div className="main-menu__text">Guide</div>
            </NavLink>
            <NavLink to='/test' >
                <div className="main-menu__icon"><Icon size="sm" data="bug_report"/></div>
                <div className="main-menu__text">Test</div>
            </NavLink>
        </nav>
    );
};

export default MainMenu;