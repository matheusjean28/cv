import React from "react";
import "./Styles/StylesFrameworks.css";

export default function Frameworks() {
  return (
    <>
      <div className="frameworks">
        <h1 className="h1Frame">Ferramentas</h1>
        <p className="PFrameworks">
          Estas são algumas das ferramentas com as quais eu tive mais contato.
          
        </p>

        <ul className="UlFrameworks">
            <li className="LiFrameworks">ReactJS</li>
            <li className="LiFrameworks">C-Sharp <br/>.Net</li>
            <li className="LiFrameworks">MySql <br/>&<br/> Sqlite</li>
            <li className="LiFrameworks">HangFire</li>
        </ul>
      </div>
    </>
  );
}
