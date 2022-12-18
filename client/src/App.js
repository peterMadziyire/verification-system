import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Verify'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Verify from './components/Verify';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        
          <div>
            <Verify/>
            
          </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Router>
    </div>
   
  );
}

export default App;
