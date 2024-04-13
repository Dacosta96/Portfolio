import React from "react";
import './styles.css';

function Portfolio(){

    return(
        <div className="portfolio">
            <h1 className="title">Portfolio</h1>
            <div className="proyects">
            <div>proyecto1</div>
            <div>proyecto2</div>
            </div>
            <div className="buttonMoreProyect">
            <button>More Proyects</button>
            </div>
        </div>
    )
}

export {Portfolio};