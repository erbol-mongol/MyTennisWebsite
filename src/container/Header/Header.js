import React from 'react';
import module from './Header.module.css';
import {Link} from 'react-router-dom';

import Logo from '../../img/header_img/tennis.svg';
import * as ROUTES from '../../constants/routes';

const Header = () =>{
    return(
        <header className = {module.header}>
            <div className = 'container flex-container'>
                <img className = {module.header__logo} src ={Logo} alt = 'Logo'/>
                <div className = {module.link__container}>
                    <Link to = {ROUTES.LANDING} className = {module.link__item}>О нас <div className = {module.header__hover}/></Link>
                    <Link to = {ROUTES.TOURNAMENTS}  className = {module.link__item}>Турниры <div className = {module.header__hover}/></Link>
                    <Link to = {ROUTES.NEWS}  className = {module.link__item}>Новости <div className = {module.header__hover}/></Link>
                    <Link to = {ROUTES.CONTACTS} className = {module.link__item}>Контакты <div className = {module.header__hover}/></Link>
                    <Link to = {ROUTES.GALLERY} className = {module.link__item}>Галерея <div className = {module.header__hover}/></Link>
                    <Link to = {ROUTES.RANKING} className = {module.link__item}>Рейтинг <div className = {module.header__hover}/></Link>
                    <Link to = {ROUTES.SIGN_IN}  className = {module.link__item}>Регистрация <div className = {module.header__hover}/></Link>
                </div>    
            </div>
        </header>
    )
}


export default Header;