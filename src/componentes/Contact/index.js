import React from "react";
import './styles.css';

function Contact(){

    return(
    <>
        <div className="contact">
            <h1>Contact Me</h1> 

        <div className="info">
            <div>telefono</div>
            <div>correo</div>
            <div>redes</div>
        </div>

        <div className="send"><button>Enviar Mensaje</button></div>
        </div>
    </>
    )
}

export {Contact};