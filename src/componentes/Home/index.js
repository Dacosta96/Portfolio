//import React from "react";
import React, { useState } from 'react';
import './styles.css';
import foto1 from '../img/foto1.png'

function Home(){


    const cambiarColor = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        document.documentElement.style.setProperty('--position-x', x+'px');
        document.documentElement.style.setProperty('--position-y', y+'px');

        console.log(x);
        console.log(y);
      };
    
      
     
      

    return(
        <div className="home" onMouseMove={cambiarColor}>
            <div className="description">
                <h2 className="hi">Hi, I´m </h2>
                <h1 className="name">Diego Acosta</h1>
                <h1 className="profession">Industrial Engineer</h1>
                <h1 className="profession">Frontend Developer</h1>
            </div>
            <img className="photo" src={foto1} alt="foto" />
        </div>
    )
}

export {Home};