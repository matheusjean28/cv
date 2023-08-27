import React from "react";
import { Audio, ProgressBar } from "react-loader-spinner";
import "./Styles/StylesProjects.css";
export default function Projects() {
  return (
    <>
      <div className="Projects">
        <h1>Projetos</h1>
        <ul className="UlProjects">
          <li className="LiProjects">
            <h5>AGILE GEST</h5>
            <p className="PProjects">
              Plataforma de gestao financeira, agende, calcule e melhore sua
              gestão financeira de forma rapida e segura.
            </p>
            <button className="BtnProjects">{">"}</button>
          </li>

          <li className="LiProjectsRigth">
            <h5>AGILE GEST</h5>
            <p className="PProjects">
              Plataforma de gestao financeira, agende, calcule e melhore sua
              gestão financeira de forma rapida e segura.
            </p>
            <button className="BtnProjects">{">"}</button>
          </li>
        </ul>
        <div className="animation">
          <ProgressBar
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor="black"
            barColor="#51E5FF"
          />
        </div>
      </div>
    </>
  );
}
