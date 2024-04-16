import React from "react";
import './styles.css';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import logoHtml from '../img/LogoHtml.png';
import logoCss from '../img/LogoCss.png';
import logogit from '../img/Logogit.png';
import logogithub from '../img/Logogithub.png';
import logojs from '../img/LogoJs.png';
import logoreact from '../img/LogoReact.png';
import logotail from '../img/LogoTaiw.png';
import logovcode from '../img/LogoVcode.png';



function AboutMe(){

    return(
        <>
        <div className="container">
             <div className="container2">
                <div className="aboutMe">ABOUT ME</div>
                    <p className="contenido">
                        I am an industrial engineer with experience in fullstack development and solid
                        knowledge in process engineering. Self-taught and passionate about development
                        and programming, in February 2024 I made the decision to leave my comfort zone 
                        and enter this exciting world of development. My main goal is to become a high-level
                        developer capable of providing solutions to any challenge that arises.
                    </p>
                    <div className="knowMore">know more<ChevronDoubleRightIcon className="icon"/></div>
                    <div className="detail">
                       <div className="detailName">
                        <p><b>Name: </b><br /> Diego Fernando Acosta Salazar </p>
                        <p><b>Birthday: </b><br /> 30 january </p>
                        </div>
                       <div className="education">
                        <p><b>Passionate about: </b><br />Sports and Travel<br /><br /></p>
                       <p className="titleEducation"><b>Education</b></p>
                       <p>      
                                <strong>Industrial Engineering</strong><br />
                                Graduate - University Militar Nueva Granada 2017 - 2022<br /><br />
                                <strong>Developer FullStack</strong><br />
                                Autodidact - 2023 - at the moment
                        </p>
                       </div>

                    </div>
            </div>
            <div className="skills">
                <p>Skills</p>
                        <div className="icon-cards__content">   
                            <img  className="item8" src={logovcode} alt="Vcode" />
                            <div><img  className="item6" src={logotail} alt="Tailw" />
                            <img  className="item3" src={logogit} alt="git" />
                            <img  className="item4" src={logogithub} alt="GitHub" /></div>           
                            <div><img  className="item1" src={logoHtml} alt="html" />
                            <img  className="item2" src={logoCss} alt="css" />
                            <img  className="item7" src={logojs} alt="Js" />
                            <img  className="item5" src={logoreact} alt="React" /></div>
                        </div>
            </div>
            </div>
        </>
    )
}

export {AboutMe};