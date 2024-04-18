import React from "react";
import './styles.css';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import logoReact from '../img/LogoReact.png';
import logoJS from '../img/LogoJs.png';
import logoHtml from '../img/LogoHtml.png';
import logoCss from '../img/LogoCss.png';
import logoTailw from '../img/LogoTaiw.png';
import logoGit from '../img/Logogit.png';
import logoGitHub from '../img/Logogithub.png';
import logoVcode from '../img/LogoVcode.png';

function AboutMe(){

    const skills=[
        { name: 'React.js',
          image:logoReact
        },
        { name: 'Javascript',
          image:logoJS
        },
        { name: 'Html',
          image:logoHtml
        },
        { name: 'Css',
          image:logoCss
        },
        { name: 'Tailwindcss',
          image:logoTailw
        },
        { name: 'Git',
          image:logoGit
        },
        { name: 'GitHub',
          image:logoGitHub
        },
        { name: 'Visual code',
          image:logoVcode
        },

    ]

    const viewTags = (skills) =>{

            return(
                    <div className="tags">
                        {skills.map((skill, index) => (
                            <div key={index} className="icon-cards__content">
                                <img className="item" src={skill.image} alt={skill.name} />
                                <p className="textLogo">{skill.name}</p>
                            </div>
                        ))}
                    </div>      
        )
    }

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
                 {viewTags(skills)}
            </div>
        </div>
        </>
    )
}

export {AboutMe};