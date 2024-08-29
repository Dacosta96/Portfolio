import React from "react";
import "./styles.css";
import logoReact from "../img/LogoReact.png";
import logoJS from "../img/LogoJs.png";
import logoCss from "../img/LogoCss.png";
import logoMongo from "../img/LogoMongo.png";
import logoTailw from "../img/LogoTaiw.png";
import logoHtml from "../img/LogoHtml.png";
import imgProyectEcommerce from "../img/ProyectEcommerce.png";
import imgProyectGolky from "../img/ProyectGolky.png";
import imgProyectCrm from "../img/ProjectCrm.jpg";

function Portfolio() {
  const handleOpenProyect1 = () => {
    window.open("https://shopi-d.netlify.app/", "_blank");
  };

  const handleCodeProyect1 = () => {
    window.open("https://github.com/Dacosta96/Project_ecommerce", "_blank");
  };

  const handleOpenProyect2 = () => {
    window.open("https://www.golky.co/", "_blank");
  };

  const handleOpenProyect3 = () => {
    alert("Sorry, this page is not public");
  };

  const handleCodeProyect2 = () => {
    alert("Sorry, this code is not public");
  };
  return (
    <div className="portfolio">
      <h1 className="title">Portfolio</h1>
      <div className="proyects">
        <div className="cardProyect">
          <img
            className="imgProyect"
            src={imgProyectCrm}
            alt="img"
            style={{ height: "180px", width: "80%" }}
          />
          <h3 className="titleProyect">CRM management system</h3>
          <p className="descriptionProyect">
            Development of a CRM for a U.S. company, transforming a manual
            process into software that ensures the correct flow and handling of
            information, with work being done on both the backend and frontend.
          </p>
          <div className="logoTech">
            <img className="logoTech_logo" src={logoHtml} alt="img" />
            <img className="logoTech_logo" src={logoJS} alt="img" />
            <img className="logoTech_logo" src={logoReact} alt="img" />
            <img
              className="logoTech_logo"
              src={logoMongo}
              alt="MongoDB Logo"
              style={{ width: "35px", height: "35px" }}
            />
          </div>

          <div className="buttons">
            <button onClick={handleOpenProyect3} className="buttonOpen">
              Open
            </button>
            <button onClick={handleCodeProyect2} className="buttonCode">
              Code
            </button>
          </div>
        </div>

        <div className="cardProyect">
          <img className="imgProyect" src={imgProyectGolky} alt="img" />
          <h3 className="titleProyect">Collaboration in Golky</h3>
          <p className="descriptionProyect">
            I have collaborated with the creation of some interfaces for the
            optimization and maintenance of the platform.
          </p>
          <div className="logoTech">
            <img className="logoTech_logo" src={logoHtml} alt="img" />
            <img className="logoTech_logo" src={logoJS} alt="img" />
            <img className="logoTech_logo" src={logoReact} alt="img" />
            <img className="logoTech_logo" src={logoCss} alt="img" />
          </div>

          <div className="buttons">
            <button onClick={handleOpenProyect2} className="buttonOpen">
              Open
            </button>
            <button onClick={handleCodeProyect2} className="buttonCode">
              Code
            </button>
          </div>
        </div>

        <div className="cardProyect">
          <img className="imgProyect" src={imgProyectEcommerce} alt="img" />
          <h3 className="titleProyect">Ecommerce Shopi-d</h3>
          <p className="descriptionProyect">
            This is a frontend project developed entirely with React. It
            provides an intuitive and attractive user interface for an
            e-commerce application.
          </p>
          <div className="logoTech">
            <img className="logoTech_logo" src={logoHtml} alt="img" />
            <img className="logoTech_logo" src={logoJS} alt="img" />
            <img className="logoTech_logo" src={logoReact} alt="img" />
            <img className="logoTech_logo" src={logoCss} alt="img" />
            <img className="logoTech_logo" src={logoTailw} alt="img" />
          </div>

          <div className="buttons">
            <button onClick={handleOpenProyect1} className="buttonOpen">
              Open
            </button>
            <button onClick={handleCodeProyect1} className="buttonCode">
              Code
            </button>
          </div>
        </div>
      </div>
      <div className="buttonMoreProyect">
        <button>More Proyects</button>
      </div>
    </div>
  );
}

export { Portfolio };
