import React from "react";
import './styles.css';

function Home(){

    return(
        <div className="home">
            <div className="description">
                <h2 className="hi">Hi, I´m </h2>
                <h1 className="name">Diego Acosta</h1>
                <h1 className="profession">Industrial Engineer</h1>
                <h1 className="profession">Frontend Developer</h1>
            </div>
            <img className="photo" src="" alt="foto" />
        </div>
    )
}

export {Home};