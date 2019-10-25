import React from 'react';
import {Route , BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Slider from './container/Slider/Slider';

import * as ROUTES  from './constants/routes';
import {withAuthentication} from './components/FirebaseComponents/Session'

import Header from './container/Header/Header';
import Main from './container/Main/Main';




function App() {
  return (
  <Router>
    <div className="App">
        <Header/>

        <Route path = {ROUTES.SIGN_IN} render = {() => <div className = "amaOpacity"/>}/>
        <Route path = {ROUTES.SIGN_UP} render = {() => <div className = "amaOpacity"/>}/>

        <Route exact path ={ROUTES.LANDING}  render = {() => <Slider/>}/>
        <Route exact path ={ROUTES.SIGN_IN}  render = {() => <Slider/>}/>
        <Route exact path ={ROUTES.SIGN_UP}  render = {() => <Slider/>}/>
        
        <Main/>
    </div>
  </Router>
  );
}

export default withAuthentication(App) ;
