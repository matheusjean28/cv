import React from "react";
import "./Styles/StylesFindMe.css";

export default function FindMe() {
  return (
    <>
      <div className="findMe">
        <h1>ME ENCONTRE</h1>
        <p className="PVindMeDescription">
          Você pode me encontrar por aqui! Sinta se a vontade para me mandar uma
          mensagem...
        </p>
        <ul className="UlFindMe">
          <li className="LiFindMe">
            <button>
              <a className="AProjects" href="https://github.com/matheusjean28">
                <img src="src/assets/icons8-github-30.svg" alt="" />
              </a>
            </button>
            <p className="PFindMe">GitHub</p>
          </li>

          <li className="LiFindMe">
            <button>
              <a
                className="AProjects"
                href="https://www.linkedin.com/in/matheus-jean-devmatth-6b909a1b6/"
              >
                <img src="src/assets/icons8-linkedin-26.svg" alt="" />
              </a>
            </button>
            <p className="PFindMe">Linkedin</p>
          </li>

          <li className="LiFindMe">
            <button>
              <a
                className="AProjects"
                href="https://www.instagram.com/_m4tthh___/"
              >
                <img src="src/assets/icons8-instagram-30.svg" alt="" />
              </a>
            </button>
            <p className="PFindMe">Instagram</p>
          </li>
        </ul>
      </div>
    </>
  );
}
