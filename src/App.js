import React from 'react';
import {Route , BrowserRouter as Router} from 'react-router-dom';

import './App.css';



function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default withAuthentication(App) ;
