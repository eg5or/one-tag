import React from 'react';
import Icon from '../HOCS/Icon';
import MainMenu from '../Navigation/MainMenu';
import Button from '../HOCS/Button';

const Header: React.FC = () => {

    const [openBurger, setOpenBurger] = React.useState(false)

    const onOpenBurgerMenu = (): void => {
        setOpenBurger(true)
    }
    const onCloseBurgerMenu = (): void => {
        setOpenBurger(false)
    }
    return (
        <header className="header">
            <div className="header__logo">
                <div className="header__logo-icon">
                    <Icon primary size="xxl" data="tag"/>
                </div>
                <div className="header__logo-text">
                    <span>One</span>Tag
                </div>
            </div>
            <MainMenu onCloseBurgerMenu={onCloseBurgerMenu}
                      openBurger={openBurger}
            />
            {!openBurger && <div className="header__burger-btn">
                <Button onClick={onOpenBurgerMenu} noMargin primary iconLeft="menu" />
            </div>}
        </header>
    );
};

export default Header;
