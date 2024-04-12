import React from "react";
import './styles.css';


function AboutMe(){

    return(
        <>
        <div className="container">
             <div className="container2">
                <div className="aboutMe">ABOUT ME</div>
                    <p className="contenido">
                        Ingeniero Industrial con experiencia en desarrollo
                        fullstack y sólidos conocimientos en ingeniería de
                        procesos. Apasionado por la optimización y la mejora
                        continua, con habilidades para identificar oportunidades
                        de mejora. soy un profesional de equipo, resolutivo
                        proactivo y apasionado por los nuevos retos.
                    </p>
                    <div className="detail">
                       <div className="detailName">
                        <p>Name <br /> Diego Fernando Acosta Salazar </p>
                        <p>Cumppleaños<br /> 30 january </p>
                        </div>
                       <div className="education">
                        <p>Apasonado por<br /> Deportes y viajes</p>
                       <p>educacion</p>
                       <p>      
                                <strong>Ingenieria industrial</strong><br />
                                Egresado - Universidad Militar Nueva Granada 2017 - 2022<br /><br />
                                <strong>Desarrollador Frontend</strong><br />
                                Autodidacta - 2023 - actualmente
                        </p>
                       </div>

                    </div>
            </div>
            <div className="skills">Skills</div>
            </div>
        </>
    )
}

export {AboutMe};