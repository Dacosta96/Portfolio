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
  
  const cambiarColor = (event) => {
    const x = event.clientX;
    const y = event.clientY + window.scrollY;
    document.documentElement.style.setProperty('--position-x', x+'px');
    document.documentElement.style.setProperty('--position-y', y+'px');

  };

 
  return (
    
      <>
      {/* <div className="nav"><Navbar /></div> */}
      <div className="app"  onMouseMove={cambiarColor}>
            <Home/>
            {/* <AboutMe/>
            <Portfolio/>
            <Contact/> */}
      </div>
   
    </>
  
  );
}

export default App;
