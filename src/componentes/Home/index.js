//import React from "react";
import React, { useState, useEffect } from 'react';
import './styles.css';
import foto1 from '../img/foto1.png'

function Home(){  

        const [texto, setTexto] = useState('Frontend Developer');
      
        useEffect(() => {
          const intervalo = setInterval(() => {
            // Alternar entre dos textos
            setTexto(prevTexto => (prevTexto === 'Industrial Engineer' ? 'Frontend Developer' : 'Industrial Engineer'));
          }, 3000); // Cambiar cada x segundos
      
          // Limpieza del intervalo en el desmontaje del componente
          return () => clearInterval(intervalo);
        }, []); // Solo se ejecuta una vez al montar el componente
    

     
    return(
        <div className="home">
            <div className="description"> 
                  <h2 className="hi">Hi, I´m </h2>
                  <h1 className="name">Diego Acosta</h1>
                  <h1 className="profession">{texto}</h1>
                  <div>
                    <p>liknelin</p>
                    <p>cv</p>
                  </div>
            </div>
            <img className="photo" src={foto1} alt="foto" />
        </div>
    )
}

export {Home};