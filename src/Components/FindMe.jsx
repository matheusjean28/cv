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
               
              <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/>
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
               <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="linkedin"/>
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
               <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/instagram-new.png" alt="instagram-new"/>
              </a>
            </button>
            <p className="PFindMe">Instagram</p>
          </li>
        </ul>
      </div>
    </>
  );
}
