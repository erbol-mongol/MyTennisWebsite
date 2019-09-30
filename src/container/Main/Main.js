import React, {Component} from  'react';
import {Switch,Route} from 'react-router-dom';

import './Main.css';
import * as ROUTES from '../../constants/routes';

import Announcements from '../../components/MainComponents/Announcements/Announcements';
import Advertising from '../../components/MainComponents/Advertising/Advertising';
import News from '../../components/MainComponents/Route/News/News';
import Gallery from '../../components/MainComponents/Route/Gallery/Gallery';
import Ranking from '../../components/MainComponents/Route/Ranking/Ranking';
import Tournaments from '../../components/MainComponents/Route/Tournaments/Tournaments';
import AboutUs from '../../components/MainComponents/Route/AboutUs/AboutUs';
import Contacs from '../../components/MainComponents/Route/Contacts/Contacts';

import SignInPage from '../../components/FirebaseComponents/SIngIn';
import SignUpPage from '../../components/FirebaseComponents/SingUp';
import Home from '../../components/FirebaseComponents/Home';





export default class Main extends Component {
    render(){
        return(
            <div className = 'main__container'>
                <Advertising/>
                <Announcements/>
                <div className = 'main__switch'>
                    <Route exact path = {ROUTES.LANDING}  render = {() => <AboutUs/>}/>
                    <Route path = {ROUTES.TOURNAMENTS} render = {() => <Tournaments/>}/>
                    <Route path = {ROUTES.CONTACTS}    render = {() => <Contacs/>}/>
                    <Route path = {ROUTES.NEWS}        render = {() => <News/>}/>
                    <Route path = {ROUTES.GALLERY}     render = {() => <Gallery/>}/>
                    <Route path = {ROUTES.RANKING}     render = {() => <Ranking/>}/>
                    <Route path = {ROUTES.SIGN_IN}     component = {SignInPage}/>
                    <Route path = {ROUTES.SIGN_UP}     component = {SignUpPage}/>
                    <Route path = {ROUTES.HOME}        component = {Home}/>
                </div>
            </div>
        )
    }
}

