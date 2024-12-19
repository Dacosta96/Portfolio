//import React from "react";
import React, { useState, useEffect } from "react";
import "./styles.css";
import foto1 from "../img/foto1.png";
import logoLinke from "../img/Logolinkedin.png";
import { DocumentIcon } from "@heroicons/react/24/solid";
import doc from "./Diego.pdf";

function Home() {
  const [texto, setTexto] = useState("Frontend Developer");

  useEffect(() => {
    const intervalo = setInterval(() => {
      // Alternar entre dos textos
      setTexto((prevTexto) =>
        prevTexto === "Industrial Engineer"
          ? "FullStack Developer"
          : "Industrial Engineer"
      );
    }, 2000); // Cambiar cada x segundos

    // Limpieza del intervalo en el desmontaje del componente
    return () => clearInterval(intervalo);
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleLinke = () => {
    window.open(
      "https://www.linkedin.com/in/diego-acosta-1472731b4/",
      "_blank"
    );
  };

  return (
    <div className="home">
      <div className="description">
        <h2 className="hi">Hi, I´m </h2>
        <h1 className="name">Diego Acosta</h1>
        <h1 className="profession">{texto}</h1>

        <div className="tagsHome">
          <a className="icon-cards" href={doc} download>
            <DocumentIcon className="itemHome" />
            <p>Curriculum Vitae</p>
          </a>
          <div className="icon-cards" onClick={handleLinke}>
            <img className="itemHome" src={logoLinke} alt="img" />
            <p>Linkedin</p>
          </div>
        </div>
      </div>
      <img className="photo" src={foto1} alt="foto" />
    </div>
  );
}

export { Home };
