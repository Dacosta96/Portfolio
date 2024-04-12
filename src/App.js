/* eslint-disable react/jsx-no-undef */
import React from "react";
import { HashRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './componentes/navbar/index'
import { Home } from './componentes/Home/index'
import { AboutMe } from './componentes/Aboutme/index'
import { Portfolio } from './componentes/Portfolio/index'
import { Contact } from './componentes/Contact/index'
import './App.css';


function App() {


  return (
    
      <>
      <div className="nav"><Navbar /></div>
      <div className="app">
            <Home/>
            <AboutMe/>
            <Portfolio/>
            <Contact/>
      </div>
   
    </>
  
  );
}

export default App;
