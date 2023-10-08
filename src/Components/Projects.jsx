import React from "react";
import { ProgressBar } from "react-loader-spinner";
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
            <button className="BtnProjects"><a href="https://github.com/matheusjean28">{"Ver Projeto"}</a></button>

          </li>

          <li className="LiProjectsRigth">
            <h5>MAC SAVE</h5>
            <p className="PProjects">
              atualmente este projeto esta apenas recebendo mudanças na API,<br/> já é possivel salvar um arquivos .CSV via post na API e salvar os dados validados no banco de dados Sqlite.
            </p>
            <button className="BtnProjects  "><a href="https://github.com/matheusjean28/mac_register">{"Ver Projeto"}</a></button>
          </li>
        </ul>
      </div>
        <div className="animation">
          <ProgressBar
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor="black"
            barColor="#51E5FF"
          />
        </div>
    </>
  );
}
